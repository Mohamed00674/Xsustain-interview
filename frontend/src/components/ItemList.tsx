import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Button,
  Snackbar,
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useItems } from "../context/ItemContext"; 
import { IItem } from "../types"; 

const ItemList: React.FC = () => {
  const { items, deleteItem, editItem, addItem, error, success } = useItems();

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentItem, setCurrentItem] = useState<IItem | null>(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreateOpen = () => setOpenCreate(true);
  const handleCreateClose = () => setOpenCreate(false);

  const handleEditOpen = (item: IItem) => {
    setCurrentItem(item);
    setName(item.name);
    setCategory(item.category);
    setPrice(item.price);
    setOpenEdit(true);
  };

  const handleEditClose = () => setOpenEdit(false);

  const handleDeleteOpen = (item: IItem) => {
    setCurrentItem(item);
    setOpenDelete(true);
  };

  const handleDeleteClose = () => setOpenDelete(false);

  const handleCreateSubmit = async () => {
    if (!name || !category || !price) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const newItem: IItem = {
        _id: "",
        name,
        category,
        price,
        imageUrl: "", 
      };

      addItem(newItem); 
      handleCreateClose(); 
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleEditSubmit = () => {
    if (currentItem) {
      const updatedItem = { ...currentItem, name, category, price };
      editItem(currentItem._id, updatedItem); 
      handleEditClose();
    }
  };

  const handleDeleteConfirm = () => {
    if (currentItem) {
      deleteItem(currentItem._id); 
      handleDeleteClose();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 2,
        overflowY: "auto",
      }}
    >
      <h1>Items List</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateOpen}
        sx={{ marginBottom: 2 }}
      >
        Create Item
      </Button>

      <TableContainer component={Paper} sx={{ flexGrow: 1, overflowY: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => handleEditOpen(item)}
                    sx={{ marginRight: 2 }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => handleDeleteOpen(item)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => {}}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => {}} severity="success" sx={{ width: "100%" }}>
          Operation was successful!
        </Alert>
      </Snackbar>

      <Snackbar
        open={Boolean(error)}
        autoHideDuration={2000}
        onClose={() => {}}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => {}} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

      <Dialog open={openCreate} onClose={handleCreateClose}>
        <DialogTitle>Create Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleEditClose}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Delete Item</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ItemList;
