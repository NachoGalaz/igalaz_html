import axios from 'axios';

const baseUrl = "http://localhost:8080/api"

const getAll = async()=>{
// que sea asincrona significa que trabaja en paralalelo mientras corre el resto
const res = await axios.get(baseUrl +  "/obtener/reportes");
// espera que axios haga una peticion tipo get a la urlbase
//lo mismo q decir axios.get(localhost:8080/api/obtener/reportes)
console.log(res.data)//deberia traer el json
return res.data;
}

const eliminarReporte = async(id)=>{
    const res = await axios.post(baseUrl + "/eliminar/"+ id);
    return res.data;
}
// peticion por path concatena en baseurl+id

const saveReporte = async (reporte)=>{
const res = await axios.post(baseUrl+"/guardar/reporte", reporte)
}
//peticion objeto se agrega con una coma
export {getAll, eliminarReporte,saveReporte}