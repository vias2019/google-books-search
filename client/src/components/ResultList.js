import React from "react";
import axios from "axios";
import Result from "./Result";

/*const ResultList = (props) => (
    <div className ="resultList">
{props.books.map((book)=>{
    var obj={
        title: book.volumeInfo ? book.volumeInfo.title : book.title,
        authors: book.volumeInfo ? book.volumeInfo.authors: book.authors,
        description: book.volumeInfo ? book.volumeInfo.description : book.description,
        //image: book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : book.image,
        image: book.volumeInfo ? book.volumeInfo.imageLinks.thumbnail : book.image,
        link: book.selfLink ? book.selfLink : book.link
    };
    return (<Result
    
    title={obj.title}
    authors ={obj.authors}
    description={obj.description}
    image={book.image}
    link={book.link}
        obj={obj}
    />);
})}

    </div>
   
);*/

const ResultList = (props) => {

    const modifiedBooks = props.books.map(book => {
        var obj = {
            title: book.volumeInfo ? book.volumeInfo.title : book.title,
            //authors: book.volumeInfo ? book.volumeInfo.authors : book.authors,
            description: book.volumeInfo ? book.volumeInfo.description : book.description,
            //            image: (book.volumeInfo && book.volumeInfo.imageLinks && ) ? book.volumeInfo.imageLinks.thumbnail : book.image,
            link: book.selfLink ? book.selfLink : book.link
        };
        //IF this is coming from db -- we will have book.image!
        if (book.image) {
            obj["image"] = book.image;
        } else {
            //otherwise, this is coming from api!  we need to look at more stuff
            if (book.volumeInfo && book.volumeInfo.imageLinks) {
                if (book.volumeInfo.imageLinks.smallThumbnail) {
                    obj["image"] = book.volumeInfo.imageLinks.smallThumbnail;
                } else if (book.volumeInfo.imageLinks.thumbnail) {
                    obj["image"] = book.volumeInfo.imageLinks.thumbnail;
                }
                else {
                    obj["image"] = "";
                }
            } else {
                obj["image"] = "";
            }
        }

        // If this is coming from db - we (should) already have authors
        if (book.authors) {
            obj["authors"] = book.authors;
        } else if (book.volumeInfo && book.volumeInfo.authors) {
            obj["authors"] = book.volumeInfo.authors;
        }
        else {
            obj["authors"] = ["No information available"];
        }

        return obj;
    });

    // THIS IS WHERE WE USE JSX TO SHOW STUFF :)
    return (<div className="resultList">
        {modifiedBooks.map( (book, index) => ((
            <Result
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                obj={book}
                key={index}
            />)))}
    </div>);
};

export default ResultList;