import api from "../api";
class BooksDataService {
    getAll() {
        return api.get("/books");
    }
    get(id) {
        return api.get(`/books/${id}`);
    }
    create(data) {
        return api.post("/books", data);
    }
    update(id, data) {
        return api.patch(`/books/${id}`, data);
    }
    delete(id) {
        return api.delete(`/books/${id}`);
    }
    deleteAll() {
        return api.delete(`/books`);
    }
    findByTitle(title) {
        return api.get(`/books?title=${title}`);
    }
}
export default new BooksDataService();