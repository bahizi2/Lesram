import "./styles.css";
import navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
// import Home from "./routes/Home";
// import About from "./routes/About";
// import Service from "./routes/Service";
// import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
     <navbar/>
    </div>
  ); 
}
