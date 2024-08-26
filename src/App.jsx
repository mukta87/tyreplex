import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DealerSingle from "./pages/DealerSingle";
function App() {
  return (
    <>
      <Header />
      {/* All route goes here */}
      <Routes>
        <Route path="/" element={<DealerSingle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
