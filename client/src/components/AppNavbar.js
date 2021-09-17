import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../img/tclogo.jpg";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

const fontSize = "1.75rem";
const logoSize = "2.25rem";

export function AppNavbar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/shop">
              <MenuItem onClick={handleClose}>Shop</MenuItem>
            </Link>
            <Link to="/customservices">
              <MenuItem onClick={handleClose}>Custom Services</MenuItem>
            </Link>
          </Menu>
          <Box
            sx={{
              typography: "h6",
              flexGrow: 1,
              fontFamily: "learning-curve, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: fontSize,
            }}
          >
            <Link to="/">Tasty Crafts</Link>
          </Box>
          <IconButton
            aria-label="logo"
            size="small"
            onClick={() => history.push("/")}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                borderRadius: "50%",
                maxHeight: logoSize,
                maxWidth: logoSize,
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
