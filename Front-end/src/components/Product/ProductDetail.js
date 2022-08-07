import { useState, useEffect, Fragment } from "react";
import Icon from "../Icon/Icon";
import Color from "./Common/Color";
import ImageLarge from "./Common/ImageLarge";
import NavImage from "./Common/NavImage";
import Option from "./Common/Option";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart-slice";
import { Link } from "react-router-dom";
import api from "../../api/Produc.api";
const ProductDetail = (props) => {
  const [imageDisplay, setImageDisplay] = useState(null);

  const [listColor, setColor] = useState([]);
  const [listImageLeft, setListImageLeft] = useState([]);
  const [colorSelectId, setColorSelectId] = useState(0);

  const [listOption, setListOption] = useState([]);
  const [optionSelectId, setOptionSelectId] = useState(0);

  const [price, setPrice] = useState(0);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(1);
  const buttonAddCountHandler = () => {
    setCount(count + 1);
  };
  const buttonSubCountHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const buttonClickedHandler = (para) => {
    setImageDisplay(para);
  };
  const selectedOptionClickHandler = (para) => {
    let a = product.Option.find((item) => {
      return item.id === para;
    });
    setOptionSelectId(a.id);
    setPrice(a.Product_Option.price);
  };
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

  const fetchProductById = async () => {
    setIsLoading(true);
    const reponse = await fetch(`/API/Product/${props.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    });
    if (reponse.ok) {
      return await reponse.json();
    } else {
      throw new Error("Error");
    }
  };

  let ListOption, ListColor;
  let contentListImage, content;

  useEffect(() => {
    api
      .getElementById(props.id)
      .then((result) => {
        setProduct(result.Data[0]);
        setImageDisplay(result.Data[0].Product.image);
        setOptionSelectId(result.Data[0].Option[0].id);
        setPrice(result.Data[0].Option[0].Product_Option.price);
        setColorSelectId(result.Data[0].Color[0].id);
        setColor([...result.Data[0].Color]);
        let colorFind = [...result.Data[0].Color].find((color) => {
          return color.id === result.Data[0].Color[0].id;
        });
        setListImageLeft([
          colorFind.Product_Color.image1,
          colorFind.Product_Color.image2,
          colorFind.Product_Color.image3,
          colorFind.Product_Color.image4,
        ]);
        setListOption([...result.Data[0].Option]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Add Cart
  const dispatch = useDispatch();
  const addCartHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartAction.addItemToCart({
        Product: product,
        Price: product.Option.find((option) => option.id === optionSelectId)
          .Product_Option.price,
        Option: product.Option.find((option) => option.id === optionSelectId),
        Color: product.Color.find((color) => color.id === colorSelectId),
        Quantity: count,
      })
    );
  };
  // End-Add Cart
  if (product) {
    ListColor = listColor.map((color) => {
      return (
        <Color
          key={color.id}
          hex={color.hex}
          id={color.id}
          Selected={selectedColorClickedHandler}
          active={color.id === colorSelectId ? true : false}
        />
      );
    });
    ListOption = listOption.map((option) => {
      return (
        <Option
          key={option.id}
          title={option.title}
          id={option.id}
          Selected={selectedOptionClickHandler}
          active={option.id === optionSelectId ? true : false}
        />
      );
    });
    //setListImageLeft(ListImageLeft);
    contentListImage = listImageLeft.map((element) => {
      return (
        <NavImage
          key={Math.random()}
          imgUrl={element}
          imageDisplay={imageDisplay}
          active={buttonClickedHandler}
        />
      );
    });
    content = (
      <div className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="product__details-nav d-sm-flex align-items-start">
                <ul
                  className="nav nav-tabs flex-sm-column justify-content-between"
                  id="productThumbTab"
                  role="tablist"
                >
                  {contentListImage}
                </ul>
                <ImageLarge imgUrl={imageDisplay} />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="product__details-content">
                <h6>{product.Product.title}</h6>
                <div className="pd-rating mb-10">
                  <ul className="rating">
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
                <div className="pd-rating mb-10">{ListColor}</div>
                <div className="pd-rating mb-10">{ListOption}</div>
                <div className="price mb-10">
                  <span>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(price)}
                  </span>
                </div>
                <div
                  className="features-des mb-20 mt-10"
                  dangerouslySetInnerHTML={{
                    __html: product.Product.description,
                  }}
                ></div>
                <div className="product-stock mb-20">
                  <h5>
                    Availability: <span> {product.Product.stock} in stock</span>
                  </h5>
                </div>
                <div className="cart-option mb-15">
                  <div className="product-quantity mr-20">
                    <div className="cart-plus-minus p-relative">
                      <div style={{ textAlign: "center" }}>{count}</div>
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
                  <button className="cart-btn" onClick={addCartHandler}>
                    Add to Cart
                  </button>
                </div>
                <div className="details-meta"></div>
                <div className="product-tag-area mt-15">
                  <div className="product_info">
                    <span className="sku_wrapper">
                      <span className="title">SKU:</span>
                      <span className="sku">{product.Product.title}</span>
                    </span>
                    <span className="posted_in">
                      <span className="title">Categories:</span>
                      <Link to="#">{product.Category.title}</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>{isLoading ? <div className="loader"></div> : content}</Fragment>
  );
};
export default ProductDetail;
