import React from 'react'
import UserInfo from './CommentUserInfo';
//Extracting Components

// Props are Read-Only
// All React components must act like pure functions with respect to their props.

function Comment(props) {
  return (
    
    <div className="Comment">
      
      {/* <div className="UserInfo"> */}
        {/* <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
        {/* <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div> */}
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}