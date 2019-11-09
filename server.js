const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");
var Book = require("./Schema");

mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/userdb" || "mongodb://vias2019:" + process.env.dbpassword + "@ds241278.mlab.com:41278/heroku_rxjh7k9v"), 

{ useNewUrlParser: true });
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // Create a new user using req.body
  Book.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.delete("/api/books", function(req, res) {
  // Create a new user using req.body
  Book.remove(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});
app.post("/api/books", function(req, res) {
  // Create a new user using req.body
  Book.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.get("/saved",function(req, res){
  Book.find({})
  .then(function(dbUser) {
    // If saved successfully, send the the new User document to the client
    console.log(dbUser);
    res.json(dbUser);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    res.json(err);
  });
});

app.post("/api/books/", function(req,res){
Book.create(req.body)
.then(function(dbUser) {
  // If saved successfully, send the the new User document to the client
  res.json(dbUser);
})
.catch(function(err) {
  // If an error occurs, send the error to the client
  res.json(err);
});
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
