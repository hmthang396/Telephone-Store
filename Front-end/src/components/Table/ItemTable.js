import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { cartAction } from "../../Store/cart-slice";
import { wishAction } from "../../Store/wish-slice";
import { Fragment } from "react";
const ItemTable = (props) => {
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        Product: props.product.product,
        Price: props.product.price,
        Option: props.product.option,
        Color: props.product.color,
        Quantity: 1,
      })
    );
  };
  const subCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        Product: props.product.product,
        Price: props.product.price,
        Option: props.product.option,
        Color: props.product.color,
        Quantity: -1,
      })
    );
  };
  const removeCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartAction.removeItemFromCart(props.product.id));
  };
  const addNewCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartAction.addItemToCart({
        Product: props.product.product,
        Price: props.product.price,
        Option: props.product.option,
        Color: props.product.color,
        Quantity: 1,
      })
    );
    dispatch(wishAction.removeItemFromWish(props.product.id));
  };
  const removeWishHandler = (event) => {
    event.preventDefault();
    dispatch(wishAction.removeItemFromWish(props.product.id));
  };
  let content;
  if (props.type === "Cart") {
    content = (
      <tr>
        <td className="product-thumbnail">
          <Link to={`/Detail?id=${props.product.id}`}>
            <img alt="" src={props.product.product.Product.image} />
          </Link>
        </td>
        <td className="product-name">
          <Link to={`/Detail?id=${props.product.id}`}>
            {props.product.product.Product.title}
          </Link>
        </td>
        <td className="product-option">{props.product.option.title}</td>
        <td className="product-color">{props.product.color.title}</td>
        <td className="product-price">
          <span className="amount">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.product.price)}
          </span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={subCartHandler}>
              -
            </div>
            {props.product.quantity}
            <div className="inc qtybutton" onClick={addCartHandler}>
              +
            </div>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="amount">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.product.price * props.product.quantity)}
          </span>
        </td>
        <td className="product-remove">
          <button onClick={removeCartHandler}>
            <Icon icon={"times"} />
          </button>
        </td>
      </tr>
    );
  }
  if (props.type === "Wishlist") {
    content = (
      <tr>
        <td className="product-thumbnail">
          <Link to={`/Detail?id=${props.product.id}`}>
            <img alt="" src={props.product.product.Product.image} />
          </Link>
        </td>
        <td className="product-name">
          <Link to={`/Detail?id=${props.product.id}`}>
            {props.product.product.Product.title}
          </Link>
        </td>
        <td className="product-option">{props.product.option.title}</td>
        <td className="product-color">{props.product.color.title}</td>
        <td className="product-price">
          <span className="amount">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.product.price)}
          </span>
        </td>
        <td className="product-quantity">
          <button class="tp-btn-h1" onClick={addNewCartHandler}>
            Add To Cart
          </button>
        </td>
        <td className="product-subtotal">
          <span className="amount">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.product.price * props.product.quantity)}
          </span>
        </td>
        <td className="product-remove">
          <button onClick={removeWishHandler}>
            <Icon icon={"times"} />
          </button>
        </td>
      </tr>
    );
  }
  return <Fragment>{content}</Fragment>;
};
export default ItemTable;
