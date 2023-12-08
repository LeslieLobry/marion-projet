
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Error from "./pages/Erreur/erreur";
import Contact from "./pages/Contact/contact";
import Prestation from "../src/pages/Prestation/prestation";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import '../src/style/style.css'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Prestation/:id" element={<Prestation />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
