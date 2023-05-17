import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import BookmarkList from "./pages/BookmarkList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/bookmarklist" element={<BookmarkList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
