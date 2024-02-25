import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import './main.css';

function WriteNotice() {
  const navigate = useNavigate();
  const title = useRef();
  const notice = useRef();

  return (
    <>
      <h2>공지사항 등록</h2>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td><input ref={title} /></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea rows='5' cols='60' ref={notice} /></td>
          </tr>
         
          <tr>
            <td colSpan='2' align='center'>
              <button type='button' onClick={() => {
                const form = new FormData();
                form.append('title', title.current.value);
                form.append('notice', notice.current.value);
                fetch('/insertNotice', {
                  method: 'post',
                  encType: 'text/plain',
                  body: form
                }).then(() => {
                  navigate('/notice');
                });
              }}>확인</button>
              <button onClick={() => navigate('/notice')}>목록</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WriteNotice;