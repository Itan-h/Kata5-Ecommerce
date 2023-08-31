import axios from "axios";

const getproductos = async () => {
  let productos = await axios
    .get("https://ecommerce-uwvs.onrender.com/productos")
    .then(function (response) {
      // handle success
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    return productos
};

export { getproductos };
