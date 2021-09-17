import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import { AppNavbar } from "./components/AppNavbar";
import { CustomServices } from "./components/CustomServices";
import { Shop } from "./components/Shop";
import { Welcome } from "./components/Welcome";
import Container from "@mui/material/Container";
import tiledImg from "./img/tiled.jpg";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <Router>
      <header>
        <AppNavbar />
      </header>
      <main
        style={{
          backgroundImage: `url(${tiledImg})`,
          backgroundRepeat: "repeat",
          marginTop: 48,
          height: "80vh",
        }}
      >
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
        <Typography variant="overline" sx={{ margin: "1rem" }}>
          &copy; 2021 Tasty Crafts Co.
        </Typography>
      </footer>
    </Router>
  );
}
