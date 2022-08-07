const Des_Camera = (props) => {
  return (
    <div className="product__desc-info">
      <ul>
        <li>
          <h6>Selfie</h6>
          <ul style={{ width: "100%" }}>
            <li>
              <h6>Single selfie camera</h6>
              <span>{props.product.Parameter.s_resolution}</span>
            </li>
            <li>
              <h6>Quay phim</h6>
              <span
                dangerouslySetInnerHTML={{
                  __html: props.product.Parameter.s_video,
                }}
              ></span>
            </li>
            <li>
              <h6>Tính năng</h6>
              <span
                dangerouslySetInnerHTML={{
                  __html: props.product.Parameter.s_feature,
                }}
              ></span>
            </li>
          </ul>
        </li>
        <li>
          <h6>Camera sau</h6>
          <ul style={{ width: "100%" }}>
            <li style={{ backgroundColor: "white" }}>
              <h6>Camera</h6>
              <span>{props.product.Parameter.r_resolution}</span>
            </li>
            <li>
              <h6>Quay phim</h6>
              <span
                dangerouslySetInnerHTML={{
                  __html: props.product.Parameter.r_video,
                }}
                style={{ backgroundColor: "white" }}
              ></span>
            </li>
            <li style={{ backgroundColor: "white" }}>
              <h6>Tính năng</h6>
              <span
                dangerouslySetInnerHTML={{
                  __html: props.product.Parameter.r_feature,
                }}
              ></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Des_Camera;
