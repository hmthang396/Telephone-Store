const Des_Info = (props) => {
  let content;
  if (props.isLoading) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <div className="product__desc-info">
        <ul>
          <li>
            <h6>Thương hiệu</h6>
            <span>{props.product.Parameter.brand}</span>
          </li>
          <li>
            <h6>Xuất xứ</h6>
            <span>{props.product.Parameter.origin}</span>
          </li>
          <li>
            <h6>Thời điểm ra mắt</h6>
            <span>{props.product.Parameter.release_time}</span>
          </li>
          <li>
            <h6>Thời gian bảo hành (tháng)</h6>
            <span>{props.product.Parameter.warranty_period}</span>
          </li>
          <li>
            <h6>Kích thước</h6>
            <span>{props.product.Parameter.dimension}</span>
          </li>
          <li>
            <h6>Trọng lượng sản phẩm</h6>
            <span>{props.product.Parameter.weight}</span>
          </li>
          <li>
            <h6>Chuẩn kháng nước / Bụi bẩn</h6>
            <span>{props.product.Parameter.ip}</span>
          </li>
        </ul>
      </div>
    );
  }
  return content;
};
export default Des_Info;
