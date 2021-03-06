import axios from "axios";

// save the key into dotenv.
const API_KEY = "AIzaSyDt0fO2qvo9yN6YXJS666t-a9pL_GdYvZU"

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Search a book (for now just hardcoded) 
  searchBook: function (queryString) {
    // split and then join so it allows user to type with space in between in the form.
    let query = (queryString.split("")).join("+");
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
  }
};