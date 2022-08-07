import CartItem from "./Common/CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const wishs = useSelector((state) => state.wishs);
  const ListCart = wishs.items.map((wish) => {
    return (
      <CartItem
        key={Math.random()}
        hrefProduct={wish.id}
        srcImg={wish.product.Product.image}
        title={wish.product.Product.title}
        price={wish.price}
        type={"Wish"}
      />
    );
  });
  return (
    <div className={props.type}>
      <div className="cart__mini">
        <ul>
          <li>
            <div className="cart__title">
              <h4>Your Wishlist</h4>
              <span>({wishs.totalQuantity} Item in Cart)</span>
            </div>
          </li>
          {ListCart}
        </ul>
      </div>
    </div>
  );
};
export default Cart;
