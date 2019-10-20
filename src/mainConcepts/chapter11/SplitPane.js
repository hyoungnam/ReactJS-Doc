import React from 'react'

function Contacts() {
  return <h3>SplitLeft - Contacts</h3>;
}

function Chat() {
  return <h3>SplitRight - Chat</h3>;
}

function SplitPaneDetail(props) {
  return (
    <div className="SplitPaneDetail">
      <div className="SplitPaneDetail-left">
        {props.left}
      </div>
      <div className="SplitPaneDetail-right">
        {props.right}
      </div>
    </div>
  );
}

function SplitPane() {
  return (
    <SplitPaneDetail
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

export default SplitPane;