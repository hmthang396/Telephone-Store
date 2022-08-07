const Color = (props) => {
  const buttonClickedHandler = () => {
    props.Selected(props.id);
  };
  let classOption;
  if (props.active) {
    classOption = "dot coloractive ";
  } else {
    classOption = "dot ";
  }
  return (
    <button
      className={classOption}
      style={{ backgroundColor: props.hex }}
      onClick={buttonClickedHandler}
    ></button>
  );
};
export default Color;
