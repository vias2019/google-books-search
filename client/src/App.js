import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
//import Result from "./components/Result";
import Save from "./components/Save";
import ResultList from "./components/ResultList";


class App extends Component {
  state={
    books: []
  }
  updateBooks(updatedBooks){
    this.setState({books: updatedBooks});
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Google-Books-Search</h1>
          <Content updateBooks={this.updateBooks.bind(this)}/>
          <Save updateBooks={this.updateBooks.bind(this)}/>
        </div>
        <ResultList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
