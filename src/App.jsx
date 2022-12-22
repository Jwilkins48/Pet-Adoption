import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimalProvider } from "./context/AnimalContext";
import Home from "./pages/Home";
import SearchAnimals from "./pages/SearchAnimals";
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
          <main className="container flex m-auto justify-center px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/allAnimals" element={<SeeAll />} /> */}
              <Route path="/search" element={<SearchAnimals />} />
              <Route path="search/animals/:animal" element={<Animal />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AnimalProvider>
  );
}

export default App;
