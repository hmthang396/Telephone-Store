import { useState } from "react";
import Card from "../../components/Main/Common/Card";
import Body from "../../components/Shop/Body";
import Breadcrumb from "../../components/Shop/Breadcrumb";
import QuickView from "../../components/Shop/QuickView";

const Shop = (props) => {
  const [productViewed, setProductViewed] = useState({
    product: null,
    display: false,
  });
  const DisplayProductHandler = (para) => {
    setProductViewed({ product: para, display: !productViewed.display });
  };
  const ClosedHandler = () => {
    setProductViewed({
      ...productViewed,
      display: !productViewed.display,
    });
  };
  return (
    <Card>
      <Breadcrumb title={"Shop"} />
      <Body DisplayProductS={DisplayProductHandler} />
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
export default Shop;
/*

*/
