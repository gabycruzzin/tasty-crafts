import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import shopItems from "../data/items.json";
import Button from "@mui/material/Button";
import ExitToApp from "@mui/icons-material/ExitToApp";

export function ItemDetails() {
  const { id } = useParams();
  const item = shopItems.find((element) => element.item_number === id);
  let imagePath = require(`../img/${item.image}`);

  return (
    <Paper>
      <Box
        sx={{
          padding: "1rem",
          margin: "1rem",
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
        <Typography
          variant="subtitle1"
          sx={{ whiteSpace: "pre-wrap" }}
          gutterBottom
        >
          {item.description}
        </Typography>
        <Typography variant="overline" gutterBottom>
          Details
        </Typography>
        <Typography
          variant="body2"
          sx={{ whiteSpace: "pre-wrap" }}
          gutterBottom
        >
          {item.details}
        </Typography>
        <Typography variant="overline" gutterBottom>
          Shipping Info
        </Typography>
        <Typography
          variant="body2"
          sx={{ whiteSpace: "pre-wrap" }}
          gutterBottom
        >
          {item.shipping}
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button variant="contained" size="large" endIcon={<ExitToApp />}>
            View on Etsy!
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
