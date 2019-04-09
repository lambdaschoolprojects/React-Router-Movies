import React, { Component } from 'react';
import { Route } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movies: null,
    };
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          this.setState(() => ({ movies: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path={"/"} render={props=><MovieList {...props} movies={this.state.movies}/>} />
        <Route path={"/movies/:id"} render={props=><Movie {...props} movies={this.state.movies} />} />
      </div>
    );
  }
}
