import { useState } from "react";
import InputOption from "./InputOption";
const Input = (props) => {
  const [selectClicked, setSelectClicked] = useState(false);
  const [valueSelect, setValueSelect] = useState(props.Options[0]);
  const clickedHandler = (event) => {
    setSelectClicked(true);
  };
  const selectedHandler = (para) => {
    setSelectClicked(false);
    setValueSelect(para);
  };
  const optionList = props.Options.map((option) => {
    return (
      <InputOption
        Obj={option}
        optionHandler={selectedHandler}
        key={option.value}
      />
    );
  });

  return (
    <div className={selectClicked ? "nice-select open" : "nice-select"}>
      <span className="current" onClick={clickedHandler}>
        {valueSelect.title}
      </span>
      <ul className="list">{optionList}</ul>
    </div>
  );
};
export default Input;
