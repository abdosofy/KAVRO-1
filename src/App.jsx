import { Route , Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Navbar/Home/Home";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/shop/Shop";
export default function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Cart" element={<Shop/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

