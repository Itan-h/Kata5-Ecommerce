import { Input,  FormGroup } from "reactstrap";
import Label from "../../atom/Label/Label";
import Button from "../../atom/Button/Button";
import { useState } from "react";
import Example from "../../molecule/navbar/navbar";

function Login() {
  const [Usuario, setUsuario] = useState("");
  const [Contraseña, setContraseña] = useState("");

  const submit = () => {
    console.log({
      Usuario, Contraseña
    });
  };

  return (
    <div>
      <Example></Example>
      <div style={{marginTop:'15%', marginLeft:'30%'}}>
      <div className="w-50">
        <div className="my-3">
          <FormGroup>
            <Label
            forHtml="Usuario">Usuario</Label>
            <Input
              value={Usuario}
              id="Usuario"
              className="mb-2"
              placeholder="Usuario"
              onChange={e => setUsuario(e.target.value)}
              ></Input>
          </FormGroup>
          <FormGroup>
            <Label size="fs-1" forHtml="Contraseña">Contraseña</Label>
            <Input
              value={Contraseña}
              id="Contraseña"
              className="mb-2"
              placeholder="Contraseña"
              type="Contraseña"
              onChange={e => setContraseña(e.target.value)}
            ></Input>
          </FormGroup>
        </div>
        <Button color="danger" onClick={submit}>
          Login
        </Button>
      </div>
      </div>
    </div>
  );
}

export default Login;
