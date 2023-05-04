import {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import App from '../App.js'


function Detail (props) {
  const { listTitle, likeBtn, setlistTitle, setlikeBtn, title } = props;

  return (
    <div>
      <h4>{listTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

  export default Detail;