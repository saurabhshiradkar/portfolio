import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Expertise></Expertise>
      <Footer></Footer>
    </>
  );
}

export default App;
