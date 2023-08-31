import { getproductos } from "../../../api";
import { useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import Example from "../../molecule/navbar/navbar";



const Home = () => {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [searchResult, setSearchResult] = useState([]);

  

  useEffect(() => {
    getproductos().then((response) => setproductos(response.data));
  }, []);

  useEffect(() => {
      setLoading(false);
    // console.log(productos.productos)
  }, [productos]);

  const data = productos.productos
  console.log(data)


  // const searchUser = ({ user }) => {
  //   let filtered = productos.filter((u) => user == u.name);
  //   setSearchResult(filtered);
  //   // return filtered
  // };

  return (
    <>
      {loading ? (
        // <Loading />
        <FcAlarmClock />
      ) : (
        <>
          <div>
            <Example></Example>
          </div>


          <h1>Welcome to my Home Page 🏠</h1>
          {JSON.stringify(data)}
          {
            data.map(u=> <p key={u.id}>{u.img}</p>)
          }
          {
            data.map(i=> <img src={i.img}/>)
          }
          {

          }

        </>
      )}
    </>
    
  );
};

export default Home;
