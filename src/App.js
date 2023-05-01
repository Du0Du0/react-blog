import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '리액트 스터디';
  let [listTitle,setlistTitle] = useState('리액트는 왜 쓸까?');
  

  return (
    <div className="App">
    <div className="nav">
      <h4 style={ {color : '#e9e9e9', fontSize : '16px'} }>Du0Du0 developer blog</h4>
      </div>
      <div className="list">
     <h4>{listTitle}</h4>
     <p>2023-05-01</p>
      </div>
    </div>
  );
}

export default App;
