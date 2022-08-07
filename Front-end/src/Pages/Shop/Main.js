import { useState } from "react";
import Card from "../../components/Main/Common/Card";
import Advertisement from "../../components/Main/Advertisement";
import TopDeals from "../../components/Main/TopDeals";
import TopFeatures from "../../components/Main/TopFeatures";
import Banner from "../../components/Main/Banner";
import TopTrending from "../../components/Main/TopTrending";
import AreaNotification from "../../components/Main/AreaNotification";
import QuickView from "../../components/Shop/QuickView";
/*
 * Trang Chu
 */
const Main = (props) => {
  const [productViewed, setProductViewed] = useState({
    product: null,
    display: false,
  });
  const ClosedHandler = () => {
    setProductViewed({
      ...productViewed,
      display: !productViewed.display,
    });
  };
  const DisplayProductHandler = (para) => {
    setProductViewed({ product: para, display: !productViewed.display });
  };
  return (
    <Card>
      <Advertisement />
      <TopDeals DisplayProductS={DisplayProductHandler} />
      <TopFeatures DisplayProductS={DisplayProductHandler} />
      <Banner />
      <TopTrending DisplayProductS={DisplayProductHandler} />
      <AreaNotification />
      {productViewed.product && (
        <QuickView
          display={productViewed.display}
          product={productViewed.product}
          close={ClosedHandler}
        />
      )}
    </Card>
  );
};
export default Main;
