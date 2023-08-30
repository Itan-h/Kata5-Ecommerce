import { NavLink as ReactstrapNavLink } from "reactstrap";

function NavLink({children}){
    return(
        <ReactstrapNavLink>
            {children}
        </ReactstrapNavLink>
    );
}

export default NavLink;