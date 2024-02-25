import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

function NoticeItem({ notice_number, title }) {
  let loading = false;
  if (loading) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div style={{ margin: '5px' }}>
        <Link to={`/detailNotice/${notice_number}`}>
          {title}
        </Link>
      
        <br /><br />
      </div>
    )
  }
}

export default NoticeItem;