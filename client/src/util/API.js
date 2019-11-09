import axios from "axios";

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("bookData",bookData);
   return axios.post("/api/books", bookData);
  //   return fetch('/api/books', {
  //   method: 'post',
  //   body: JSON.stringify(bookData)
  // }).then(function(response) {
  //   return response.json();
  // }).then(function(data) {
     
  //   return data;
  // });
  },
  savedBooks: function()  {
  return axios.get("/saved").then(function(books){
    console.log(books);
    return books.data;
  });
  
}
 
};



