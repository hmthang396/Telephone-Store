import CheckBox from "./CheckBox";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setedPrices } from "../../../Store/product-actions";
const Left2 = (props) => {
  const [filterPrice, setFilterPrice] = useState(["All"]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterPrice.length === 0) {
      setFilterPrice([...filterPrice, "All"]);
    }
  }, [filterPrice]);
  const checkBoxHandler = (para) => {
    if (
      filterPrice.includes("All") &&
      filterPrice.length <= 1 &&
      para !== "All"
    ) {
      setFilterPrice([para]);
    }
    if (filterPrice.includes("All") && filterPrice.length > 1) {
      if (para !== "All") {
        if (filterPrice.includes(para)) {
          let newfilterPrice = filterPrice.filter((price) => {
            return price !== para;
          });
          setFilterPrice(newfilterPrice);
        } else {
          setFilterPrice([...filterPrice, para]);
        }
      }
    }
    if (!filterPrice.includes("All") && filterPrice.length >= 1) {
      if (para === "All") {
        setFilterPrice(["All"]);
      } else {
        if (filterPrice.includes(para)) {
          let newPrice = filterPrice.filter((price) => {
            return price !== para;
          });
          setFilterPrice(newPrice);
        } else {
          setFilterPrice([...filterPrice, para]);
        }
      }
    }
  };
  useEffect(() => {
    dispatch(setedPrices(filterPrice));
  }, [filterPrice, dispatch]);
  return (
    <div className="product-widget mb-30">
      <h5 className="pt-title">Filter By Price</h5>
      <div className="widget-category-list mt-20">
        <form action="#">
          <CheckBox
            title={"Tất cả"}
            value={"All"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
          <CheckBox
            title={"Dưới 2 triệu"}
            value={"Level1"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
          <CheckBox
            title={"Từ 2-4 triệu"}
            value={"Level2"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
          <CheckBox
            title={"Từ 4-7 triệu"}
            value={"Level3"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
          <CheckBox
            title={"Từ 7-13 triệu"}
            value={"Level4"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
          <CheckBox
            title={"Trên 13 triệu"}
            value={"Level5"}
            onChoice={checkBoxHandler}
            checked={filterPrice}
          />
        </form>
      </div>
    </div>
  );
};
export default Left2;
