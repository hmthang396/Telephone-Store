import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Store/cart-slice";
import { wishAction } from "../../../Store/wish-slice";
const TopTrendingItem = (props) => {
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
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
      <div className="product__item product__item-2 b-radius-2 mb-20">
        <div className="product__thumb fix">
          <div className="product-image w-img">
            <Link to={`/Detail?id=${props.id}`}>
              <img src={props.imgProduct} alt="product" />
            </Link>
          </div>
          {props.discount && (
            <div className="product__offer">
              <span className="discount">{props.discount}</span>
            </div>
          )}

          <div className="product-action product-action-2">
            <button
              className="icon-box icon-box-1"
              data-bs-toggle="modal"
              data-bs-target="#productModalId"
              onClick={buttonClickedHandler}
            >
              <Icon icon={"eye"} />
            </button>
            <button className="icon-box icon-box-1" onClick={addWishHandler}>
              <Icon icon={"heart"} />
            </button>
          </div>
        </div>
        <div className="product__content product__content-2">
          <h6>
            <Link to="#">{props.title}</Link>
          </h6>
          <div className="rating mb-5 mt-10">
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
          <div className="price">
            <span>{price}</span>
          </div>
        </div>
        <div className="product__add-cart text-center">
          <button
            type="button"
            className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
            onClick={addCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopTrendingItem;
