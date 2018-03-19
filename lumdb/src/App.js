import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },  {
    id: 2,
    title: 'Spider Mand'
  },  {
    id: 3,
    title: 'lord of the Rings'
  }
]; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map((movie)=>{
          return(
            <div key={movie.id}>
              {movie.title}
            </div>
          )
         })}
      </div>
    );
  }
}

export default App;
