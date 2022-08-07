import { Fragment } from "react";
import ShowGird from "./ShowGird";
import ShowTree from "./ShowTree";
import { useSelector, useDispatch } from "react-redux";
import { setedNumber } from "../../../Store/product-actions";
const ShowProduct = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.Data);
  const categories = useSelector((state) => state.products.Category);
  const prices = useSelector((state) => state.products.Price);
  const isLoading = useSelector((state) => state.products.isLoading);
  let contentProduct1 = [];
  let contentProduct2 = [];
  const displayQuickViewHandler = (para) => {
    props.DisplayProductRB(para);
  };
  let listProduct, listProductCategory, listProductPrice;
  if (products.length) {
    // Filter with Category
    if (categories[0] === "All") {
      listProductCategory = products;
    } else {
      listProductCategory = products.filter((product) => {
        return categories.includes(product.Category.title);
      });
    }
    // Filter with Price
    let list1, list2, list3, list4, list5;
    if (prices[0] !== "All") {
      list1 = [];
      list2 = [];
      list3 = [];
      list4 = [];
      list5 = [];
      if (prices.includes("Level1")) {
        list1 = products.filter((product) => {
          return product.Product.price < 2000000;
        });
      }
      if (prices.includes("Level2")) {
        list2 = products.filter((product) => {
          return (
            product.Product.price > 2000000 && product.Product.price < 4000000
          );
        });
      }
      if (prices.includes("Level3")) {
        list3 = products.filter((product) => {
          return (
            product.Product.price > 4000000 && product.Product.price < 7000000
          );
        });
      }
      if (prices.includes("Level4")) {
        list4 = products.filter((product) => {
          return (
            product.Product.price > 7000000 && product.Product.price < 13000000
          );
        });
      }
      if (prices.includes("Level5")) {
        list5 = products.filter((product) => {
          return product.Product.price > 13000000;
        });
      }
      listProductPrice = [...list1, ...list2, ...list3, ...list4, ...list5];
    } else {
      listProductPrice = products;
    }
    // Filter with Price and Category
    listProduct = products.filter((product) => {
      return (
        listProductCategory.includes(product) &&
        listProductPrice.includes(product)
      );
    });
    if (!isLoading) {
      dispatch(setedNumber(listProduct.length));
    }
    // Handler QuickView
    contentProduct1 = listProduct.map((item) => {
      return (
        <ShowGird
          key={item.Product.id}
          imgProduct={item.Product.image}
          discount={item.Discount}
          title={item.Product.title}
          price={item.Product.price}
          review={item.review}
          stock={item.Product.stock}
          product={item}
          DisplayProductGrid={displayQuickViewHandler}
        />
      );
    });
    contentProduct2 = listProduct.map((item) => {
      return (
        <ShowTree
          key={item.Product.id}
          imgProduct={item.Product.image}
          discount={item.Discount}
          title={item.Product.title}
          price={item.Product.price}
          review={item.review}
          stock={item.Product.stock}
          description={item.Product.description}
          product={item}
          DisplayProductTree={displayQuickViewHandler}
        />
      );
    });
  } else {
    return <div className="loader"></div>;
  }

  return (
    <Fragment>
      {!isLoading && (
        <Fragment>
          <div
            className={
              props.Gird ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="tp-wrapper">
              <div className="row g-0">{contentProduct1}</div>
            </div>
          </div>
          <div
            className={
              !props.Gird ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <div className="tp-wrapper-2">{contentProduct2}</div>
          </div>
        </Fragment>
      )}
      {isLoading && <div className="loader">Loading...</div>}
    </Fragment>
  );
};

export default ShowProduct;
