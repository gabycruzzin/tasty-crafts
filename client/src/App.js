import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import { AppNavbar } from "./components/AppNavbar";
import { CustomServices } from "./components/CustomServices";
import { Shop } from "./components/Shop";
import { Welcome } from "./components/Welcome";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import tiledImg from "./img/tiled.jpg";

const useStyles = makeStyles({
  main: {
    backgroundImage: `url(${tiledImg})`,
    backgroundRepeat: "repeat",
    marginTop: 48,
    height: "80vh",
  },
});
export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <header>
        <AppNavbar />
      </header>
      <main className={classes.main}>
        <Container maxWidth="md">
          <Switch>
            <Route path="/customservices">
              <CustomServices />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </Container>
      </main>
      <footer>
        <p>&copy; 2021 Tasty Crafts Co.</p>
      </footer>
    </Router>
  );
}
