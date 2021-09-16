import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import logo from "../img/tclogo.jpg";

const fontSize = "1.75rem";
const logoSize = "2.25rem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "learning-curve, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: fontSize,
  },
  img: {
    borderRadius: "50%",
    maxHeight: logoSize,
    maxWidth: logoSize,
  },
}));

export function AppNavbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
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
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Tasty Crafts</Link>
          </Typography>
          <IconButton aria-label="logo" size="small">
            <img src={logo} alt="logo" className={classes.img} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
