import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Comments from "../components/comments";

import AddComment from "./../components/addcomment";

const theme = createTheme();
export default function FullComment() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8}>
          <Comments />
        </Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <AddComment />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
