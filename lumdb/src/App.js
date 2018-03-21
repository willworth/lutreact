import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'
const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'A space movie'
  },  {
    id: 2,
    title: 'Spider Man'
  },  {
    id: 3,
    title: 'lord of the Rings'
  }
]; 

class App extends Component {

 async componentDidMount() {
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1f010524f483d8b9090cb965239b815a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies)

    }   catch(e){
      console.log(e);

    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie=>(
            <Movie key={movie.id} movie={movie} desc={movie.desc}/>
          ))}
      </div>
    );
  }
}

export default App;
 