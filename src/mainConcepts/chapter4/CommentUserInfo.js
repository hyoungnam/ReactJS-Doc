import React from 'react'
import Avatar from './CommentAvatar';

function UserInfo() {
  return (
    <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
  );
}

export default UserInfo;