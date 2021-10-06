import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export function CustomServices() {
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
            <Typography variant="h5">Custom Gifts Coming 2022! 🎉</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
