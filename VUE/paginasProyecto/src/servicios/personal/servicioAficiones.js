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
}

export default new servicioAficiones();