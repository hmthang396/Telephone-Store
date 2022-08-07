import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Store/cart-slice";
import { wishAction } from "../../../Store/wish-slice";

const CartItem = (props) => {
  // Remove Cart
  const dispatch = useDispatch();
  const addCartHandler = () => {
    if (props.type === "Wish") {
      dispatch(wishAction.removeItemFromWish(props.hrefProduct));
    }
    if (props.type === "Cart") {
      dispatch(cartAction.removeItemFromCart(props.hrefProduct));
    }
  };
  // End - Remove Cart
  return (
    <li>
      <div className="cart__item d-flex justify-content-between align-items-center">
        <div className="cart__inner d-flex">
          <div className="cart__thumb">
            <Link to={`/Detail?id=${props.hrefProduct}`}>
              <img src={props.srcImg} alt="" />
            </Link>
          </div>
          <div className="cart__details">
            <h6>
              <a href="product-details.html">{props.title}</a>
            </h6>
            <div className="cart__price">
              <span>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(props.price)}
              </span>
            </div>
          </div>
        </div>
        <div className="cart__del">
          <button onClick={addCartHandler}>
            <Icon icon={"times"} />
          </button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
