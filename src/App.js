import React from "react";
import "./style.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";

export default function App() {
  return (
    <main>
      <Navbar />
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Error} />
      </switch>
    </main>
  );
}
