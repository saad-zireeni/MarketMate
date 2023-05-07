import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import './components/ContactAbout/ConAbout.css' 
import Vegetables from './components/P-Categories/Vegetables';
import Header from './components/Header/Header';
import Fruits from './components/P-Categories/Fruits';
import Meats from './components/P-Categories/Meats';
import Bakery from './components/P-Categories/Bakery';
import Frozen from './components/P-Categories/Frozen';
import Search from './components/P-Categories/Search';
import Dairy from './components/P-Categories/Dairy';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='Products' element={<Products/>}/> 
          <Route path='Vegetables' element={<Vegetables/>}/>
          <Route path='Fruits' element={<Fruits/>}/>
          <Route path='Dairy' element={<Dairy/>}/>
          <Route path='Meats' element={<Meats/>}/>
          <Route path='Bakery' element={<Bakery/>}/>
          <Route path='Frozen' element={<Frozen/>}/>
          <Route path='Search' element={<Search/>}/>
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
