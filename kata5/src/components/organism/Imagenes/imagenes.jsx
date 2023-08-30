import { getUsers } from "../../../api";
import { useEffect, useState } from "react";

useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
}, []);

useEffect(() => {

    setLoading(false);

console.log(users);
}, [users]);

var imagenes = JSON.stringify.img
console.log(imagenes)



for (let i = 0; i < imagenes.length; i++) {
    
}
