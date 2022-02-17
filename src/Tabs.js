import { useState } from "react";
import "./styles.css";

export default function Tabs() {
  const [showTab, setShowTab] = useState("Home");
  return (
    <div className="App">
      <button onClick={() => setShowTab("Home")}>Home</button>
      <button onClick={() => setShowTab("About")}>About</button>
      <button onClick={() => setShowTab("Portfolio")}>Portfolio</button>
      <br />
      {showTab === "Home" && <Home />}
      {showTab === "About" && <About />}
      {showTab === "Portfolio" && <Portfolio />}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Hello This is Home Page</h1>
      <p>Contents of Home page</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>Hello This is About Page</h1>
      <p>Contents of About page</p>
    </div>
  );
}
function Portfolio() {
  return (
    <div>
      <h1>Hello This is Home Page</h1>
      <p>Contents of Portfolio page</p>
    </div>
  );
}
