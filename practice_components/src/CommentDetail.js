import React from "react";


function CommentDetail({ name, metadata, comment, avatar}) {
  return (
   
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="avatar" src={avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span>{metadata}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
  );
}

export default CommentDetail;
