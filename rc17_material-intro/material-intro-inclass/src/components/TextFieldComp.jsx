import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, Seterror] = useState(false);
  return (
    <div>
      <Container>
        <Typography variant="h4" color="secondary.light" align="center" mt={4}>
          TEXT FIELD
        </Typography>
        <Box sx={{ mt: 4 }} textAlign="center">
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email format"}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            placeholder="Enter your password"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, backgroundColor: "secondary.dark" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
