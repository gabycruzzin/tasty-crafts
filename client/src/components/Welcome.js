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
              Welcome to Tasty Crafts!
            </Typography>
            <Typography variant="body1" gutterBottom>
              I create custom chalkboard signs for weddings, bridal showers, coffee shops, or any other signage need you may have :)
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={() => navigate("/shop")}>
              Checkout my work
            </Button>
            <Button
              size="small"
              onClick={() => navigate("/customservices")}
            >
              FAQ
            </Button>
            <Button
              size="small"
              onClick={() => navigate("/customservices")}
            >
              Contact me!
            </Button>        
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
