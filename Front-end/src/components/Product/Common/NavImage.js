const NavImage = (props) => {
  let classNameButton = "nav-link";
  if (props.imageDisplay === props.imgUrl) {
    classNameButton = "nav-link active";
  } else {
    classNameButton = "nav-link";
  }
  const buttonClicked = () => {
    props.active(props.imgUrl);
  };
  return (
    <li className="nav-item" role="presentation">
      <button className={classNameButton} type="button" onClick={buttonClicked}>
        <img
          src={props.imgUrl}
          alt=""
          style={{ width: "85px", height: "85px" }}
        />
      </button>
    </li>
  );
};
export default NavImage;
