import { useEffect, useState } from "react";
import Des_Camera from "./Des_Camera";
import Des_CPU from "./Des_CPU";
import Des_Info from "./Des_Info";
import Des_Monitor from "./Des_Monitor";
import Des_Other from "./Des_Other";
import Des_Review from "./Des_Review";
import ProductDesTab from "./ProductDesTab";
import api from "../../../api/Produc.api";
const DescriptionDetail = (props) => {
  const [tabDescripted, setTabDescripted] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProductById = async () => {
    setIsLoading(true);
    const reponse = await fetch(`/API/Product/${props.productID}`, {
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
  useEffect(() => {
    setIsLoading(true);
    api
      .getElementById(props.productID)
      .then((result) => {
        setProduct(result.Data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let Tab = [
    {
      title: "Thông tin hàng hóa",
      value: 0,
    },
    {
      title: "Thông số kỹ thuật",
      value: 1,
    },
    {
      title: "Màn hình",
      value: 2,
    },
    {
      title: "Camera",
      value: 3,
    },
    {
      title: "Thông tin khác",
      value: 4,
    },
    {
      title: "Bình luận",
      value: 5,
    },
  ];
  const tabClickedHandler = (para) => {
    setTabDescripted(para);
  };
  const contentTab = Tab.map((tab) => {
    return (
      <ProductDesTab
        key={Math.random()}
        title={tab.title}
        value={tab.value}
        tab={tabDescripted}
        onChoice={tabClickedHandler}
      />
    );
  });
  return (
    <div className="product-details-des mt-40 mb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="product__details-des-tab">
              <ul className="nav nav-tabs" id="productDesTab" role="tablist">
                {contentTab}
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="prodductDesTaContent">
          <div
            className="tab-pane fade active show"
            id="des"
            role="tabpanel"
            aria-labelledby="des-tab"
          >
            {isLoading && <div className="loader"></div>}
            {tabDescripted === 0 && (
              <Des_Info product={product} isLoading={isLoading} />
            )}
            {tabDescripted === 1 && (
              <Des_CPU product={product} isLoading={isLoading} />
            )}
            {tabDescripted === 2 && (
              <Des_Monitor product={product} isLoading={isLoading} />
            )}
            {tabDescripted === 3 && (
              <Des_Camera product={product} isLoading={isLoading} />
            )}
            {tabDescripted === 4 && (
              <Des_Other product={product} isLoading={isLoading} />
            )}
            {tabDescripted === 5 && (
              <Des_Review product={product} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescriptionDetail;
