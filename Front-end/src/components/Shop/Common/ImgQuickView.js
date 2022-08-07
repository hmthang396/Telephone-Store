const ImgQuickView = (props) => {
  return (
    <div className="tab-pane fade active show">
      <div className="product__modal-img w-img">
        <img src={props.imgUrl} alt="" />
      </div>
    </div>
  );
};
export default ImgQuickView;
