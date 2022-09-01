import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutApp } from "./components/AboutApp/AboutApp";
import { Example } from "./components/Example/Example";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Home } from "./components/Home/Home";
import { Main } from "./components/Main/Main";
import { Website } from "./components/Website/Websites";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/upload" element={<Main />}></Route>
          <Route path="/example" element={<Example />}></Route>
          <Route path="/website" element={<Website />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<AboutApp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
