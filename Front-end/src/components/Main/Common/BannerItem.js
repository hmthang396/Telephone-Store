import { Link } from "react-router-dom";
const BannerItem = (props) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="banner__item p-relative w-img mb-30">
        <div className="banner__img b-radius-2">
          <Link to={"#"}>
            <img src={props.imgBanner} alt="" />
          </Link>
        </div>
        <div className="banner__content">
          <h6>
            <Link to={"#"}>{props.title}</Link>
          </h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default BannerItem;
