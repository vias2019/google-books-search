import React from "react";
import Axios from "axios";
import api from "../util/API";

function handleSaved (props){
 api.savedBooks().then (function(res){
  console.log(res);
  props.updateBooks(res);
 });
}

function deleteButton(_id){
api.deleteBook(_id).then (function(res){
  console.log(res);
});
}

const Saved= (props) => (
  <span>
    <button id="saved" onClick={()=>handleSaved(props)}>Saved</button>
  </span>
);

const Result = (props) => (
  <div className ="resultSaved">
      <h2>{props && props.title ? props.title: ""}</h2>
      <h3>Author: {props && props.authors ? props.authors.join(", "): ""} </h3>
      <p>Description: {props && props.description ? props.description: ""}</p>
      <img src={props && props.image ? props.image: ""}/>
      <a href={props && props.link ? props.link: ""}>{props && props.link ? props.link: ""}</a>
      <br/>
      <button onClick={()=>deleteButton(props.obj)}>Delete</button> 
      
     
  </div>
)





export default Saved;
