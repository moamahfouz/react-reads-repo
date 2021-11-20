import React from "react";
//import * as BooksAPI from "./BooksAPI";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import SearchIndex from "./Components/SearchIndex";
import "./App.css";

class BooksApp extends React.Component {
 

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home
                 
            />
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <SearchIndex/>
          )}
        />

      
      </div>
    );
  }
}

export default BooksApp;
