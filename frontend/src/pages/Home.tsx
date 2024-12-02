import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography, Button, Box, Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
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
          backgroundColor: "#f5f5f5",
          py: 8,
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Welcome to the Items Management System
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Effortlessly manage, organize, and keep track of your items with our
            intuitive platform.
          </Typography>
          <Link to="/login">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>
          </Link>
        </Container>
      </Box>

      <Container sx={{ mt: 6, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Easy to Use
              </Typography>
              <Typography color="textSecondary">
                Our system is designed with simplicity in mind, ensuring you can
                manage your items effortlessly.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Powerful Features
              </Typography>
              <Typography color="textSecondary">
                Enjoy advanced tools like item categorization, search, and
                tracking in one place.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Secure and Reliable
              </Typography>
              <Typography color="textSecondary">
                Your data is safe with us. We prioritize security and
                reliability in every aspect of our system.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
