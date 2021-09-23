import * as React from "react";
import Typography from "@mui/material/Typography";
import pic from "../img/2.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function ShopItem() {
  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        Back to School Sticker Sheet | Set of 12 | Bullet Journal Stickers,
        Planner Stickers, Scrapbook Stickers, Journal Stickers, Cute Stickers
      </Typography>
      <img
        src={pic}
        alt="pic"
        style={{
          borderRadius: "1rem",
          width: "100%",
        }}
      />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Typography variant="h6">$3.99</Typography>
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
