import { BrowserRouter, Route, Routes } from "react-router-dom";

// Comnponents Import:
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Route Imports:
import Index from "./routes/Index.jsx";

// Nested Routes:
import Frontend from "./routes/nested/Frontend";
import Backend from "./routes/nested/Backend";
import Other from "./routes/nested/Other";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
