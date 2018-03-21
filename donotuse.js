import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// /////this is just example code i want to keep
// ////eventhough the tutorial has moved on
class App extends Component {

    state = {
      toggle: true
      }
  
      toggle = () => {
      this.setState({
        // switches to the opposite
        toggle: !this.state.toggle
      })    
      }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome text = "Welcome to learning props"/> 
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.toggle &&
            <p>This should show and hide</p>
          }
          <button onClick={this.toggle}>Show / Hide</button>
        </div>
      );
    }
  }
  
  class Welcome extends Component {
    // the const is to avoid having to write out in full
    render(){
      const { text } = this.props;
      return (
        <h1 className="App-title">{text}</h1>
              )
            }
  }
  
  
  export default App;
  



  // ====================NEW=============





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
