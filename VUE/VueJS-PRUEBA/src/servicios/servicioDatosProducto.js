import http from "./http-axios";

class servicioDatosProducto {
  getAll() {
    return http.get("/simeone");
  }

  get(id) {
    return http.get(`/simeone/${id}`);
  }  

  delete(id) {
    return http.delete(`/simeone/${id}`);
  }

  /*
    Buscar un producto si contiene el texto en alguno de los campos
  */
  findByGeneral(texto) {
    return http.get(`/asistentes?q=${texto}`);
  }
}

export default new servicioDatosProducto();
