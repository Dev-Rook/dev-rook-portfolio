import { BrowserRouter, Route, Routes } from "react-router-dom";

// Hooks Import:
import useScrollUp from "./hooks/useScrollUp.jsx";

// Styles Import:
import styles from "./App.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports:
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Route Imports:
import Index from "./routes";
import Projects from "./routes/Projects";
import Profile from "./routes/Profile";
import Error from "./routes/Error";

const App = () => {
  const { scrollUp, backToTop } = useScrollUp();
  return (
    <div className={"App"}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "white" }}
        className={`${styles.Back_To_Top_Icon} ${
          backToTop ? styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
};

export default App;
