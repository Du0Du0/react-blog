import {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import App from '../App.js'
import './detail.css'
import HorizonLine from '../HorizontalLine.js'
import './write.js'

function Detail (props) {
  const { listTitle, likeBtn, setlistTitle, setlikeBtn, editorData, setEditorData} = props;
  let Navigate = useNavigate();

  console.log('editorData:', editorData);
  console.log(editorData)
  

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
       <HorizonLine text={'프론트엔드/토픽'} color={'rgb(188, 188, 188)'} />

      <h4 className='detail-title'>{listTitle[props.title]}</h4>
      <p>날짜</p>
      <p >{props.editorData ? <p>{props.editorData}</p> : <p>No data available</p>}
</p>
      <button>글수정</button>
      
      <button onClick={handleClick}>삭제</button>
    </div>
  );
}

  export default Detail;