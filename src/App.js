import "./App.css";
import Navabar from "./Navabar";
import SubLinks from "./SubLinks";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

function App() {
  return (
    <div className="g-container">
      <Navabar />
      <SubLinks />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
