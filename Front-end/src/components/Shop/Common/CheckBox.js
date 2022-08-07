import { Fragment } from "react";

const CheckBox = (props) => {
  const inputHandler = (event) => {
    props.onChoice(event.target.value);
  };
  return (
    <Fragment>
      <div className="">
        <input
          type="checkbox"
          id="checkbox"
          name={props.value}
          value={props.value}
          onChange={inputHandler}
          checked={props.checked.includes(props.value)}
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
          }}
        />
        <label
          style={{
            marginLeft: "40px",
          }}
        >
          {props.title}
        </label>
      </div>
    </Fragment>
  );
};
export default CheckBox;
