import React, { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../utilis/axiosInstance"; 
import { IItem} from "../types"; 
import { useAuth } from "./AuthContext"; 

interface ItemContextType {
  items: IItem[];
  searchResults: IItem[];
  searchQuery: string;
  fetchItems: () => void;
  addItem: (item: IItem) => void;
  uploadImage: (image: string) => Promise<string>;
  deleteItem: (id: string) => void;
  editItem: (id: string, updatedItem: IItem) => void;
  searchItems: (query: string) => void;
  error: string | null;
  success: boolean;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<IItem[]>([]);
  const [searchResults, setSearchResults] = useState<IItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { token } = useAuth();

  const searchItems = async (query: string) => {

    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      return; 
    }
    try {
      const response = await axiosInstance.get("/items/search", {
        params: { query },
        headers: {
          Authorization : `Bearer ${token} `
        }
      })
      setSearchResults(response.data)
    } catch (error) {
      setError("failed to search item")
      console.error( "Error searchning Item" ,error);
      
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axiosInstance.get("/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      setError("Failed to fetch items");
      console.error("Error fetching items:", error);
    }
  };

  const addItem = async (item: Partial<IItem>) => {
    try {
      const response = await axiosInstance.post("/items", item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems([...items, response.data]);
      setSuccess(true);
    } catch (error) {
      setError("Failed to add item");
      console.error("Error adding item:", error);
    }
  };
  const uploadImage = async (image: string): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await axiosInstance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };
  const deleteItem = async (id: string) => {
    try {
      await axiosInstance.delete(`/items/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(items.filter((item) => item._id !== id));
      setSuccess(true);
    } catch (error) {
      setError("Failed to delete item");
      console.error("Error deleting item:", error);
    }
  };

  const editItem = async (id: string, updatedItem: IItem) => {
    try {
      const response = await axiosInstance.put(`/items/${id}`, updatedItem);
      setItems(items.map((item) => (item._id === id ? response.data : item)));
      setSuccess(true);
    } catch (error) {
      setError("Failed to update item");
      console.error("Error updating item:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        items,
        searchResults,
        searchQuery,
        fetchItems,
        addItem,
        deleteItem,
        editItem,
        uploadImage,
        searchItems,
        error,
        success,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
};
