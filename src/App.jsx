import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-lg text-center my-3">
        <Container />
      </div>
      <Footer />
    </>
  );
};

export default App;
