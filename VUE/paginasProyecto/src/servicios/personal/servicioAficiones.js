import http from "./http-axios";

class servicioAficiones {

    getAll() {
        return http.get("/aficiones");
    }

    get(id) {
        return http.get(`/aficiones/${id}`);
    }
}

export default new servicioAficiones();