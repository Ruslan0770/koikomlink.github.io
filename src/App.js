import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Termss from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <div className="App">
        {loading ? (
          <PulseLoader
            color={"#5230f2"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/services" element={<Services />} />
              <Route path="/terms" element={<Termss />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
