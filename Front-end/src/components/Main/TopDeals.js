import TopItem from "./Common/TopItem";
import { useSelector } from "react-redux";
const TopDeals = (props) => {
  const products = useSelector((state) => state.products.Data);
  const buttonViewHandler = (para) => {
    props.DisplayProductS(para);
  };
  let tagItem;
  if (products.length) {
    tagItem = products.slice(0, 10).map((item) => {
      return (
        <TopItem
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
    tagItem = <div className="loader"></div>;
  }
  return (
    <section className="top-dels light-bg-s pt-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-30">
              <div className="section__title section__title-2">
                <h5 className="st-titile-d st-titile-d-2">
                  Top sản phẩm bán trong ngày
                </h5>
              </div>
              <div className="offer-time">
                <span className="offer-title d-none d-sm-block">Ưu đãi:</span>
                <div className="countdown">
                  <div
                    className="countdown-inner b-radius-2"
                    data-countdown=""
                    data-date="Mar 02 2022 20:20:22"
                  >
                    <ul className="text-center">
                      <li>
                        <span data-days="">0</span> Days
                      </li>
                      <li>
                        <span data-hours="">0</span> Hours
                      </li>
                      <li>
                        <span data-minutes="">0</span> Mins
                      </li>
                      <li>
                        <span data-seconds="">0</span> Secs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {tagItem}
        </div>
      </div>
    </section>
  );
};
export default TopDeals;
