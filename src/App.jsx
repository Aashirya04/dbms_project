import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import QueryPage from "./components/QueryPage/QueryPage";
import PaintingsGallery from "./components/test/PaintingGallery";

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/query" element={<QueryPage />} />
        <Route path="/test" element={<PaintingsGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
