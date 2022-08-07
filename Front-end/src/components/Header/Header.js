import Card from "./Common/Card";
import HeaderTop from "./Common/HeaderTop";
import HeaderMid from "./Common/HeaderMid";
import HeaderBottom from "./Common/HeaderBottom";
const Header = (props) => {
  return (
    <Card>
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </Card>
  );
};
export default Header;
