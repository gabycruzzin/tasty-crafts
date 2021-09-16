import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    top: "30vh",
    position: "absolute",
    textAlign: "center",
    maxWidth: 300,
  },
  actions: {
    justifyContent: "center",
  },
});

export function Welcome() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">Greetings 🖖</Typography>
          <Typography variant="body1">
            I make cute things such as stationary, stickers, and custom gifts.
          </Typography>
          <Typography variant="body2">Check 'em out!</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Link to="/shop">
            <Button size="small">🛒 Shop</Button>
          </Link>
          <Link to="/customservices">
            <Button size="small">🔨 Custom Services</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
