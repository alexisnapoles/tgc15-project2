import api from "../api.js"

class getResponseData {
    getAllBooks() {
        return api.get("/books");
    }
    getBooksId(id) {
        return api.get(`/books/${id}`);
    }
    getBookByAuthor(author) {
        return api.get(`/books?author=${author}`)
    }
    getBookByTitle(title) {
        return api.get(`/books?title=${title}`)
    }
    postBooks(data) {
        return api.post("/books", data);
    }
    updateBooks(id, data) {
        return api.patch(`/books/${id}`, data);
    }
    deteleOneBook(id) {
        return api.delete(`/books/${id}`);
    }
    deleteAllBooks() {
        return api.delete("/books");
    }
}
export default new getResponseData();