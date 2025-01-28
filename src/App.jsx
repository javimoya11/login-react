import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
    return (
      <div>
        <BrowserRouter>
            <header>
              <Link to="/">Home</Link>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};
  
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);