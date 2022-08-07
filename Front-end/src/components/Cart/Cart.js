import { Link } from "react-router-dom";
import CartItem from "./Common/CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const carts = useSelector((state) => state.carts);
  const ListCart = carts.items.map((cart) => {
    return (
      <CartItem
        key={Math.random()}
        hrefProduct={cart.id}
        srcImg={cart.product.Product.image}
        title={cart.product.Product.title}
        price={cart.price}
        type={"Cart"}
      />
    );
  });
  return (
    <div className={props.type}>
      <div className="cart__mini">
        <ul>
          <li>
            <div className="cart__title">
              <h4>Your Cart</h4>
              <span>(1 Item in Cart)</span>
            </div>
          </li>
          {ListCart}
          <li>
            <div className="cart__sub d-flex justify-content-between align-items-center">
              <h6>Subtotal</h6>
              <span className="cart__sub-total">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(carts.totalPrice)}
              </span>
            </div>
          </li>
          <li>
            <Link to={`/Cart`} className="wc-cart mb-10">
              View cart
            </Link>
            <Link to={`/Checkout`} className="wc-checkout">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Cart;
