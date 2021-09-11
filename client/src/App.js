import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.css";
import { AppNavbar } from "./components/AppNavbar";
import { Journey } from "./components/Journey";
import { Home } from "./components/Home";

export default function App() {
  return (
    <Router>
      <header>
        <AppNavbar />
      </header>
      <main>
        <div className="container">
          <div id="home">
            <Home />
          </div>
          <div id="journey">
            <Journey />
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2021 Tasty Crafts Co.</p>
        </div>
      </footer>
    </Router>
  );
}
