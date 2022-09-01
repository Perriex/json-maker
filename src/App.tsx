import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/json-maker/form" element={<Form />}></Route>
          <Route path="/json-maker/upload" element={<Main />}></Route>
          <Route path="/json-maker/example" element={<Example />}></Route>
          <Route path="/json-maker/website" element={<Website />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/json-maker/*" element={<AboutApp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
