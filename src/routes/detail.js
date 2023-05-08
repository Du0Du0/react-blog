import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import App from '../App.js';
import './detail.css';
import HorizonLine from '../HorizontalLine.js';
import './write.js';

function CurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timestring = `${year}/${month}/${date} ${hours}:${minutes}`;
  return <span>{timestring}</span>;
}





function Detail(props) {
  const { listTitle, likeBtn, setlistTitle, setlikeBtn, editorData, setEditorData } = props;

  const navigate = useNavigate();

  console.log('editorData:', editorData);
  console.log(editorData)

  function handleClick() {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      const index = props.title;
      const copy = listTitle.filter((el, i) => i !== index);
      setlistTitle(copy);
      navigate('/');
    } else {
      return;
    }
  }

  return (
    <div>
      <HorizonLine text={'프론트엔드/토픽'} color={'rgb(188, 188, 188)'} />
      <h4 className='detail-title'>{listTitle[props.title]}</h4>
      <p onChange={()=> {CurrentTime()}}>날짜</p>







    
      <div>
        <p>
       
         {editorData[props.title]}
        </p>
          <button>글수정</button>
          <button onClick={handleClick}>삭제</button>
        </div>

    </div>
  
  );
}

export default Detail;
