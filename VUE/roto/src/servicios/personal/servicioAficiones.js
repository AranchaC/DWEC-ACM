import htttp from "./http-axios";

class serviciosAficiones {

    /**Peticiones a aficones */
    

    get(id){
        return http.get(`/aficiones/${id}`)
    }
    create(data){
        return http.create(`/aficiones?nombre=${data}`)
    }

    

    post(nuevaAficion){
        return http.post("/aficiones", nuevaAficion);
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