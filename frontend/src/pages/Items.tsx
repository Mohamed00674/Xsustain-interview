import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";

const Items: React.FC = () => {
    

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box sx={{
        marginTop: "40px",
        width: "30%",
        marginLeft : "20px"
      }} >
        <SearchBar/>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexGrow: 1,
          padding: 2,
        }}
      >
        <ItemList />
      </Box>

      <Footer />
    </Box>
  );
};

export default Items;
