const InputOption = (props) => {
  const clickedHandler = (event) => {
    props.optionHandler({
      value: props.Obj.value,
      title: props.Obj.title,
    });
    event.preventDefault();
  };
  return (
    <li
      key={props.Obj.value}
      value={props.Obj.value}
      className="option"
      onClick={clickedHandler}
    >
      {props.Obj.title}
    </li>
  );
};

export default InputOption;
