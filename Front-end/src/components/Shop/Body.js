import LeftBody from "./Common/LeftBody";
import RightBody from "./Common/RightBody";

const Body = (props) => {
  return (
    <div className="shop-area mb-20">
      <div className="container">
        <div className="row">
          <LeftBody />
          <RightBody DisplayProductB={props.DisplayProductS} />
        </div>
      </div>
    </div>
  );
};
export default Body;
