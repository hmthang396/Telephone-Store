import { Link } from "react-router-dom";

const FooterTop = (props) => {
  return (
    <div className="footer__top pt-60 pb-10">
      <div className="container 0">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-8">
            <div className="footer__widget">
              <div className="footer__widget-title mb-20">
                <h4>Thông tin của hàng</h4>
              </div>
              <div className="footer__widget-content">
                <p className="footer-text mb-25">
                  Sự mệnh của chúng tôi là cung cấp trải nghiệm của khách hàng
                  tuyệt đối tốt nhất.
                </p>
                <div className="footer__hotline d-flex align-items-center mb-10">
                  <div className="icon icon-2 mr-15">
                    <i className="fal fa-headset"></i>
                  </div>
                  <div className="text text-2">
                    <h4>Hỗ trợ 24/7!</h4>
                    <span>
                      <Link to={"tel:100-123-456-7890"}>
                        (+084) xxx xxx xxxx
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="footer__info">
                  <ul>
                    <li>
                      <span>
                        Add:{" "}
                        <Link to={"#"}>
                          xxx Quang Trung, Hải Châu , Tp Đà Nẵng
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer__widget footer-col-2">
              <div className="footer__widget-title">
                <h4>My Account</h4>
              </div>
              <div className="footer__widget-content">
                <div className="footer__link footer__link-2">
                  <ul>
                    <li>
                      <Link to={"#"}>Product Support</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Checkout</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Shopping Cart</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Wishlist</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Terms &amp; Conditions &amp;</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer__widget footer-col-2">
              <div className="footer__widget-title">
                <h4>Customer Care</h4>
              </div>
              <div className="footer__widget-content">
                <div className="footer__link footer__link-2">
                  <ul>
                    <li>
                      <Link to={"#"}>New Customers</Link>
                    </li>
                    <li>
                      <Link to={"#"}>How to use Account</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Placing an Order</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Payment Methods</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Delivery &amp; Dispatch</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Problems with Order</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="footer__widget footer-col-2">
              <div className="footer__widget-title">
                <h4>Customer Service</h4>
              </div>
              <div className="footer__widget-content">
                <div className="footer__link footer__link-2">
                  <ul>
                    <li>
                      <Link to={"#"}>Help Center</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Report Abuse</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Submit a Dispute</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Policies &amp; Rules</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
            <div className="footer__widget">
              <div className="footer__widget-title mb-20">
                <h4>Sign Up To Newsletter</h4>
              </div>
              <div className="footer__widget-content">
                <p className="footer-text mb-25">
                  Join 60.000+ subscribers and get a new discount coupon on
                  every Saturday.
                </p>
                <div className="footer__newsletter-form">
                  <form>
                    <input
                      className="ft-newsl b-radius"
                      type="email"
                      placeholder="Enter your email ..."
                    />
                    <button className="ft-newsl-btn" type="submit">
                      subscribe
                    </button>
                  </form>
                </div>
                <p className="provide-text mt-20">
                  By providing your email address, you agree to our <br />{" "}
                  <div>Privacy Policy and Terms of Service .</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTop;
