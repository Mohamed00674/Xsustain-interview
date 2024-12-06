import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useItems } from "../context/ItemContext"; 

const SearchBar: React.FC = () => {
  const { searchItems, searchResults } = useItems(); 
  const [query, setQuery] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    await searchItems(query);
    setLoading(false);
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          fullWidth
          label="Search items"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Search"}
        </Button>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        {loading ? (
          <Typography variant="body1" align="center">
            Loading...
          </Typography>
        ) : searchResults.length > 0 ? (
          searchResults.map((item) => (
            <Box
              key={item._id}
              sx={{
                padding: 2,
                borderBottom: "1px solid #ddd",
                marginBottom: 2,
              }}
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography>Category: {item.category}</Typography>
              <Typography>Price: ${item.price}</Typography>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: 100, marginTop: 10 }}
                />
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No results found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;
