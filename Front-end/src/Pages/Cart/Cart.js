import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemTable from "../../components/Table/ItemTable";
const Cart = (props) => {
  const carts = useSelector((state) => state.carts);
  const wishs = useSelector((state) => state.wishs);
  let list;
  if (props.type === "Cart") {
    list = carts;
  }
  if (props.type === "Wishlist") {
    list = wishs;
  }
  return (
    <Fragment>
      <section className="cart-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                {/* Table */}
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="cart-product-option">Option</th>
                        <th className="cart-product-color">Color</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.items.map((product) => {
                        return (
                          <ItemTable product={product} type={props.type} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Checkout */}
                {props.type === "Cart" && (
                  <div className="row justify-content-end">
                    <div className="col-md-5">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal{" "}
                            <span>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(carts.totalPrice)}
                            </span>
                          </li>
                          <li>
                            Total{" "}
                            <span>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(carts.totalPrice)}
                            </span>
                          </li>
                        </ul>
                        <Link to={`/Checkout`} className="tp-btn-h1">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Cart;
