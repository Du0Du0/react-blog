import './write.css'
import {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"

const HorizonLine = ({ color }) => (
    <hr style = {{
        
        backgroundColor: color,
        height: 1
       
    }}
    />
          )    


function Write () {
    

    return (
      <>
        <div className="write-title-container">
        <div className='write-title'>블로그 글쓰기</div>
        <button className="write-save-Btn" Link to="/">
             임시저장 | 0
          </button>
          </div>

<div className='write-topic-container'>
<div className='write-topic-title'><label htmlFor="">토픽</label></div>
       <div><select className="write-topic-select" value={'4'}>
       <option value="1" >토픽을 선택해주세요.</option>
  <option value="2">Css</option>
  <option value="3">Javascript</option>
  <option value="4">React</option>
  <option value="5">Vue</option>
</select>
       </div> 
</div>



<div className='write-selectTitle-container'><label htmlFor="#" className='write-selectTitle'>제목</label>
<div><input type="text" className='write-selectTitle-input'placeholder='제목을 입력해주세요.'></input></div>
</div> 


<div className='write-tag-container'>
<div className='write-topic-title'><label htmlFor="">태그 - <span>내용을 대표하는 태그 3개 정도 입력해주세요.</span></label></div>
       <div><select className="write-topic-select" value={'4'}>
       <option value="1" >태그를 선택해주세요.</option>
  <option value="2">Css</option>
  <option value="3">Javascript</option>
  <option value="4">React</option>
  <option value="5">Vue</option>
</select>
       </div> 
</div>


<div className='write-textArea-container'><label htmlFor="#" className='write-selectTitle'>본문</label>
<div><textarea type="text" className='write-selectTitle-input'placeholder='내용을 입력해주세요.'></textarea></div>
</div> 

<div className='write-submit-container'>
<button className='write-cancel-btn'>취소</button>
<button className='write-submit-btn'>등록</button>
</div>
   </>
);
          

}

export default Write;