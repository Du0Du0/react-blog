
import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"





function Write () {
    return (
      <>
        <div className="write-title-container">
        <h4>블로그 글쓰기</h4>
          <p>빙우님 오늘 하루도 블로그에 기록하세요.</p>

          <button className="save-Btn" Link to="/">
            🖌 임시저장
          </button>
          </div>

        <label htmlFor="">토픽</label>
        <input type="file" id="file" />

        <label htmlFor="title">제목</label>
        <input type="text" id="title" />

        <label htmlFor="tag">태그</label>
        <input type="file" id="tag" />

        <label htmlFor="textarea">본문</label>
        <input type="textarea" id="textarea" />

        <button>취소</button>
        <button>등록</button>
      </>
    );
}

export default Write;