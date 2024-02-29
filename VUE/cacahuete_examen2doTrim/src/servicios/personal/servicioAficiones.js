import http from "./http-axios";

class servicioAficiones{

    getAll(){
        return http.get("/aficiones")
    }
    
    get(id){
        return http.get(`/aficiones/${id}`)
    }

    delete(id){
        return http.delete(`/aficiones/${id}`)
    }

    findByNombre(nombre){
        return http.get(`/aficiones?nombre=${nombre}`)
    }

    findByUsuario(clave){
        return http.get(`/usuarios?clave=${clave}`)
    }

}
export default new servicioAficiones();