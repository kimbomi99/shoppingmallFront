import React from 'react';
import './main.css'
import { useNavigate } from 'react-router-dom';

function QuestionItem({ question_number, nickname, title }) {
  const navigate = useNavigate();
  let loading = false;
  if (loading) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div style={{ margin: '5px' }}>
       
        작성자: {nickname} - {title}

        <button type='button' onClick={() => {
                  if(window.confirm('삭제할까요?')){
                    fetch(`/deleteQuestion?question_number=${question_number}`, { method: 'delete' })
                    .then(() => {navigate('/question');
                    window.location.reload(); });
                  }
                }}>삭제</button>
                &nbsp;
      
        <br /><br />
      </div>
    )
  }
}

export default QuestionItem;