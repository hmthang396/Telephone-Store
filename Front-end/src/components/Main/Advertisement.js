import { Link } from "react-router-dom";

const Advertisement = (props) => {
  return (
    <div className="slider-area light-bg-s pt-60">
      <div className="container 0">
        <div className="row">
          <div className="col-xl-6">
            <div className="swiper-container slider__active pb-30">
              <div className="slider-wrapper swiper-wrapper">
                <div
                  className="single-slider swiper-slide b-radius-2 slider-height-3 d-flex align-items-center"
                  style={{
                    backgroundImage: "url(assets/img/slider/03-slide-1.jpg)",
                  }}
                >
                  <div className="slider-content slider-content-2">
                    <div
                      className="slider-top-btn mb-20"
                      style={{
                        animationDelay: "1.5s",
                        animation: "fadeInLeft",
                        transitionDelay: "1.5s",
                      }}
                    >
                      <a href="shop.html" className="st-btn b-radius">
                        HOT DEALS
                      </a>
                    </div>
                    <h2
                      data-animation="fadeInLeft"
                      data-delay="1.7s"
                      className="pt-15 slider-title pb-5"
                    >
                      BIG SALE <br /> TOP HEADPHONE
                    </h2>
                    <p
                      className="pr-20 slider_text"
                      data-animation="fadeInLeft"
                      data-delay="1.9s"
                    >
                      Best Sport Edition 2022
                    </p>
                    <div className="slider-bottom-btn mt-65">
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.15s"
                        href="shop.html"
                        className="st-btn-border b-radius-2"
                      >
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="single-slider swiper-slide b-radius-2 slider-height-3 d-flex align-items-center"
                  style={{
                    backgroundImage: "url(assets/img/slider/03-slide-2.jpg)",
                  }}
                >
                  <div className="slider-content slider-content-2">
                    <div
                      className="slider-top-btn mb-20"
                      style={{
                        animationDelay: "1.5s",
                        animation: "fadeInLeft",
                        transitionDelay: "1.5s",
                      }}
                    >
                      <a href="shop.html" className="st-btn b-radius">
                        HOT DEALS
                      </a>
                    </div>
                    <h2
                      data-animation="fadeInLeft"
                      data-delay="1.5s"
                      className="pt-15 slider-title pb-5"
                    >
                      GEAR 360
                      <br /> WiRELESS LARBUDS
                    </h2>
                    <p
                      className="pr-20 slider_text"
                      data-animation="fadeInLeft"
                      data-delay="1.7s"
                    >
                      Top Quality Earbuds & Accessories
                    </p>
                    <div className="slider-bottom-btn mt-65">
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.9s"
                        href="shop.html"
                        className="st-btn-border b-radius-2"
                      >
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-slider-paginations"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-sm-6">
                    <div className="banner__item p-relative w-img mb-30">
                      <div className="banner__img banner__img-2 b-radius-2">
                        <Link to={`#`}>
                          <img src="assets/img/banner/banner-17.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="banner__content">
                        <h6>
                          <Link to={`#`}>
                            New Style <br /> Bluetooh Speaker
                          </Link>
                        </h6>
                        <p className="banner-p mt-30">Free Shipping 20km</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-sm-6">
                    <div className="banner__item p-relative w-img mb-30">
                      <div className="banner__img banner__img-2 b-radius-2">
                        <Link to={`#`}>
                          <img src="assets/img/banner/banner-18.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="banner__content">
                        <h6>
                          <Link to={`#`}>
                            Limited <br /> Top Camera
                          </Link>
                        </h6>
                        <p className="banner-p mt-30">Free Shipping 20km</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="banner__item p-relative w-img mb-30">
                  <div className="banner__img banner__img-3  b-radius-2">
                    <Link to={`#`}>
                      <img src="assets/img/banner/banner-19.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="banner__content banner__content-3">
                    <div className="banner-df-btn mb-15">
                      <Link className="st-btn b-radius" to={`#`}>
                        HOT DEALS
                      </Link>
                    </div>
                    <p>Xbox Wireless</p>
                    <h6 className="df-title">
                      <Link to={`#`}>Sale Up To 50% Off</Link>
                    </h6>
                    <div className="bottom-btn">
                      <Link className="st-btn-border-2 b-radius" to={`#`}>
                        Discover now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
