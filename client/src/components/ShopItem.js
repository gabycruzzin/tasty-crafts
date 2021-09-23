import * as React from "react";
import Typography from "@mui/material/Typography";
import pic from "../img/998277446.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function ShopItem({ item }) {
  return (
    <>
      <img
        src={pic}
        alt="pic"
        style={{
          borderRadius: "0.5rem",
          width: "100%",
        }}
      />
      <Typography variant="h6" component="div" gutterBottom>
        {item.title}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ${item.price}
        </Typography>
        <Chip
          label="Free Shipping"
          color="success"
          size="small"
          variant="outlined"
        />
      </Stack>
    </>
  );
}
