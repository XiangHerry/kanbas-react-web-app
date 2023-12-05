/** @format */

import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/Labs/a5">
                A5
            </Link>
            <Link className="nav-link" to="/Labs/a3">
                A3
            </Link>
            <Link className="nav-link" to="/Labs/a4">
                A4
            </Link>
            <Link className="nav-link" to="/hello">
                Hello
            </Link>
            <Link className="nav-link" to="/project">Project</Link>
            <Link className="nav-link" to="/project/signin">Signin</Link>
            <Link className="nav-link" to="/Kanbas">
                Kanbas
            </Link>
            <Link className="nav-link" to="/project/signup">SignUp</Link>
        </nav>
    );
}

export default Nav;