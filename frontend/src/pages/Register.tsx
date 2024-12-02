import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export const Register = () => {
  return (
    <>
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
          <RegisterForm />
        </Box>
        <Footer />
      </Box>
    </>
  );
};
