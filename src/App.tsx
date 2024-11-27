
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './GrainEffect.css';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import PortfolioPage from "./pages/PortfolioPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  


  return (
    <Router>
      <div data-scroll-container>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
      </div>
      {/* <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div> */}
    </Router>
  );
};

export default App;
