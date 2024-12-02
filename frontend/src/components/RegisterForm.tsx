import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import axiosInstance from "../utilis/axiosInstance";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.post("/auth/register", {
        username,
        password,
      });

      setSuccess(true);
      console.log("Registration successful:", response.data);

      setUsername("");
      setPassword("");
      setLoading(false);

      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Username is already taken or there was an error");
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        Register
      </Typography>

      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mt: 2, textAlign: "center" }}
      >
        Already have an account?{" "}
        <Link
          href="/login"
          underline="hover"
          sx={{ cursor: "pointer", color: "primary.main" }}
        >
          Login here
        </Link>
      </Typography>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration successful! Redirecting to login...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterForm;
