(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(12),l=n.n(i),r=(n(23),n(13)),u=n(14),s=n(16),c=n(15),m=n(17),f=(n(24),n(2)),k=n.n(f),h={getBooks:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},deleteBook:function(e){return k.a.delete("/api/books/"+e)},saveBook:function(e){return console.log("bookData",e),k.a.post("/api/books",e)},savedBooks:function(){return k.a.get("/saved").then(function(e){return console.log(e),e.data})}};function d(e,t){h.getBooks(e).then(function(e){console.log(e),t.updateBooks(e.data.items)})}var p=function(e){return a.a.createElement("span",null,a.a.createElement("label",null,"Search for Book "),a.a.createElement("input",{id:"input",placeholder:"Search for Book Name",onChange:function(t){return function(e,t){d(e.target.value,t)}(t,e)}}),a.a.createElement("button",{id:"submit",type:"GET",onClick:function(){return d(document.getElementById("input").value,e)}},"Search"))};var v=function(e){return a.a.createElement("div",{className:"result"},a.a.createElement("h2",null,e&&e.title?e.title:""),a.a.createElement("h3",null,"Author: ",e&&e.authors?e.authors.join(", "):""," "),a.a.createElement("p",null,"Description: ",e&&e.description?e.description:""),a.a.createElement("img",{src:e&&e.image?e.image:""}),a.a.createElement("a",{href:e&&e.link?e.link:""},e&&e.link?e.link:""),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return t=e.obj,void h.saveBook(t).then(function(e){console.log(e)});var t}},"Save"),a.a.createElement("button",{onClick:function(){return function(e){console.log(e)}(e.title)}},"Delete"))};var g=function(e){return a.a.createElement("span",null,a.a.createElement("button",{id:"saved",onClick:function(){return function(e){h.savedBooks().then(function(t){console.log(t),e.updateBooks(t)})}(e)}},"Saved"))},b=function(e){var t=e.books.map(function(e){var t={title:e.volumeInfo?e.volumeInfo.title:e.title,description:e.volumeInfo?e.volumeInfo.description:e.description,link:e.selfLink?e.selfLink:e.link};return e.image?t.image=e.image:e.volumeInfo&&e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.smallThumbnail?t.image=e.volumeInfo.imageLinks.smallThumbnail:e.volumeInfo.imageLinks.thumbnail?t.image=e.volumeInfo.imageLinks.thumbnail:t.image="":t.image="",e.authors?t.authors=e.authors:e.volumeInfo&&e.volumeInfo.authors?t.authors=e.volumeInfo.authors:t.authors=["No information available"],t});return a.a.createElement("div",{className:"resultList"},t.map(function(e,t){return a.a.createElement(v,{title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link,obj:e,key:t})}))},E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={books:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"updateBooks",value:function(e){this.setState({books:e}),console.log(this.state)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("h1",null,"Google-Books-Search"),a.a.createElement(p,{updateBooks:this.updateBooks.bind(this)}),a.a.createElement(g,{updateBooks:this.updateBooks.bind(this)})),a.a.createElement(b,{books:this.state.books}))}}]),t}(o.Component);l.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.636355f7.chunk.js.map