const Des_CPU = (props) => {
  console.log(props.product);
  return (
    <div className="product__desc-info">
      <ul>
        <li>
          <h6>CPU</h6>
          <span>{props.product.Parameter.processor}</span>
        </li>
        <li>
          <h6>Số nhân - Tốc độ tối đa</h6>
          <span>{props.product.Parameter.detail_processor}</span>
        </li>
        <li>
          <h6>Hệ điều hành</h6>
          <span>{props.product.Parameter.operating_system}</span>
        </li>
        <li>
          <h6>GPU</h6>
          <span>{props.product.Parameter.graphic}</span>
        </li>
        <li>
          <h6>RAM</h6>
          <span>{props.product.Parameter.ram}</span>
        </li>
        <li>
          <h6>Bộ nhớ trong</h6>
          <span>{props.product.Parameter.internal_storage}</span>
        </li>
        <li>
          <h6>Bộ nhớ ngoài</h6>
          <span>{props.product.Parameter.external_storage}</span>
        </li>
        <li>
          <h6>Loại PIN</h6>
          <span>{props.product.Parameter.p_type}</span>
        </li>
        <li>
          <h6>Dung lượng pin</h6>
          <span>{props.product.Parameter.p_capacity}</span>
        </li>
        <li>
          <h6>Other pin</h6>
          <span
            dangerouslySetInnerHTML={{
              __html: props.product.Parameter.p_other,
            }}
          ></span>
        </li>
      </ul>
    </div>
  );
};
export default Des_CPU;
