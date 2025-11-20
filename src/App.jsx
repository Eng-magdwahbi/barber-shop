import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/1-Header/Header";
import Services from "./components/2-MainPage/Services/Services";
function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Services />
      </Container>
    </>
  );
}

export default App;
