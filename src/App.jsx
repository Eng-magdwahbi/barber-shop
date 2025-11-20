import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/1-Header/Header";
import Services from "./components/2-MainPage/Services/Services";
import Footer from "./components/3-Footer/Footer";
function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Services />
      </Container>
      <Footer />
    </>
  );
}

export default App;
