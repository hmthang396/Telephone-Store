import ReactDOM from "react-dom/client";
import "../public/assets/css/preloader.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/meanmenu.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/owl-carousel.css";
import "../public/assets/css/swiper-bundle.css";
import "../public/assets/css/backtotop.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/nice-select.css";
//import "../public/assets/css/font-awesome-pro.css";
import "../public/assets/css/default.css";
import "../public/assets/css/style.css";
import "../public/assets/flaticon/flaticon.css";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import store from "./Store/index";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
