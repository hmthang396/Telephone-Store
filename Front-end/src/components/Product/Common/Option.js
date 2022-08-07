const Option = (props) => {
  let classOption;
  const buttonClickedHandler = () => {
    props.Selected(props.id);
  };

  if (props.active) {
    classOption = "optionactive";
  } else {
    classOption = "option";
  }
  return (
    <button className={classOption} onClick={buttonClickedHandler}>
      {props.title}
    </button>
  );
};
export default Option;
