import React from "react";
//import axios from "axios";
import api from "../util/API";

function deleteSaved (props){
  console.log(props);
  //  api.find({props.title},function(err, result){
  //   api.deleteBook(props).then (function(res){
  //     console.log(res);
  //    });
  //  });
    
}
function saveButton (bookobj){
 // console.log("What is this?"+props);
 api.saveBook(bookobj).then (function(res){
  console.log(res);
 });
    
}
function deleteButton(_id){
  api.deleteBook(_id).then (function(res){
    console.log(res);
  });
  }

const Result = (props) => (
  <div className ="result">
      <h2>{props && props.title ? props.title: ""}</h2>
      <h3>Author: {props && props.authors ? props.authors.join(", "): ""} </h3>
      <p>Description: {props && props.description ? props.description: ""}</p>
      <img src={props && props.image ? props.image: ""} alt=""/>
      <a href={props && props.link ? props.link: ""}>{props && props.link ? props.link: ""}</a>
      <br/>
      <button onClick={()=>saveButton(props.obj)}>Save</button>
      {/* <button onClick={()=>deleteSaved(props.obj)}>Delete</button> */}
      <button onClick={()=>deleteSaved(deleteButton)}>Delete</button>
     
  </div>
);

export default Result;
