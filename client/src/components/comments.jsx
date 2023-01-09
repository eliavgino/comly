import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useContext, useEffect } from "react";
import { CommentContext } from "../context/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Comments() {
  const { comments } = useContext(CommentContext);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={2}>
        {comments.map((val) => (
          <Grid item xs={12} sm={10} md={12}>
            <Card sx={{ maxWidth: 1000 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {val.name[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={val.name}
                subheader={Date()}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {val.body}
                </Typography>
              </CardContent>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
