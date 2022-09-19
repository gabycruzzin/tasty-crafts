import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function Welcome() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const widthPercentage = isSmall ? "90%" : "50%";
  const topvh = isSmall ? "20vh" : "30vh";

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box
        sx={{
          top: topvh,
          position: "absolute",
          textAlign: "center",
          width: widthPercentage,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4">Greetings 🖖</Typography>
            <Typography variant="h5">
              Welcome to the Tasty Crafts Shop!
            </Typography>
            <Typography variant="body1" gutterBottom>
              I make handmade, quality stickers from my original designs and
              sell them on Etsy. More to come in 2022. 😃
            </Typography>
            <Typography variant="body2">Check 'em out!</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={() => navigate("/shop")}>
              🛒 Sticker Shop
            </Button>
            <Button
              size="small"
              onClick={() => navigate("/customservices")}
            >
              🔨 Custom Gifts
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
