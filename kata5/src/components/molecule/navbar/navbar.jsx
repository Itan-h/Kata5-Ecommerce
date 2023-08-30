// import { Navbar as ReactstrapNavBar } from "reactstrap";
// import { NavItem } from "reactstrap";
// import { NavLink } from "reactstrap";

// const Navbar = () => {
//     // size
//     return (
//       // <ReactstrapLabel for="user">{props.children}</ReactstrapLabel>
        
//         <ReactstrapNavBar color="danger" dark expand="md">
//             <NavItem>
//                     <NavLink href="/login">Components</NavLink>
//             </NavItem>
//             <NavItem>
//                     <NavLink href="/dashboard">Hola</NavLink>
//             </NavItem>
//         </ReactstrapNavBar>
        
//         // <ReactstrapLabel
//         // // className={size}
//         //     for={forHtml}
//         // >
//         // {children}
//         // </ReactstrapLabel>
//     );
// };


// export default Navbar;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Formik, Field, Form } from "formik";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      
      <Navbar color='danger' dark expand="md" fixed='top'>
      <div style={{marginRight:'35%'}}>
        <NavbarBrand href="/">
          <img src="https://www.pngkey.com/png/full/295-2951957_infinito-blanco-png-simbolo-infinito-blanco-png.png" alt="logo" width={32}/>
          Merca
          </NavbarBrand>
      </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
        
          <Formik
            initialValues={{
              user: "",
            }}
            // validationSchema={SearchSchema}
            // onSubmit={(values) => {
            //   searchUser(values);
            // }}
          >
            {({ errors, touched }) => (
              <Form>
                <div style={{display:'flex', alignItems:'center'}}>
                <div>
                  <Field id="user" name="user"  />
                  {errors.user && touched.user ? (
                    <div>{errors.user}</div>
                  ) : null}
                </div>
                <button type="submit" style={{color:'black', backgroundColor:'white', borderRadius:10, border:'white'}}>Buscar</button>
                </div>
              </Form>
            )}
          </Formik>
          <div style={{marginLeft:'85%', display:'flex', flexDirection:'row', alignItems:'center'}}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Usuario
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem href='/login'>Registro</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>Compras</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><img src="https://www.seekpng.com/png/full/410-4109493_carro-de-compra-carrito-de-compras-blanco-png.png" alt="compras" width={25}/></NavLink>
            </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;