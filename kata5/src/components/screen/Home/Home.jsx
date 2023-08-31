import { getproductos } from "../../../api";
import { useEffect, useState } from "react";
import { FcDebian } from "react-icons/fc";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import Barra from "../../molecule/navbar/navbar";
import Pie from "../../molecule/footer/footer";

const Home = () => {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [searchResult, setSearchResult] = useState([]);

  

  useEffect(() => {
    getproductos().then((response) => setproductos(response.data));
  }, []);

  useEffect(() => {
      setLoading(false);
      console.log(productos.productos)
  }, [productos]);



  return (
    <>
    <FcDebian />
    <div>
            <Barra></Barra>
          </div>
          <div style={{marginTop:'5%',display:'flex', flexDirection:'row', flexWrap:"wrap"}}>
      {productos.productos != undefined && (
        <>
          
          
          {
            productos.productos.map(j=> 
            <div style={{width:'30%', height:615, borderRight:2, borderLeft:2, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card color="light" style={{width: '100%', height: '100%'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <img src={j.img} style={{height:'65%', width:'80%'}}/>
              <CardBody>
                <CardTitle style={{fontSize:'large', fontWeight:'bold'}}>{j.nombre}</CardTitle>
              <CardText>{j.descripcion}</CardText>
              <div style={{display:'flex', flexDirection:'row'}}>
                <CardText style={{fontWeight:'bold'}}>Precio: ${j.precio}</CardText>
                <Button color="danger" style={{width:'50%', marginLeft:10}}>Comprar</Button>
              </div>
              </CardBody>
              </div>
            </Card></div>)
          }
          
        </>
      )}
    </div>
          <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}><Pie></Pie></div>
          </>
  );
};

export default Home;
