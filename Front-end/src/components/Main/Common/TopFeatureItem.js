import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";

const TopFeatureItem = (props) => {
  let price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);

  return (
    <div className="col-md-6">
      <div className="single-features-item b-radius-2 mb-20">
        <div className="row  g-0 align-items-center">
          <div className="col-6">
            <div className="features-thum">
              <div className="features-product-image w-img">
                <Link to={`/Detail?id=${props.id}`}>
                  <img src={props.imgProduct} alt="" />
                </Link>
              </div>
              {props.discount && (
                <div className="product__offer">
                  <span className="discount">{props.discount}</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="product__content product__content-d product__content-d-2">
              <h6>
                <a href="product-details.html">{props.title}</a>
              </h6>
              <div className="rating mb-5">
                <ul>
                  <li>
                    <Link to="#">
                      <Icon icon={"star"} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon={"star"} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon={"star"} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon={"star"} />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon={"star"} />
                    </Link>
                  </li>
                </ul>
                <span>{props.review}</span>
              </div>
              <div className="price d-price">
                <span>{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopFeatureItem;
