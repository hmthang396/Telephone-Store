import Card from "../../components/Main/Common/Card";
import Description from "../../components/Product/Description";
import ProductDetail from "../../components/Product/ProductDetail";
import Breadcrumb from "../../components/Shop/Breadcrumb";
import { useLocation } from "react-router-dom";
const Detail = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let productID = queryParams.get("id");

  return (
    <Card>
      <Breadcrumb title={"Product"} />
      {productID && <ProductDetail id={productID} />}
      {productID && <Description id={productID} />}
    </Card>
  );
};
export default Detail;
