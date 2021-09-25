import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = "React"
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '16px'
  }
  return (
    <Fragment>  {/* <>도 가능 */}
      <div 
        style={style} // 이 위치도 주석 가능
      >
        {name==="react"  // false
            ?(<h1>{name} 안녕!</h1>)
            :(<h1>리액트가 아닙니다</h1>)
        }
        <h2>잘 작동하니</h2>
        <input></input>
      </div>
    </Fragment>
  );
}

export default App;
