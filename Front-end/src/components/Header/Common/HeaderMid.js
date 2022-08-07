import Icon from "../../Icon/Icon";
import Input from "./Input";
import Cart from "../../Cart/Cart";
import Wishlist from "../../Cart/Wishlist";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderMid = (props) => {
  const carts = useSelector((state) => state.carts);
  const wishs = useSelector((state) => state.wishs);
  const listOption = [
    {
      title: "All Categories",
      value: "All",
    },
    {
      title: "Best Seller Products",
      value: "BestSeller",
    },
    {
      title: "Top 10 Offers",
      value: "Top10",
    },
  ];
  return (
    <div className="header-mid">
      <div className="container">
        <div className="heade-mid-inner">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <div className="header__info">
                <div className="logo">
                  <Link to={`/`} className="logo-image">
                    <img src="assets/img/logo/logo1.svg" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <div className="header__search">
                <form action="#">
                  <div className="header__search-box">
                    <input
                      className="search-input"
                      type="text"
                      placeholder="I'm shopping for..."
                    />
                    <button className="button" type="submit">
                      <Icon icon={"search"} />
                    </button>
                  </div>
                  <div className="header__search-cat">
                    <Input Options={listOption} />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
              <div className="header-action">
                <div className="block-cart action">
                  <Link to={`/Wishlist`} className="icon-link">
                    <i className="flaticon-heart"></i>
                    <span className="count">{wishs.totalQuantity}</span>
                    <span className="text">
                      <span className="sub">Favorite</span>
                      My Wishlist
                    </span>
                  </Link>
                  <Wishlist type={"cart"} />
                </div>
                <div className="block-cart action">
                  <Link to={`/Cart`} className="icon-link">
                    <i className="flaticon-shopping-bag"></i>
                    <span className="count">{carts.totalQuantity}</span>
                    <span className="text">
                      <span className="sub">Your Cart:</span>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(carts.totalPrice)}
                    </span>
                  </Link>
                  <Cart type={"cart"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMid;
