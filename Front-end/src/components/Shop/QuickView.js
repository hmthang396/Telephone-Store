import { Fragment, useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import ImgQuickView from "./Common/ImgQuickView";
import NavImage from "./Common/NavImage";
import Color from "../Product/Common/Color";
import Option from "../Product/Common/Option";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart-slice";
const QuickView = (props) => {
  //
  const [count, setCount] = useState(1);
  const buttonAddCountHandler = () => {
    setCount(count + 1);
  };
  const buttonSubCountHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [product, setProduct] = useState(props.product);
  const [listColor, setColor] = useState(props.product.Color);
  const [listImageLeft, setListImageLeft] = useState([
    props.product.Color[0].Product_Color.image1,
    props.product.Color[0].Product_Color.image2,
    props.product.Color[0].Product_Color.image3,
    props.product.Color[0].Product_Color.image4,
  ]);
  const [colorSelectId, setColorSelectId] = useState(props.product.Color[0].id);

  const [listOption, setListOption] = useState(props.product.Option);
  const [optionSelectId, setOptionSelectId] = useState(
    props.product.Option[0].id
  );

  const [price, setPrice] = useState(
    props.product.Option[0].Product_Option.price
  );
  //
  const [imageDisplay, setImageDisplay] = useState(props.product.Product.image);
  //
  useEffect(() => {
    setProduct(props.product);
    setColor(props.product.Color);
    setListImageLeft([
      props.product.Color[0].Product_Color.image1,
      props.product.Color[0].Product_Color.image2,
      props.product.Color[0].Product_Color.image3,
      props.product.Color[0].Product_Color.image4,
    ]);
    setColorSelectId(props.product.Color[0].id);
    setListOption(props.product.Option);
    setOptionSelectId(props.product.Option[0].id);
    setPrice(props.product.Option[0].Product_Option.price);
    setImageDisplay(props.product.Product.image);
  }, [props.product]);
  //
  const buttonClickedHandler = (imgUrl) => {
    setImageDisplay(imgUrl);
  };
  const NavImageProduct = listImageLeft.map((img) => {
    return (
      <NavImage
        key={Math.random()}
        imgUrl={img}
        imageDisplay={imageDisplay}
        active={buttonClickedHandler}
      />
    );
  });
  const selectedColorClickedHandler = (para) => {
    let b = listColor.find((color) => {
      return color.id === para;
    });
    setColorSelectId(b.id);
    setListImageLeft([
      b.Product_Color.image1,
      b.Product_Color.image2,
      b.Product_Color.image3,
      b.Product_Color.image4,
    ]);
  };
  const selectedOptionClickHandler = (para) => {
    let a = listOption.find((item) => {
      return item.id === para;
    });
    setOptionSelectId(a.id);
    setPrice(a.Product_Option.price);
  };
  let ListColor = listColor.map((color) => {
    return (
      <Color
        hex={color.hex}
        id={color.id}
        Selected={selectedColorClickedHandler}
        active={color.id === colorSelectId ? true : false}
      />
    );
  });
  //
  let ListOption = listOption.map((option) => {
    return (
      <Option
        title={option.title}
        id={option.id}
        Selected={selectedOptionClickHandler}
        active={option.id === optionSelectId ? true : false}
      />
    );
  });
  // Add Cart
  const dispatch = useDispatch();
  const addCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartAction.addItemToCart({
        Product: props.product,
        Price: props.product.Option.find(
          (option) => option.id === optionSelectId
        ).Product_Option.price,
        Option: props.product.Option.find(
          (option) => option.id === optionSelectId
        ),
        Color: props.product.Color.find((color) => color.id === colorSelectId),
        Quantity: count,
      })
    );
  };
  // End-Add Cart
  return (
    <Fragment>
      {props.product && (
        <div
          className={!props.display ? "modal fade" : "modal fade show"}
          style={
            props.display ? { display: "block", paddingRight: " 17px" } : {}
          }
        >
          <div
            className="modal-dialog modal-dialog-centered product__modal"
            role="document"
          >
            <div className="modal-content">
              <div className="product__modal-wrapper p-relative">
                <div className="product__modal-close p-absolute">
                  <button data-bs-dismiss="modal" onClick={props.close}>
                    <Icon icon={"times"} />
                  </button>
                </div>
                <div className="product__modal-inner">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="product__modal-box">
                        <div className="tab-content" id="modalTabContent">
                          <ImgQuickView
                            key={Math.random()}
                            imgUrl={imageDisplay}
                          />
                          ;
                        </div>
                        <ul className="nav nav-tabs">{NavImageProduct}</ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="product__modal-content">
                        <h4>
                          <Link to={`/Detail?id=${product.Product.id}`}>
                            {product.Product.title}
                          </Link>
                        </h4>
                        <div className="product__review d-sm-flex">
                          <div className="rating rating__shop mb-10 mr-30">
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
                          </div>
                          <div className="product__add-review mb-15">
                            <span>{product.Product.review}</span>
                          </div>
                        </div>
                        <div className="product__add-review mb-10">
                          {ListColor}
                        </div>
                        <div className="product__add-review mb-10">
                          {ListOption}
                        </div>
                        {product.Discount && (
                          <div className="product__offer">
                            <span className="discount">{product.Discount}</span>
                          </div>
                        )}
                        <div className="product__price">
                          <span>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(price)}
                          </span>
                        </div>
                        <div
                          className="product__modal-des mt-20 mb-15"
                          style={{ display: "block" }}
                          dangerouslySetInnerHTML={{
                            __html: product.Product.description,
                          }}
                        ></div>
                        <div className="product__stock mb-20">
                          <span className="mr-10">Availability :</span>
                          <span>{product.Product.stock} in stock</span>
                        </div>
                        <div className="product__modal-form">
                          <form>
                            <div className="pro-quan-area d-lg-flex align-items-center">
                              <div className="product-quantity mr-20 mb-25">
                                <div className="cart-plus-minus p-relative">
                                  <div style={{ textAlign: "center" }}>
                                    {count}
                                  </div>
                                  <div
                                    className="dec qtybutton"
                                    onClick={buttonSubCountHandler}
                                  >
                                    -
                                  </div>
                                  <div
                                    className="inc qtybutton"
                                    onClick={buttonAddCountHandler}
                                  >
                                    +
                                  </div>
                                </div>
                              </div>
                              <div className="pro-cart-btn mb-25">
                                <button
                                  className="cart-btn"
                                  onClick={addCartHandler}
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="product__stock mb-30">
                          <ul>
                            <li>
                              <Link to="#">
                                <span className="sku mr-10">SKU:</span>
                                <span>{product.Product.title}</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={`/Search?category=${product.Category.title}`}
                              >
                                <span className="cat mr-10">Categories:</span>
                                <span>{product.Category.title}</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default QuickView;
