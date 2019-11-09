import React from "react";
import api from "../util/API";


function handleSubmit(input,props){
    api.getBooks(input).then(
      function(bookdata){
          console.log(bookdata);
          props.updateBooks(bookdata.data.items);
      }  
    );
}

function handleChange (event, props){
    var input=event.target.value;
    handleSubmit(input, props);
}
const Content = (props) => (
  <span>
    <label>Search for Book </label>
   <input id="input" placeholder="Search for Book Name" onChange={(event)=> handleChange(event,props)} ></input>
   <button id="submit" type="GET" onClick={()=> handleSubmit(document.getElementById("input").value,props)}>Search</button>
  </span>
 
);

export default Content;
