import { Link } from "react-router-dom";
const HeaderBottom = (props) => {
  let styleHeaderBottom = {
    color: " black",
    backgroundColor: "white",
  };
  return (
    <div className="header__bottom d-none d-lg-block" style={styleHeaderBottom}>
      <div className="container">
        <div className="box-items-inner pt-10 pb-10">
          <div className="box-item">
            <Link to={`/Search?category=Iphone`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FIphone.png?alt=media&token=45b65530-e4b7-4738-af41-45736bd17295"
              />
            </Link>
          </div>
          <div className="box-item">
            <Link to={`/Search?category=Samsung`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FSamsung.png?alt=media&token=593f16b9-8e8a-41a0-a716-952c41408974"
              />
            </Link>
          </div>
          <div className="box-item">
            <Link to={`/Search?category=Oppo`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FOppo.jpg?alt=media&token=5cbb1a38-cea8-4ae7-b5ed-1940335c8b08"
              />
            </Link>
          </div>
          <div className="box-item">
            <Link to={`/Search?category=Xiaomi`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FXiaomi.png?alt=media&token=e0b2d697-769a-4556-ae04-8716b210ef4e"
              />
            </Link>
          </div>
          <div className="box-item">
            <Link to={`/Search?category=Vivo`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FVivo.png?alt=media&token=ae9f95de-4daf-42d5-b396-2c5f5bc0ba3c"
              />
            </Link>
          </div>
          <div className="box-item">
            <Link to={`/Search?category=Nokia`}>
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/react-http-25fe4.appspot.com/o/IconCategory%2FNokia.jpg?alt=media&token=d668c3f2-4351-480e-b587-a85437dd3ea2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
