import React from "react";
import Header from "./components/1-Header/Header";
import Services from "./components/2-MainPage/Services/Services";
import Footer from "./components/3-Footer/Footer";
import { Container } from "@mui/material";

export default function Page() {
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
