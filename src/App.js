import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
