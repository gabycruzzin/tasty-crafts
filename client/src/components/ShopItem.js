import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function ShopItem() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const flexPercentage = isSmall ? "100%" : "50%";

  return (
    <>
      <Typography
        variant="h2"
        component="div"
        gutterBottom
        sx={{
          textAlign: "center",
          padding: "1rem",
          color: "white",
          letterSpacing: 6,
        }}
      >
        Shop
      </Typography>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: 1,
            margin: 1,
          }}
        >
          <Box
            sx={{ padding: 1, border: "grey 1px solid", flex: flexPercentage }}
          >
            Item 1
          </Box>
          <Box
            sx={{ padding: 1, border: "grey 1px solid", flex: flexPercentage }}
          >
            Item 2
          </Box>
          <Box
            sx={{ padding: 1, border: "grey 1px solid", flex: flexPercentage }}
          >
            Item 3
          </Box>
        </Box>
      </Paper>
    </>
  );
}
