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
  let [listTitle,setlistTitle] = useState(['ㄷ액트는 왜 쓸까?','ㄴsx는 무엇일까?', 'ㄱtate는 언제쓸까?']);
  let [likeBtn, setlikeBtn] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [value,setValue] = useState('');

  return (
    <div className="App">
    <div className="nav">
      <h4 style={ {color : '#e9e9e9', fontSize : '16px'} }>Du0Du0 developer blog</h4>
      </div>

    <div className='show-list'>글 목록
    <p className='show-list-sub'>블로그 기록하는 곳입니다.</p></div>

    <div className='btn-container'>
    <button className="write-Btn">🖌 작성하기</button>&nbsp;&nbsp;&nbsp;
   
    {/* 정렬종류 select 버튼 */}
    <button className="arr-Btn"onClick={() => {}}
   >📌 정렬하기</button>
</div>

      <div className='array-select-btn'>

      {/* 오름차순으로 정렬하는 버튼 */}
      <div onClick={() => {
       const data = listTitle.map((a, i) => {
          return {'listTitle' : listTitle[i], 'likeBtn': likeBtn[i] }
        });
      
        let ascArr = data.sort((a,b)=> a.listTitle.localeCompare(b.listTitle));
        let sortedTitle =  ascArr.map(item => item.listTitle);
        let sortedLike =  ascArr.map(item => item.likeBtn);
        setlistTitle(sortedTitle);
        setlikeBtn(sortedLike);
      }}>
      <p>오름차순</p></div>
      
      {/* TODO. 내림차순 좋아요랑 동기화해야됨 */}
      {/* 내림차순으로 정렬하는 버튼 */}
      <div onClick={()=> {
        let descArr = [...listTitle].reverse();
        setlistTitle(descArr);
      }}><p>내림차순</p></div>

      {/* 좋아요순으로 정렬하는 버튼 */}
      <div onClick={()=> {
      
      const data = listTitle.map((a , i) => {
        return { 'listTitle':  listTitle[i], 'likeBtn': likeBtn[i] };
      });

        let likeArr = data.sort((a,b)=> b.likeBtn- a.likeBtn);
        let sortedTitle =  likeArr.map(item => item.listTitle);
        let sortedLike =  likeArr.map(item => item.likeBtn);

       setlistTitle(sortedTitle);
       setlikeBtn(sortedLike);
      }}
      ><p>추천순</p></div>
      <div><p>댓글순</p></div>
      <div><p>조회순</p></div>
      </div>

{
      listTitle.map((a, i)=>{
        return(
          <div className="list">
     <h4 onClick={()=> {setModal(!modal); setTitle(i);}}>{listTitle[i]}
     <span onClick={(e) => {
      e.stopPropagation();
      let likeBtnArr = [...likeBtn];
      likeBtnArr[i] = likeBtnArr[i]+1;
      setlikeBtn(likeBtnArr);
     }}>👍</span>{likeBtn[i]}</h4>
     <p>2023-05-01</p>
      </div>
        )
      })
    }

    <input onChange={(e)=> setValue(e.target.value)
    }/>


    {
      modal == true ? <Modal listTitle={listTitle} title={title}/> : null
    }
    </div>
  );
}

export default App;
