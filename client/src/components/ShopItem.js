import * as React from "react";
import Typography from "@mui/material/Typography";
import pic from "../img/2.jpg";

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
