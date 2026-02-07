import { Routes, Route } from "react-router-dom";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import FormulaBackground from "./components/layout/FormulaBackground";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="bg-balls" aria-hidden="true">
        <span className="bg-ball bg-ball--one" />
        <span className="bg-ball bg-ball--two" />
        <span className="bg-ball bg-ball--three" />
        <span className="bg-ball bg-ball--four" />
        <FormulaBackground />
      </div>
      <ScrollToTop />
      <TopNav /> 
      <main className="space-y-12 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
