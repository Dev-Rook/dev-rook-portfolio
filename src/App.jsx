import { BrowserRouter, Route, Routes } from "react-router-dom";

// Comnponents Import:
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Routes:
import Index from "./routes/Index.jsx";
import Projects from "./routes/Projects";

// Dynamic Routes:

// Nested Routes:
import Frontend from "./routes/nested/Frontend";
import Backend from "./routes/nested/Backend";
import Other from "./routes/nested/Other";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
