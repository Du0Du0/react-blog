import './App.css'
import {useState} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import HorizonLine from './HorizontalLine.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import Write from './routes/write.js'
import Detail from './routes/detail.js'
import CurrentTime from './routes/detail.js'

// function Modal(props) {
//   return (
//     <div className='modal'>
//       <h4>{props.listTitle[props.title]}</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//       <button>글수정</button>
//     </div>
//   )
// }


function ArrayBtn(props) {
  const {listTitle, likeBtn, setlistTitle, setlikeBtn} = props;


  return (
    <>
      {/* 정렬종류 select 버튼 */}
         <div className='array-select-btn'>
   
         {/* 오름차순으로 정렬하는 버튼 */}
         <div onClick={() => {
          const data =  props.listTitle.map((a, i) => {
             return {'listTitle' : props.listTitle[i], 'likeBtn':  props.likeBtn[i] }
           });
         
           let ascArr = data.sort((a,b)=> a.listTitle.localeCompare(b.listTitle));
           let sortedTitle =  ascArr.map(item => item.listTitle);
           let sortedLike =  ascArr.map(item => item.likeBtn);
           setlistTitle(sortedTitle);
           setlikeBtn(sortedLike);
         }}>
         <p>오름차순</p></div>
         
         
         {/* 내림차순으로 정렬하는 버튼 */}
         <div onClick={()=> {
         const data =  props.listTitle.map((a, i) => {
           return {'listTitle' : props.listTitle[i], 'likeBtn':  props.likeBtn[i] }
         });
   
         let descArr = data.sort((a,b)=> a.listTitle.localeCompare(b.listTitle)).reverse();
         let sortedTitle =  descArr.map(item => item.listTitle);
         let sortedLike =  descArr.map(item => item.likeBtn);
         setlistTitle(sortedTitle);
         setlikeBtn(sortedLike);
         }}><p>내림차순</p></div>
   
         {/* 좋아요순으로 정렬하는 버튼 */}
         <div onClick={()=> {
         
         const data = props.listTitle.map((a , i) => {
           return { 'listTitle':   props.listTitle[i], 'likeBtn':  props.likeBtn[i] };
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
         </>
  )
}


function App() {

  let post = '리액트 스터디';
  let [listTitle,setlistTitle] = useState(['가나초콜릿은 왜 맛있지','나비는 무엇일까?', '다람쥐는 다람쥐']);
  let [likeBtn, setlikeBtn] = useState([0,0,0]);
  const [editorData, setEditorData] = useState(['좋아','좋아2','좋아3']);
  const [selectedTopic, setSelectedTopic] = useState(['React','Javascript','Vue']);

  let [title, setTitle] = useState(0);
  let [arrBtn, setArrBtn] = useState(false);
  let Navigate = useNavigate();
  let [searched, setSearched] = useState(['']);

  let [inputValue, setInputValue] = useState('');
  let [inputContent, setInputContent] = useState('');
  const [value, setValue] = useState([]);

  let [modal,setModal] = useState(false);
  let [searchWord, setSearchWord] = useState([]);

  const [tags, setTags] = useState([
    ['React', 'Javascript', 'Vue',],
    ['React', 'Javascript', 'Vue',],
    ['React', 'Javascript', 'Vue',]
  ]);

  console.log('editorData:', editorData);
  console.log(editorData)

  function Modal(props) {
    return (
      <div className='modal'>
    
        <p><span className='search-result-title'>'{props.searchWord}'</span>와(과) 일치하는 검색결과</p>&nbsp;&nbsp;&nbsp;
        <p>({props.searched.length}건)</p>
      </div>
    )
  }
 
  return (
    <div className="App">
    <div className="nav">
      <h4 Link to="/" style={ {color : '#e9e9e9', fontSize : '16px', paddingLeft: '20px'} }>Du0Du0 developer blog</h4>

    {/* 네비게이션 카테고리 */}
      <ul className='nav-menu'>
    <div><li onClick={()=> {{Navigate('/')}}}>프론트엔드</li></div>
    <div><li >백엔드</li></div>
    <div><li>CS</li></div>
    <div><li>플레이라운드</li></div>
    <div><li>공지</li></div>
    </ul>

    {/* 네비게이션 북마크, 다크모드, 알림버튼 */}
    <div className='nav-notice-container'>
    <div ><FontAwesomeIcon icon={faBookmark} className='nav-bookmark' onClick={ () => { Navigate('/write') }} /> </div>
    <div><FontAwesomeIcon icon={faBell}  className='nav-darkMode'/></div>
<div ><FontAwesomeIcon icon={faToggleOff} className='nav-notice'/></div>
</div>
      </div>

      {/* 대문 */}
      <div className='show-list'>프론트엔드
    <p className='show-list-sub'>프론트엔드 관련 프로그래밍</p></div>




      <Routes>
      <Route path="/" element={
        <div>
 

    <div className='category-container'>
    <button className="write-Btn" onClick={ () => { Navigate('/write') }}>🖌 작성하기</button>
   
   <div className='category-list'>
    <Link to="/" className='link-page'>전체</Link>
    <Link to="/" className='link-page' >Css</Link>
    <Link to="/" className='link-page' >Javascript</Link>
    <Link to="/" className='link-page' > React</Link>
    <Link to="/" className='link-page' >Vue</Link>
    </div>

   {/*  버튼을 누르면 select버튼 나타났다 사라짐*/}
    <button className="arr-Btn"onClick={() => {setArrBtn(!arrBtn);}}
      >📌 정렬하기</button>
   </div>

  {/* 정렬 select 버튼 */}
{
    arrBtn == true? <ArrayBtn listTitle={listTitle} likeBtn={likeBtn} setlistTitle={setlistTitle} setlikeBtn={setlikeBtn}/> : null
}

<div className='search-container'>
<div className='reload-btn' onClick={() => {window.location.reload();}}><FontAwesomeIcon icon={faRotate} /></div>
<div className='search-btn'>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
  <input
    type='text'
    name='keyword'
    placeholder='블로그 내에서 검색'
    onChange={(e) => setSearchWord(e.target.value)}
    // 입력시킨 검색 단어와 일치하는 값 찾아주는 기능
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        const searchWord = e.target.value
        const newFilter = listTitle.filter(item => item.includes(searchWord))
        return setSearched(newFilter)
      }
      setModal(true) 
    }}
  />
</div>

{/* 총 리스트 갯수 표시하는 기능 */}
<div className='page-btn'><p>{listTitle.length}개의 글</p></div>
{
    modal == true ? <Modal searchWord={searchWord} setSearchWord={setSearchWord} searched ={searched} setSearched = {setSearched}/> : null
  }
</div>
{searched.length > 0 ? (
  listTitle.filter(title => title.includes(searched)).map((a, i) => {
    return (
      <div className="list" key={i}>
        <h4 onClick={() => { Navigate('/detail'); setTitle(i);}}>
          {a}
          <span onClick={(e) => {
            e.stopPropagation();
            let likeBtnArr = [...likeBtn];
            likeBtnArr[i] = likeBtnArr[i] + 1;
            setlikeBtn(likeBtnArr);
          }}>👍</span>
          {likeBtn[i]}
        </h4>
        <p>2023-01-20{CurrentTime}</p>
        <p className='listTitle-topic'>{selectedTopic[i]}</p>
        {tags.map((tags, i) => (
              <span className="listTile-tag-item" style={{marginLeft: '8px'}}>
                <span className="text">{'#'+tags[i]}</span>&nbsp;
  
              </span>
            ))}
      </div>
    );
  })
) : (
  listTitle.map((a, i) => {
    return (
      <div className="list" key={i}>
        <h4 onClick={() => { Navigate('/detail'); setTitle(i);}}>
          {a}
          <span onClick={(e) => {
            e.stopPropagation();
            let likeBtnArr = [...likeBtn];
            likeBtnArr[i] = likeBtnArr[i] + 1;
            setlikeBtn(likeBtnArr);
          }}>👍</span>
          {likeBtn[i]}
        </h4>
        <p>2023-01-20{CurrentTime}</p>
        <p className='listTitle-topic'>{selectedTopic(i)}</p>
        {tags.map((tags, i) => (
              <span className="tag-item" style={{marginLeft: '8px'}}>
                <span className="text" >{'#'+tags[i]}</span>&nbsp;
              </span>
            ))}
      </div>
    );
  })
)}




{/* 
       : (
   <div>
     {listTitle.length === 0 ? (
       alert('검색결과가 없습니다')
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
             <p>2023-01-20{CurrentTime}</p>
           </div>
         )
       })
     )}
   </div>
 ) */}
{/* 

{
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
        <p>2023-01-20{CurrentTime}</p>
      </div>
    )
  })
}  */}

  
    </div>
    
      }/>
      <Route path="/write" element={ <Write
        listTitle={listTitle}
        setlistTitle={setlistTitle}
        editorData= {editorData}
        setEditorData = {setEditorData}
        selectedTopic = {selectedTopic}
        setSelectedTopic = {setSelectedTopic}
      />
      }
            />
      <Route path="/detail" element={ <Detail
              listTitle={listTitle}
              likeBtn={likeBtn}
              setlistTitle={setlistTitle}
              setlikeBtn={setlikeBtn}
              title = {title}
              editorData= {editorData}
              setEditorData = {setEditorData}
              selectedTopic = {selectedTopic}
               setSelectedTopic = {setSelectedTopic}
               value = {value}
               setValue = {setValue}

              
              />
              }
            
          />
      <Route/>
      <Route/>
    </Routes>



   
    </div>
  );
}

export default App;
