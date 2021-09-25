import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title = '사이트 타이틀입니다.'/>
        <h1>Component</h1>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">

    </div>
  );
}
*/
export default App;
