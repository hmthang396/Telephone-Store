const NavImage = (props) => {
  let classImg = "nav-link";
  if (props.imageDisplay === props.imgUrl) {
    classImg = "nav-link active";
  } else {
    classImg = "nav-link";
  }
  const buttonClicked = () => {
    props.active(props.imgUrl);
  };
  return (
    <li className="nav-item" role="presentation">
      <button className={classImg} type="button" onClick={buttonClicked}>
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
