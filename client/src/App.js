import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <header>
        <AppNavbar />
      </header>
      <main
        style={{
          backgroundImage: `url(${tiledImg})`,
          backgroundRepeat: "repeat",
          marginTop: 48,
          height: "80vh",
          overflowY: "auto",
        }}
      >
        <Container maxWidth="md">
          <Routes>
            <Route exact path="/customservices" element={<CustomServices />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/" element={<Welcome />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <Typography variant="overline" sx={{ margin: "1rem" }}>
          &copy; 2021 Tasty Crafts Co.
        </Typography>
      </footer>
    </BrowserRouter>
  );
}
