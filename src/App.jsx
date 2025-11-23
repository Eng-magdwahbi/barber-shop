import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/1-Header/Header";
import Services from "./components/2-MainPage/Services/Services";
import Footer from "./components/3-Footer/Footer";
import Barbers from "./components/2-MainPage/Services/Barbers/Barbers";
import Page from "./Page";
import BarbersRoute from "./routes/BarbersRoute";
import ServicePage from "./components/2-MainPage/Services/ServicePage/ServicePage";
import ServicesRoute from "./routes/ServicesRoute";
import BookRoute from "./routes/BookRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/barbers" element={<BarbersRoute />} />
        <Route path="/servicesRoute" element={<ServicesRoute />} />
        <Route path="/bookRoute" element={<BookRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
