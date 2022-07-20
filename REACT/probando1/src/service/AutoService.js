import axios from 'axios';

const baseUrl = "http://localhost:8080/api"

const getAll = async()=>{
// que sea asincrona significa que trabaja en paralalelo mientras corre el resto
const res = await axios.get(baseUrl +  "/obtener/autos");
// espera que axios haga una peticion tipo get a la urlbase
//lo mismo q decir axios.get(localhost:8080/api/obtener/autos)
console.log(res.data)//deberia traer el json
return res.data;
}

const eliminarAuto = async(id)=>{
    const res = await axios.post(baseUrl + "/eliminar/"+ id);
    return res.data;
}
// peticion por path concatena en baseurl+id

const saveAuto = async (auto)=>{
const res = await axios.post(baseUrl+"/guardar/auto", auto)
}
//peticion objeto se agrega con una coma
export {getAll, eliminarAuto,saveAuto}