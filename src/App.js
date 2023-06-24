import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mearn-stack/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
