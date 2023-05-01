import './App.css';
import {useState} from 'react';

function App() {

  let post = '리액트 스터디';
  let [listTitle,setlistTitle] = useState(['리액트는 왜 쓸까?','jsx는 무엇일까?', 'state는 언제쓸까?']);
  let [likeBtn, setlikeBtn] = useState(0);


  return (
    <div className="App">
    <div className="nav">
      <h4 style={ {color : '#e9e9e9', fontSize : '16px'} }>Du0Du0 developer blog</h4>
      </div>
      <div className="list">
     <h4>{listTitle[0]}<span onClick={() => {setlikeBtn(likeBtn+1)}}>👍</span>{likeBtn}</h4>
     <p>2023-05-01</p>
      </div>
      <div className="list">
     <h4>{listTitle[1]}</h4>
     <p>2023-05-01</p>
      </div>
      <div className="list">
     <h4>{listTitle[2]}</h4>
     <p>2023-05-01</p>
      </div>
    </div>
  );
}

export default App;
