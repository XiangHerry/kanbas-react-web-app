import {Link} from "react-router-dom";
import Assignment3 from "./a3";
function Labs() {
 return(
  <div>
   <Link to="/hello">Hello</Link> |
   <Link to="/Labs/a3">A3</Link> |
   <Link to="/Kanbas">Kanbas</Link>
   <Assignment3/>
  </div>
 )
}
export default Labs;
