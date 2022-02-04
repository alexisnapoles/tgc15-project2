import https from '../api';


class dataServices {
    getAll() {
        return https.get('/books');
    }
    get(id) {
        return https.get(`/books/${id}`);
    }
    create(data) {
        return https.post('/books', data);
    }
    update(id, data) {
        return https.put(`/books/${id}`, data);
    }
    delete(id) {
        return https.delete(`/books/${id}`);
    }
    deleteAll() {
        return https.delete('/books');
    }
    findByTitle(title) {
        return https.get(`/books?title=${title}`);
    }
    findByGenre(genre) {
        return https.get(`/books?genre=${genre}`)
    }
    findByAuthor(author) {
        return https.get(`/books?author=${author}`)
    }
}
export default new dataServices();