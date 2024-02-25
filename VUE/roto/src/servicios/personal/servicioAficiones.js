import httpAxios from "./http-axios";
import http from "./http-axios";

class serviciosAficiones {

    /**Peticiones a aficones */
    
    getAll(){
        return http.get(`/aficiones`)
    }
    get(id){
        return http.get(`/aficiones/${id}`)
    }
    create(data){
        return http.create(`/aficiones?nombre=${data}`)
    }

    delete(id){
        return http.delete(`/aficiones/${id}`)
    }

    post(nuevaAficion){
        return http.post("/aficiones", nuevaAficion);
    }

    findByNombre(nombre){
        return http.get(`aficiones?nombre=${nombre}`)
    }
    

    update(id, data){
        return http.put(`/aficiones/${id}`,data)
    }

    
  /**Peticiones a usuarios */
    getUsuario(clave) {
        return http.get(`/usuarios/${clave}`);
    }
    findByUsuario(clave) {
        return http.get(`/usuarios?clave=${clave}`);
    }

 }

export default new serviciosAficiones();