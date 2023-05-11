import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import SignInUpForm from "./pages/Login";
import Footer from "./components/Footer/Footer";
import "./components/ContactAbout/ConAbout.css";
import Vegetables from "./components/P-Categories/Vegetables";
import Header from "./components/Header/Header";
import Fruits from "./components/P-Categories/Fruits";
import Meats from "./components/P-Categories/Meats";
import Bakery from "./components/P-Categories/Bakery";
import Frozen from "./components/P-Categories/Frozen";
import Search from "./components/P-Categories/Search";
import Dairy from "./components/P-Categories/Dairy";
import Basic from "./pages/Cart_page";
import Conff from "./pages/Conff";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      <BrowserRouter>
        <ProductContext.Provider value={{ data }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <Header />

            <Routes>

              <Route path="Cart_page" element={<Basic />} />
              <Route path="/" element={<Landing />} />
              <Route path="Products" element={<Products />} />
              <Route path="Vegetables" element={<Vegetables />} />
              <Route path="Fruits" element={<Fruits />} />
              <Route path="Dairy" element={<Dairy />} />
              <Route path="Meats" element={<Meats />} />
              <Route path="Bakery" element={<Bakery />} />
              <Route path="Frozen" element={<Frozen />} />
              <Route path="Search" element={<Search />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<SignInUpForm />} />

              <Route path="Conff " element={<Conff />} />
            </Routes>
            <Footer />

          </CartContext.Provider>
        </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
