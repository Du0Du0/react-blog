import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Search(props) {

    const {likeBtn,  setlikeBtn, editorData, setEditorData, title, setTitle, listTitle,setlistTitle } = props;
    const [searched, setSearched] = useState([]);
    const Navigate = useNavigate();




    return (
<>
<div className='search-btn'>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
  <input
    type='text'
    name='keyword'
    placeholder='블로그 내에서 검색'
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const newFilter = listTitle.filter(item => item.includes(e.target.value))
        setSearched(newFilter)

          }
      }
   
    }
  />
</div>




{searched.length >= 0 ? (
  searched.map((a, i) => {
    return (
      <div className="list" key={i}>
        <h4 onClick={() => { Navigate('/detail'); setTitle(i);}}>
          {searched[i]}
          <span onClick={(e) => {
            e.stopPropagation();
            let likeBtnArr = [...likeBtn];
            likeBtnArr[i] = likeBtnArr[i] + 1;
            setlikeBtn(likeBtnArr);
          }}>👍</span>
          {likeBtn[i]}
        </h4>
        <p>2023-01-20</p>
      </div>
    )
  })
) : (
  listTitle.map((a, i) => {
    return (
      <div className="list" key={i}>
        <h4 onClick={() => { Navigate('/detail'); setTitle(i);}}>
          {listTitle[i]}
          <span onClick={(e) => {
            e.stopPropagation();
            let likeBtnArr = [...likeBtn];
            likeBtnArr[i] = likeBtnArr[i] + 1;
            setlikeBtn(likeBtnArr);
          }}>👍</span>
          {likeBtn[i]}
        </h4>
        <p>2023-01-20</p>
      </div>
    )
  })
)}
</>





    )
}

export default Search;