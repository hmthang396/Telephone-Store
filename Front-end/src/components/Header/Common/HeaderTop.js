import { Link } from "react-router-dom";

const HeaderTop = (props) => {
  const selectStyle = {
    border: "none",
    padding: 0,
    background: "none",
    appearance: "none",
    color: "#ffffff",
  };
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-inner">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="header-inner-start">
                <div className="header__currency border-right">
                  <div className="s-name">
                    <span>Language: </span>
                  </div>
                  <select style={selectStyle}>
                    <option>Tiếng Việt</option>
                  </select>
                </div>
                <div className="support d-none d-sm-block">
                  <p>
                    Need Help?{" "}
                    <Link to="tel:+084777494112">+084 777 494 112</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 d-none d-lg-block">
              <div className="header-inner-end text-md-end">
                <div className="ovic-menu-wrapper">
                  <ul>
                    <li>
                      <Link to={`#`}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`#`}>Order Tracking</Link>
                    </li>
                    <li>
                      <Link to={`#`}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={`#`}>FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
