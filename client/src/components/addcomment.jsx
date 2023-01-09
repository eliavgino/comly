import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Comments from "./comments";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CommentContext } from "../context/Comment";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddComment() {
  const { addNewComment, getComments } = useContext(CommentContext);
  const [comment, setComment] = useState({
    body: null,
  });
  useEffect(() => {
    getComments();
  }, [comment]);
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <i class="bi bi-chat-left-dots-fill"></i>
      </Avatar>
      <Typography component="h1" variant="h5">
        add comment
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewComment(comment);
        }}
      >
        <Box sx={{ mt: 1 }}>
          <TextField
            autoComplete="given-name"
            type="text"
            placeholder="user name..."
            name="userName"
            required
            fullWidth
            autoFocus
            onChange={(ev) => setComment({ ...comment, body: ev.target.value })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            send
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                didnt log in yet?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
