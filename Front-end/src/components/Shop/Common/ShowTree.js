import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Store/cart-slice";
import { wishAction } from "../../../Store/wish-slice";
const ShowTree = (props) => {
  const buttonClickedHandler = () => {
    props.DisplayProductTree(props.product);
  };
  let price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(props.price);
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
    <div className="single-item-pd">
      <div className="row align-items-center">
        <div className="col-xl-9">
          <div className="single-features-item single-features-item-df b-radius mb-20">
            <div className="row  g-0 align-items-center">
              <div className="col-md-4">
                <div className="features-thum">
                  <div className="features-product-image w-img">
                    <Link to={`/Detail?id=${props.product.Product.id}`}>
                      <img src={props.imgProduct} alt="" />
                    </Link>
                  </div>
                  {props.discount && (
                    <div className="product__offer">
                      <span className="discount">{props.discount}</span>
                    </div>
                  )}

                  <div className="product-action">
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
              <div className="col-md-8">
                <div className="product__content product__content-d">
                  <h6>
                    <a href="product-details.html">{props.title}</a>
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
                  <div
                    className="features-des"
                    dangerouslySetInnerHTML={{ __html: props.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="product-stock mb-15">
            <h5>
              Availability: <span> {props.stock} in stock</span>
            </h5>
            <h6>{price}</h6>
          </div>
          <div className="stock-btn ">
            <button
              type="button"
              className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
              onClick={addCartHandler}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="wc-checkout d-flex align-items-center justify-content-center w-100"
              data-bs-toggle="modal"
              data-bs-target="#productModalId"
              onClick={buttonClickedHandler}
            >
              Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowTree;
