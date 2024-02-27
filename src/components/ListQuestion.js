import React, { useRef, useState, useEffect } from 'react';
import './main.css';
import { useNavigate } from 'react-router';
import QuestionItem from './QuestionItem';

function ListQuestion() {
  const [items, setItems] = useState([]); 
  const navigate = useNavigate();
  const nickname = useRef();
  const title = useRef();
  const question = useRef();
  

  function getList(url) {
    fetch(url)
      .then(response => { return response.json(); })
      .then(data => { setItems(data); });
  }

  useEffect(() => { getList('/question'); }, []);

  return (
    <>
    <h2>문의하기</h2>

    <table>
        <tbody>
          <tr>
            <td>이름</td>
            <td><input ref={nickname} /></td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input ref={title} /></td>
          </tr>
          <tr>
            <td>문의내용</td>
            <td><textarea rows='20' cols='80' ref={question} /></td>
          </tr>
         
          <tr>
            <td colSpan='2' align='right'>
              <button type='button' onClick={() => {
                const form = new FormData();
                form.append('nickname', nickname.current.value);
                form.append('title', title.current.value);
                form.append('question', question.current.value);
                fetch('/insertQuestion', {
                  method: 'post',
                  encType: 'text/plain',
                  body: form
                }).then(() => {
                  navigate('/question');
                  window.location.reload();
                });
              }}>확인</button>
            </td>
          </tr>
        </tbody>
    </table>
  <br/><br/>



      등록된 문의사항: {items.length}
      <br /><br />

      <table>
        <th>목록</th>
        <tr><td>
          
        {items.map(
          ({ question_number, nickname, title, question }) => (
            <QuestionItem
              question_number={question_number}
              nickname={nickname}
              title={title}
              question={question}
              key={question_number}
            />
          )
        )}

        </td></tr>
        </table>

       

     
    </>
  );
};

export default ListQuestion;