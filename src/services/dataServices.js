import https from '../api';


class dataServices {
    getAll() {
        return https.get('/books');
    }
    get(_id) {
        return https.get(`/books/${_id}`);
    }
    create(data) {
        return https.post('/books', data);
    }
    update(_id, data) {
        return https.patch(`/books/${_id}`, data);
    }
    delete(_id) {
        return https.delete(`/books/${_id}`);
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