const Des_Monitor = (props) => {
  console.log(props.product);
  return (
    <div className="product__desc-info">
      <ul>
        <li>
          <h6>Kích thước màn hình</h6>
          <span>{props.product.Parameter.size}</span>
        </li>
        <li>
          <h6>Công nghệ màn hình</h6>
          <span>{props.product.Parameter.technology}</span>
        </li>
        <li>
          <h6>Độ phân giải</h6>
          <span>{props.product.Parameter.resolution}</span>
        </li>
        <li>
          <h6>Chuẩn màn hình</h6>
          <span>{props.product.Parameter.type}</span>
        </li>
        <li>
          <h6>Tần số quét</h6>
          <span>{props.product.Parameter.frequency}</span>
        </li>
        <li>
          <h6>Chất liệu mặt kính</h6>
          <span>{props.product.Parameter.glass}</span>
        </li>
      </ul>
    </div>
  );
};
export default Des_Monitor;
