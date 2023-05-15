import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <Router>
      <Header />
      <Footer />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </Router>
  );
}

export default App;
