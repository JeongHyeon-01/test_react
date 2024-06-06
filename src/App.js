import './App.css';
import { useState } from 'react';
function App() {
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [titleIdx, setTitleIdx] = useState(0);
  const [likeCount, setLikeCount] = useState([0,0,0]);
  const [modal, setModal] = useState(false)
  let [Ininput, setIninput] = useState('')
  function Modal(props) {
    return (
      <div className='modal'>
        <h4>{props.title[props.idx]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
         onClick={()=>{
          let copy = [...title]
          copy[0] = '여자코트추천'
          setTitle(copy)
         }}
        >글수정</button>
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
                setModal(modal === true ? false : true );
                setTitleIdx(i);
              }}>
                { title[i] }
              <span
              onClick={(e)=>{
                e.stopPropagation();
                let copy = [...likeCount];
                  copy[i] =  copy[i] +1;
              setLikeCount(copy) 
              }}>
              👍 {likeCount[i]}
              </span>
              <button 
                onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...title]
                  copy.splice(i,1)
                  setTitle(copy)
                }}
              >삭제</button>
            </h4>
            <p>2월 18일 발행</p>
          </div>
        )
      })
     }
      <input onChange={(e)=>{
        setIninput(e.target.value)
      }}/>
      <button onClick={()=>{
        let copy = [...title]
        copy.unshift(Ininput)
        setTitle(copy)
      }}> 추가하기 </button>
     {  
      modal === true ?  <Modal title={title} idx={titleIdx} /> : null  
     }
    </div>
  );
}

export default App;
