import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
/* default components */
import Marquee from "components/base/Marquee.js";
import Header from "components/base/Header.js";
import SideMenu from "components/base/SideMenu.js";
import Footer from "components/base/Footer.js";
import ScrollToTop from "components/base/ScrollToTop.js";
/* pages */
import Main from "pages/Main.js";
import About from "pages/About.js";
import ProductStand from "pages/ProductStand.js";
import ProductDetail from "pages/ProductDetail.js";
import Cart from "pages/Cart.js";
import Login from "pages/Login.js";
/* style */
import "styles/_style.scss";
import "swiper/css";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("에러 발생", err.message);
      });
  }, []);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.log("에러 발생", err.message);
      });
  }, []);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <Marquee></Marquee>
      <Header cartItems={cartItems}></Header>
      <SideMenu cartItems={cartItems}></SideMenu>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main products={products} reviews={reviews}></Main>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/products/:category" element={<ProductStand products={products} />} />
        <Route path="/detail/:id" element={<ProductDetail cartItems={cartItems} products={products} setCartItems={setCartItems}></ProductDetail>}></Route>
        <Route path="/cart" element={<Cart products={products} cartItems={cartItems} setCartItems={setCartItems}></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
