import * as React from "react";
import Typography from "@mui/material/Typography";
import pic from "../img/2.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function ShopItem() {
  return (
    <>
      <img
        src={pic}
        alt="pic"
        style={{
          borderRadius: "1rem",
          width: "100%",
        }}
      />
      <Typography variant="h6" component="div" gutterBottom>
        Back to School Sticker Sheet | Set of 12 | Bullet Journal Stickers,
        Planner Stickers, Scrapbook Stickers, Journal Stickers, Cute Stickers
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          $3.99
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
