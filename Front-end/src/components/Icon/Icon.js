import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
const Icon = (props) => {
  return <FontAwesomeIcon icon={props.icon} style={props.style} />;
};
export default Icon;
