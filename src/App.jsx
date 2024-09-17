import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
