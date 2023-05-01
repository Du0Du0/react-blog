import logo from './logo.svg';
import './App.css';

function App() {

  let post = '리액트 스터디';

  return (
    // class를 쓸 때는, className
    <div className="App">
    <div className="nav">
      {/* style을 넣을 땐 style={{key : 'value'}} object자료형같이 넣어야됨 */}
      <h4 style={ {color : '#e9e9e9', fontSize : '16px'} }>Du0Du0 developer blog</h4>
      </div>
      {/* 변수를 넣을 땐 {중괄호} */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
