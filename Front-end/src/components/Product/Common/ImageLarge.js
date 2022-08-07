const ImageLarge = (props) => {
  return (
    <div className="product__details-thumb">
      <div className="tab-content" id="productThumbContent">
        <div className="tab-pane fade show active">
          <div className="product__details-nav-thumb w-img">
            <img
              src={props.imgUrl}
              alt=""
              style={{ width: "571px", height: "571px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageLarge;
