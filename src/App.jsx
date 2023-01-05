import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimalProvider } from "./context/AnimalContext";
import Home from "./pages/Home";
import SearchAnimals from "./pages/SearchAnimals";
import Animal from "./pages/Animal";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import Wishlist from "./pages/Wishlist";
import Inquiry from "./pages/Inquiry";

function App() {
  return (
    <AnimalProvider>
      <BrowserRouter>
        <div className=" flex flex-col justify-between min-h-screen">
          <div className="navBar-container">
            <Navbar title={"Furry Friends"} />
          </div>
          <main className="container relative flex m-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search" element={<SearchAnimals />} />
              <Route path="/adoptionRequest" element={<Inquiry />} />
              <Route path="/search/animals/:id" element={<Animal />} />
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
