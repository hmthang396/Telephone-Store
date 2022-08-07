const Des_Other = (props) => {
  console.log(props.product.Parameter.data_connectivity.replace("//t", ""));
  return (
    <div className="product__desc-info">
      <ul>
        <li>
          <h6>Số khe SIM</h6>
          <span>{props.product.Parameter.sim_number}</span>
        </li>
        <li>
          <h6>Loại SIM</h6>
          <span>{props.product.Parameter.type_sim}</span>
        </li>
        <li>
          <h6>Bluetooth</h6>
          <span>{props.product.Parameter.bluetooth}</span>
        </li>
        <li>
          <h6>Hỗ trợ mạng</h6>
          <span
            dangerouslySetInnerHTML={{
              __html: props.product.Parameter.data_connectivity,
            }}
          ></span>
        </li>
        <li>
          <h6>Cổng sạc</h6>
          <span>{props.product.Parameter.charger_connector}</span>
        </li>
        <li>
          <h6>Audio Jack</h6>
          <span>{props.product.Parameter.audio_connector}</span>
        </li>
        <li>
          <h6>Wifi</h6>
          <span>{props.product.Parameter.wifi}</span>
        </li>
        <li>
          <h6>GPS</h6>
          <span
            dangerouslySetInnerHTML={{
              __html: props.product.Parameter.gps,
            }}
          ></span>
        </li>
        <li>
          <h6>Kết nối khác</h6>
          <span
            dangerouslySetInnerHTML={{
              __html: props.product.Parameter.other_connector,
            }}
          ></span>
        </li>
      </ul>
    </div>
  );
};
export default Des_Other;
