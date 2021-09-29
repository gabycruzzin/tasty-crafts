import * as React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";

export function ShopItem({ item }) {
  let imagePath = require(`../img/${item.image}`);

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={imagePath.default}
          alt="pic"
          style={{
            borderRadius: "0.5rem",
            width: "100%",
          }}
        />
        <div style={{ position: "absolute", top: "-1rem", right: "-1rem" }}>
          <Chip label="Free Shipping" color="success" />
        </div>
      </div>
      <Typography variant="h6" gutterBottom>
        {item.title}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          ${item.price}
        </Typography>
        <Button
          variant="contained"
          endIcon={<ExitToApp />}
          onClick={() => (window.location.href = `${item.etsy_link}`)}
        >
          Etsy
        </Button>
      </Stack>
    </>
  );
}
