import {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import App from '../App.js'


function Detail (props) {
  const { listTitle, likeBtn, setlistTitle, setlikeBtn, title } = props;
  let Navigate = useNavigate();

function handleClick() {
    const result = window.confirm("정말로 삭제하시겠습니까?");
  if (result) {
    const index = props.title;
    const copy = listTitle.filter((el, i) => i !== index);
    setlistTitle(copy); 
    Navigate('/');
  } else {
    return;
  }
}

  return (
    <div>
      <h4>{listTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
      <button onClick={handleClick}>삭제</button>
    </div>
  );
}

  export default Detail;