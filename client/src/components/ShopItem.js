import * as React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export function ShopItem({ item }) {
  let imagePath = require(`../img/${item.image}`);

  return (
    <Link
      to={{
        pathname: `/shop/${item.item_number}`,
      }}
    >
      <img
        src={imagePath.default}
        alt="pic"
        style={{
          borderRadius: "0.5rem",
          width: "100%",
        }}
      />
      <Typography variant="h6" gutterBottom>
        {item.title}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ${item.price}
        </Typography>
        <Chip label="Free Shipping" color="success" size="small" />
      </Stack>
    </Link>
  );
}
