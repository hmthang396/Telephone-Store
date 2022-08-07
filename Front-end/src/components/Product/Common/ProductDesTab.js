const ProductDesTab = (props) => {
  let classButton = "nav-link";
  if (props.value === props.tab) {
    classButton = "nav-link active";
  } else {
    classButton = "nav-link";
  }
  const buttonClickedhandler = () => {
    props.onChoice(props.value);
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={classButton}
        type="button"
        onClick={buttonClickedhandler}
      >
        {props.title}
      </button>
    </li>
  );
};
export default ProductDesTab;
