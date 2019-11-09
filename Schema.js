var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        title: {
            type: String
        },
        authors: {
            type: Array
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        link: {
            type: String
        }
        
    }
);

var Book = mongoose.model("googlebooks", UserSchema);

module.exports = Book;