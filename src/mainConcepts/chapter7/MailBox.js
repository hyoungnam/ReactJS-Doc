import React from 'react'

function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h3>Hello!</h3>
      {unreadMessages.length > 0 &&
        <h3>
          You have {unreadMessages.length} unread messages.
        </h3>
      }
    </div>
  );
}
export default MailBox;