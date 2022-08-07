import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckBox from "./CheckBox";
import { useDispatch } from "react-redux";
import { setedCategories } from "../../../Store/product-actions";
const Left1 = (props) => {
  const [categories, setCategories] = useState(["All"]);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let category = queryParams.get("category");
  useEffect(() => {
    if (category) {
      setCategories([category]);
      dispatch(setedCategories([category]));
    }
  }, [category, dispatch]);
  const checkBoxHandler = (para) => {
    if (
      categories.includes("All") &&
      categories.length <= 1 &&
      para !== "All"
    ) {
      setCategories([para]);
    }
    if (categories.includes("All") && categories.length > 1) {
      if (para !== "All") {
        if (categories.includes(para)) {
          let newCategories = categories.filter((category) => {
            return category !== para;
          });
          setCategories(newCategories);
        } else {
          setCategories([...categories, para]);
        }
      }
    }
    if (!categories.includes("All") && categories.length >= 1) {
      if (para === "All") {
        setCategories(["All"]);
      } else {
        if (categories.includes(para)) {
          let newCategories = categories.filter((category) => {
            return category !== para;
          });
          setCategories(newCategories);
        } else {
          setCategories([...categories, para]);
        }
      }
    }
  };
  useEffect(() => {
    if (categories.length === 0) {
      setCategories([...categories, "All"]);
    }
    dispatch(setedCategories(categories));
  }, [categories, dispatch]);
  return (
    <div className="product-widget mb-30">
      <h5 className="pt-title">Product categories</h5>
      <div className="widget-category-list mt-20">
        <form action="#">
          <CheckBox
            title={"Tất cả"}
            value={"All"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Iphone"}
            value={"Iphone"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Samsung"}
            value={"Samsung"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Oppo"}
            value={"Oppo"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Xiaomi"}
            value={"Xiaomi"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Vivo"}
            value={"Vivo"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
          <CheckBox
            title={"Nokia"}
            value={"Nokia"}
            onChoice={checkBoxHandler}
            checked={categories}
          />
        </form>
      </div>
    </div>
  );
};
export default Left1;
