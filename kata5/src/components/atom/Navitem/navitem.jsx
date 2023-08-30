import { NavItem as ReactstrapNavItem } from "reactstrap";

function NavItem({children}){
    return(
        <ReactstrapNavItem>
            {children}
        </ReactstrapNavItem>
    );
}

export default NavItem;