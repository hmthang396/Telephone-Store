import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Detail from "./Pages/ProductDetail/Detail";
import Main from "./Pages/Shop/Main";
import Shop from "./Pages/Shop/Shop";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./Store/product-actions";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="Search" element={<Shop />}></Route>
        <Route path="Detail" element={<Detail />}></Route>
        <Route path="Cart" element={<Cart type={"Cart"} />}></Route>
        <Route path="Wishlist" element={<Cart type={"Wishlist"} />}></Route>
        <Route path="Checkout" element={<Checkout />}></Route>
        <Route path="*" element={<Main />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
