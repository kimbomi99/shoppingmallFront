import React, { useRef, useEffect, useState } from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
  }, []);
  return [data, loading];
}

function DetailNotice() {
  const paths = window.location.href.split('/');
  const url = '/' + paths[paths.length - 2] + '/' + paths[paths.length - 1];
  const [data, loading] = useFetch(url);
  const navigate = useNavigate();
  const title = useRef();
  const notice = useRef();
  

  if (loading) {
    return (
      <div>loading</div>
    )
  } else{
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td><input ref={title} defaultValue={data.title} /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea rows='5' cols='60' ref={notice} defaultValue={data.notice} /></td>
            </tr>
            <tr>
            <td>
                <button onClick={() => navigate('/notice')}>목록</button>
            </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default DetailNotice;