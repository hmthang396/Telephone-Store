import TopFeatureItem from "./Common/TopFeatureItem";
import TopOneFeatureItem from "./Common/TopOneFeatureItem";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const GetSortOrder = (key) => {
  return function (a, b) {
    if (parseFloat(a.Product.price) > parseFloat(b.Product.price)) {
      return -1;
    } else if (parseFloat(a.Product.price) < parseFloat(b.Product.price)) {
      return 1;
    }
    return 0;
  };
};
const TopFeatures = (props) => {
  const products = useSelector((state) => state.products.Data);

  const buttonViewHandler = (para) => {
    props.DisplayProductS(para);
  };
  let TopOne;
  let ListFeatures;
  let listProducts;
  if (products.length > 0) {
    listProducts = [...products].sort(GetSortOrder()).slice(0, 5);
    TopOne = (
      <TopOneFeatureItem
        imgProduct={listProducts[0]["Product"].image}
        id={listProducts[0]["Product"].id}
        discount={listProducts[0]["Discount"]}
        title={listProducts[0]["Product"].title}
        price={listProducts[0]["Product"].price}
        review={listProducts[0].review}
        description={listProducts[0]["Product"].description}
        product={listProducts[0]}
        buttonClick={buttonViewHandler}
      />
    );
    ListFeatures = listProducts.splice(1, 5).map((item) => {
      return (
        <TopFeatureItem
          key={Math.random()}
          id={item.Product.id}
          imgProduct={item.Product.image}
          discount={item.Discount}
          title={item.Product.title}
          price={item.Product.price}
          review={item.review}
        />
      );
    });
  } else {
    TopOne = <div className="loader"></div>;
    ListFeatures = <div className="loader"></div>;
  }
  return (
    <Fragment>
      <section className="featured light-bg-s pt-50 pb-40">
        <div className="container 0">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title section__title-2">
                  <h5 className="st-titile">Sản phẩm nổi bật</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {TopOne}
            <div className="col-xl-6 col-lg-12">
              <div className="row">{ListFeatures}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopFeatures;
