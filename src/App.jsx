import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimalProvider } from "./context/AnimalContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Animal from "./pages/Animal";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <AnimalProvider>
      <BrowserRouter>
        <div className=" flex flex-col justify-between h-screen">
          <div className="navBar-container">
            <Navbar title={"Furry Friends"} />
          </div>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/animals/:animal" element={<Animal />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AnimalProvider>
  );
}

export default App;
