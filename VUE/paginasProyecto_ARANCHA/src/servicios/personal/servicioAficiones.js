import http from "./http-axios";

class servicioAficiones {

    getAll() {
        return http.get("/aficiones");
    }

    get(id) {
        return http.get(`/aficiones/${id}`);
    }

    delete(id){
        return http.delete(`/aficiones/${id}`);
    }

    post(aficion) {
        return http.post(`/aficiones`, aficion);
    }
    
    findByNombre(nombre){
        return http.get(`/aficiones?nombre=${nombre}`)
    }

    update(id, data){
        return http.put(`/aficiones/${id}`,data);
    }

    getUsuario(clave) {
        return http.get(`/usuarios/${clave}`);
    }

    findByUsuario(clave){
        return http.get(`/usuarios?clave=${clave}`)
    }

    
}

export default new servicioAficiones();