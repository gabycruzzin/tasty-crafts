import Typography from "@mui/material/Typography";

export function ItemDetails() {
  return (
    <>
      <Typography variant="subtitle1" component="div" gutterBottom>
        It's back to school time!
        <br />
        These stickers are great for planners, bullet journals, scrapbooking,
        crafting, journaling etc.
      </Typography>
      <Typography variant="overline" gutterBottom component="div">
        Details
      </Typography>
      <Typography variant="body2" component="div" gutterBottom>
        • 1 sheet comes with 12 kiss-cut stickers
        <br />• Printed on White MATTE sticker paper
        <br />• Stickers are not weatherproof - best used on dry surfaces
      </Typography>
      <Typography variant="overline" gutterBottom component="div">
        Shipping Info
      </Typography>
      <Typography variant="body2" component="div" gutterBottom>
        • Ships via USPS First Class Mail
        <br />• Please message me for any questions/concerns on your order
      </Typography>
    </>
  );
}
