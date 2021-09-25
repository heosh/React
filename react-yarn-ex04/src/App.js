import React, { Component } from 'react';
import './App.css';
import Hello from './Components/Hello';
import MyComponent from './Components/MyComponent';
import Profile from './Components/Profile';

const Cho = {
  name: '조아라',
  age: 20
}

const Joo = {
  name: '주진경',
  age: 19
}

function App() {
  return (
    <div>
      <p>Component</p>
      <Hello name='조아라'/>
      <MyComponent>리액트 컴포넌트 사이</MyComponent>
      <Profile data = {Cho} />
      <Profile data = {Joo}/>
    </div>
  );
}

export default App;
