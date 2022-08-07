import { useState } from "react";
import Icon from "../../Icon/Icon";
import ShowProduct from "./ShowProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const RightBody = (props) => {
  const [tablist, setTablist] = useState(true);
  const number = useSelector((state) => state.products.Number);
  const buttonTablistHandler = () => {
    setTablist((prev) => !prev);
  };

  return (
    <div className="col-xl-9 col-lg-8">
      <div className="shop-banner mb-30">
        <div className="banner-image">
          <img
            className="banner-l"
            src="assets/img/banner/sl-banner.jpg"
            alt=""
          />
          <img
            className="banner-sm"
            src="assets/img/banner/sl-banner-sm.png"
            alt=""
          />
          <div className="banner-content text-center">
            <p className="banner-text mb-30">
              Hurry Up! <br /> Free Shipping All Order Over $99
            </p>
            <Link to="shop.html" className="st-btn-d b-radius">
              Discover now
            </Link>
          </div>
        </div>
      </div>
      <div className="product-lists-top">
        <div className="product__filter-wrap">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="product__filter d-sm-flex align-items-center">
                <div className="product__col">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={tablist ? "nav-link active" : "nav-link"}
                        id="FourCol-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#FourCol"
                        type="button"
                        role="tab"
                        aria-controls="FourCol"
                        aria-selected="true"
                        onClick={buttonTablistHandler}
                      >
                        <Icon icon={"th"} />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={!tablist ? "nav-link active" : "nav-link"}
                        id="FiveCol-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#FiveCol"
                        type="button"
                        role="tab"
                        aria-controls="FiveCol"
                        aria-selected="false"
                        onClick={buttonTablistHandler}
                      >
                        <Icon icon={"list"} />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="product__result pl-60">
                  <p>Showing all of {number} relults</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                <div className="product__sorting product__show-no"></div>

                <div className="product__sorting product__show-position ml-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content" id="productGridTabContent">
        <ShowProduct Gird={tablist} DisplayProductRB={props.DisplayProductB} />
      </div>
      <div className="tp-pagination text-center">
        <div className="row">
          <div className="col-xl-12">
            <div className="basic-pagination pt-30 pb-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBody;
