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
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ${item.price}
          </Typography>
          <Chip label="Free Shipping" color="success" size="small" />
        </Stack>
        <br />
        <Stack direction="row" justifyContent="space-between">
          <div style={{ width: "70%", paddingRight: "1em" }}>
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
          </div>

          <div style={{ width: "30%" }}>
            <Typography variant="overline" gutterBottom>
              Processing Time
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.processing_time}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Height
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.height}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Width
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.width}
            </Typography>
            <Typography variant="overline" gutterBottom>
              Materials
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.materials}
            </Typography>
          </div>
        </Stack>
        <br />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            endIcon={<ExitToApp />}
            onClick={() => (window.location.href = `${item.etsy_link}`)}
          >
            Buy on Etsy!
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
