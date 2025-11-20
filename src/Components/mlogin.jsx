import React from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "30px", marginTop: "100px" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <LockIcon fontSize="large" color="primary" />
          <Typography variant="h5" style={{ margin: "20px 0" }}>
            Login
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
