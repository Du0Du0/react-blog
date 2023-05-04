import './write.css'
import {useState} from 'react';
import {Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function Write () {
    let Navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState(1);
    const [tags, setTags] = useState([]);

    function handleKeyDown (e) {
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value]);
        e.target.value = '';
    }

    function removeTags (index) {
        setTags(tags.filter((el, i) => i !== index ))
     }

    return (
      <>
        <div className="write-title-container">
          <div className="write-title">블로그 글쓰기</div>
          <button className="write-save-Btn" Link to="/">
            임시저장 | 0
          </button>
        </div>

        <div className="write-topic-container">
          <div className="write-topic-title">
            <label htmlFor="">토픽</label>
          </div>
          <div>
            <select
              className="write-topic-select"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              disabled={selectedTopic === "1"}
            >
              <option value="1" disabled>
                토픽을 선택해주세요.
              </option>
              <option value="2">Css</option>
              <option value="3">Javascript</option>
              <option value="4">React</option>
              <option value="5">Vue</option>
            </select>
          </div>
        </div>

        <div className="write-selectTitle-container">
          <label htmlFor="#" className="write-selectTitle">
            제목
          </label>
          <div>
            <input
              type="text"
              className="write-selectTitle-input"
              placeholder="제목을 입력해주세요."
            ></input>
          </div>
        </div>

        <div className="write-tag-container">
          <div className="write-tag-title">
            <label>
              태그 - <span>내용을 대표하는 태그 3개 정도 입력해주세요.</span>
            </label>
          </div>

          <div className="write-tag-box">
            {/* <div className='tag-item'>
<span className='text'>hello!</span>&nbsp;
<span className='close'> &times;</span>
        </div> */}
            {tags.map((tags, i) => (
              <div className="tag-item">
                <span className="text">{tags}</span>&nbsp;
                <span className="close" onClick={() => {removeTags(i)}}> &times;</span>
              </div>
            ))}
            <input
              type="text"
              className="tags-input"
              placeholder="태그를 입력해주세요."
              onKeyDown={handleKeyDown}
            ></input>
          </div>
        </div>

        <div className="write-textArea-container">
          <label htmlFor="#" className="write-selectTitle">
            본문
          </label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data="<p></p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </div>

        <div className="write-submit-container">
          <button type='submit'
            onClick={() => {
              if (
                window.confirm("취소하시면 작성중인 내용은 지워집니다.") == true
              ) {
                {
                  {
                    Navigate(-1);
                  }
                }
              } else if (false) return null;
            }}
            className="write-cancel-btn"
          >
            취소
          </button>
          <button className="write-submit-btn">등록</button>
        </div>
      </>
    );

    
}

export default Write;