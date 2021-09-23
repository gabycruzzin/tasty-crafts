import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ShopItem } from "./ShopItem";
import Divider from "@mui/material/Divider";

export function Shop() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const flexPercentage = isSmall ? "100%" : "50%";

  return (
    <>
      <Divider
        sx={{
          "&.MuiDivider-root": {
            "&::before": {
              borderTopColor: "white",
            },
            "&::after": {
              borderTopColor: "white",
            },
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "learning-curve, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            textAlign: "center",
            padding: "1rem",
            color: "white",
          }}
        >
          Shop
        </Typography>
      </Divider>
      <Paper>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            paddingTop: "1rem",
            paddingRight: "1rem",
            textAlign: "right",
          }}
        >
          Displaying 4 items
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem",
            margin: "1rem",
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
