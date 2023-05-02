import './App.css';
import {useState} from 'react';

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.listTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

function App() {
  let post = '리액트 스터디';
  let [listTitle,setlistTitle] = useState(['리액트는 왜 쓸까?','jsx는 무엇일까?', 'state는 언제쓸까?']);
  let [likeBtn, setlikeBtn] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
    <div className="nav">
      <h4 style={ {color : '#e9e9e9', fontSize : '16px'} }>Du0Du0 developer blog</h4>
      </div>



    {/* 글목록 제목 바꾸는 버튼 */}
    <button onClick={() => {
      let copy = [...listTitle];
      copy[0] = '자바스크립트는 왜 쓸까?';
      setlistTitle(copy);
    }}>글수정</button>

    {/* 글목록 오름차순으로 정렬하는 버튼 */}
    <button onClick={() => {
      let arr = [...listTitle].sort();
      setlistTitle(arr);
    }}>정렬버튼</button>

{
      listTitle.map((a, i)=>{
        return(
          <div className="list">
     <h4 onClick={()=> {setModal(!modal); setTitle(i);}}>{listTitle[i]}<span onClick={() => {
      let likeBtnArr = [...likeBtn];
      likeBtnArr[i] = likeBtnArr[i]+1;
      setlikeBtn(likeBtnArr);
     }}>👍</span>{likeBtn[i]}</h4>
     <p>2023-05-01</p>
      </div>
        )
      })
    }

    {
      modal == true ? <Modal listTitle={listTitle} title={title}/> : null
    }
    </div>
  );
}

export default App;
