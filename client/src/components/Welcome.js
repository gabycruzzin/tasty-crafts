import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";

export function Welcome() {
  const history = useHistory();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box
        sx={{
          top: "30vh",
          position: "absolute",
          textAlign: "center",
          maxWidth: 300,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5">Greetings 🖖</Typography>
            <Typography variant="body1" gutterBottom>
              I make handmade gifts that include stickers, stationery, and
              custom signs
            </Typography>
            <Typography variant="body2">Check 'em out!</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" onClick={() => history.push("/shop")}>
              🛒 Shop
            </Button>
            <Button
              size="small"
              onClick={() => history.push("/customservices")}
            >
              🔨 Custom Services
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
