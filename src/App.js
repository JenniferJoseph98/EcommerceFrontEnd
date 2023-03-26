import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Content from "./components/content/Content";
import Details from "./components/content/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/details" element={<Details />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
