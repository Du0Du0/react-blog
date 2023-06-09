import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import App from '../App.js';
import './detail.css';
import HorizonLine from '../HorizontalLine.js';
import './write.js';
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Detail(props) {
  const { listTitle, likeBtn, setlistTitle, setlikeBtn, editorData, setEditorData, selectedTopic, setSelectedTopic, value, setValues} = props;
  const navigate = useNavigate();


  const [timeAgo, setTimeAgo] = useState(['3시간 전', '1일 전', '30분 전']);
  const [tags, setTags] = useState([
    ['React', 'Javascript', 'Vue',],
    ['React', 'Javascript', 'Vue',],
    ['React', 'Javascript', 'Vue',]
  ]);

  console.log('editorData:', editorData);
  console.log(editorData)

  console.log('selectedTopic:', selectedTopic);
    console.log('setSelectedTopic:', setSelectedTopic);

    console.log('tags:', tags);
    console.log('setTags:', setTags);

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
  <HorizonLine text1={'프론트엔드 / '} text2={selectedTopic[props.title]} color={'rgb(188, 188, 188)'} /><FontAwesomeIcon icon={faBookmark} className='detail-bookmark' onClick={ () => { }} /> 
  <div ></div>
      <h4 className='detail-title'>{listTitle[props.title]}</h4>
      <p className='detail-date'>{timeAgo[props.title]}</p>
      <p className='detail-content'>{editorData[props.title]}</p>
     <div className='detail-tags-container'>{tags.map((tags, i) => (
    <div className="detail-tag-item" style={{marginLeft: '8px'}}>
     {'#'+tags[props.title]}
    </div>
  ))}
  </div> 
      <div className='detail-btn-container'><button className='detail-update'>글수정</button>&nbsp;&nbsp;&nbsp;<button className='detail-delete' onClick={handleClick}>삭제</button></div>
      </div>
  );
}

export default Detail;
