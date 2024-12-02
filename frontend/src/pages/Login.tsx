import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        minHeight: "100vh", 
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1, 
        }}
      >
        <LoginForm />
      </Box>
      <Footer />
    </Box>
  );
};
