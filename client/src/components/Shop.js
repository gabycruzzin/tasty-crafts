import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ShopItem } from "./ShopItem";

export function Shop() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const flexPercentage = isSmall ? "100%" : "50%";

  return (
    <>
      <Typography
        variant="h2"
        component="div"
        sx={{
          textAlign: "center",
          padding: "1rem",
          color: "white",
        }}
      >
        Shop
      </Typography>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem",
          }}
        >
          <Box sx={{ padding: "1rem", flex: flexPercentage }}>
            <ShopItem />
          </Box>
          <Box sx={{ padding: "1rem", flex: flexPercentage }}>
            <ShopItem />
          </Box>
          <Box sx={{ padding: "1rem", flex: flexPercentage }}>
            <ShopItem />
          </Box>
          <Box sx={{ padding: "1rem", flex: flexPercentage }}>
            <ShopItem />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
