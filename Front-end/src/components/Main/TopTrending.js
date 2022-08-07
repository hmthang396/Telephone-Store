import TopTrendingItem from "./Common/TopTrendingItem";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const TopTrending = (props) => {
  const products = useSelector((state) => state.products.Data);
  const buttonViewHandler = (para) => {
    props.DisplayProductS(para);
  };
  let contentTrending;
  if (products.length) {
    contentTrending = products.slice(0, 12).map((item) => {
      return (
        <TopTrendingItem
          key={Math.random()}
          id={item.Product.id}
          imgProduct={item.Product.image}
          discount={item.Discount}
          title={item.Product.title}
          price={item.Product.price}
          review={item.review}
          product={item}
          buttonClick={buttonViewHandler}
        />
      );
    });
  } else {
    contentTrending = <div className="loader"></div>;
  }

  return (
    <Fragment>
      <section className="trending-product-area light-bg-s pt-20 pb-15">
        <div className="container 0">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Hot Trending Products</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">{contentTrending}</div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopTrending;
