import './App.css';
import { useState } from 'react';
function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [likeCount, setLikeCount] = useState([0,0,0]);
  const [modal, setModal] = useState(false)
  
  function Modal() {
    return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

  return (
    <div className="App">
     <div className="black-nav">
      <h4>ReactBlog</h4>
      <div className='btn'>
        <span
          onClick={()=>{
            let copy = [...title]
            copy = copy.sort()
            setTitle(copy)
          }}
        >
          💫
        </span>
      </div>
     </div>
     {
      title.map(function(a, i){
        return (
          <div className='list' key={i}>
            <h4 
            onClick={()=>{
              let copy = [...likeCount];
              copy[i] =  copy[i] +1;
              setLikeCount(copy) 
              }}>
                { title[i] }
              <span>
              👍 {likeCount[i]}
              </span>
            </h4>
            <p>2월 18일 발행</p>
          </div>
        )
      })
     }
     {/* <div className='list'>
      <h4
        onClick={()=>{
          setModal(!modal)
        }}
      >{title[0]}
        <span
          onClick={()=>{
            setLikeCount(likeCount+1)
          }}
        >
            👍
        </span>
        { likeCount }
        <span
          onClick={()=>{
            let copy = [...title];
            console.log(title)
            copy[0] = '여자 코트 추천'
            setTitle(copy)
          }}
        >
           ♀︎
        </span>
      </h4>
      <p>2월 17일 발행</p>
     </div>
     <div className='list'>
      <h4>{title[1]}
        <span
          onClick={()=>{
            setLikeCount(likeCount+1)
          }}
        >
            👍
        </span>
        { likeCount }
      </h4>
      <p>2월 17일 발행</p>
     </div>
     <div className='list'>
      <h4>{title[2]}
        <span
          onClick={()=>{
            setLikeCount(likeCount+1)
          }}
        >
            👍
        </span>
        { likeCount }
      </h4>
      <p>2월 17일 발행</p>
     </div> */}
     {
      modal == false ?  null : <Modal/> 
     }
    </div>
  );
}

export default App;
