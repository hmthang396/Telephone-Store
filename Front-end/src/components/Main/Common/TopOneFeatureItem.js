import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Store/cart-slice";
import { wishAction } from "../../../Store/wish-slice";

const TopOneFeatureItem = (props) => {
  let price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);
  const buttonClickedHandler = () => {
    props.buttonClick(props.product);
  };
  // Add Cart
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        Product: props.product,
        Price: props.product.Option[0].Product_Option.price,
        Option: props.product.Option[0],
        Color: props.product.Color[0],
        Quantity: 1,
      })
    );
  };
  // End-Add Cart
  // Add WishList
  const addWishHandler = () => {
    dispatch(
      wishAction.addItemToWish({
        Product: props.product,
        Price: props.product.Option[0].Product_Option.price,
        Option: props.product.Option[0],
        Color: props.product.Color[0],
        Quantity: 1,
      })
    );
  };
  // End-Add WishList
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="single-features-item single-features-item-d b-radius-2 mb-20">
        <div className="row  g-0 align-items-center">
          <div className="col-md-6">
            <div className="features-thum">
              <div className="features-product-image w-img">
                <Link to={`/Detail?id=${props.id}`}>
                  <img src={props.imgProduct} alt="" />
                </Link>
              </div>
              <div className="product-action product-action-2">
                <button
                  className="icon-box icon-box-1"
                  data-bs-toggle="modal"
                  data-bs-target="#productModalId"
                  onClick={buttonClickedHandler}
                >
                  <Icon icon={"eye"} />
                </button>
                <button
                  className="icon-box icon-box-1"
                  onClick={addWishHandler}
                >
                  <Icon icon={"heart"} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product__content product__content-d product__content-d-2">
              <h6>
                <Link to="#">{props.title}</Link>
              </h6>
              <div className="rating mb-5">
                <ul className="rating-d">
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
              <div className="price d-price mb-10">
                <span>{price}</span>
              </div>
              <div
                className="features-des mb-25"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
              <div className="cart-option">
                <button
                  className="cart-btn-4 w-100 mr-10"
                  onClick={addCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopOneFeatureItem;
