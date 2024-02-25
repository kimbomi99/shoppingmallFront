import React, { useRef, useState, useEffect } from 'react';
import './main.css';
import NoticeItem from './NoticeItem';
import { useNavigate } from 'react-router';

function ListNotice() {
  const [items, setItems] = useState([]); 
  const navigate = useNavigate();
  const title=useRef();

  function getList(url) {
    fetch(url)
      .then(response => { return response.json(); })
      .then(data => { setItems(data); });
  }

  useEffect(() => { getList('/notice'); }, []);

  return (
    <>
    <h2>공지사항</h2>
      등록된 공지사항: {items.length}
      <br /><br />

      제목: <input name='title' ref={title} />
      <button type='button' onClick={() => {
        getList(`/notice?title=${title.current.value}`)
      }}>조회</button>
      <br/><br/>

      <button onClick={() => navigate('/writeNotice')}>공지사항 등록</button>

      <table>
        <th>목록</th>
        <tr><td>
          
        {items.map(
          ({ notice_number, title, notice }) => (
            <NoticeItem
              notice_number={notice_number}
              title={title}
              notice={notice}
              key={notice_number}
            />
          )
        )}

        </td></tr>
        </table>

       

     
    </>
  );
};

export default ListNotice;