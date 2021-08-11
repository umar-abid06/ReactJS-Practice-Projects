import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <h4>Are you sure you want to remove Affu's comment?</h4>
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
        name="Umar"
        metadata="Today at 2PM"
        comment="Hello guyz!"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail
        name="Ammar"
        metadata="Today at 3PM"
        comment="Hi there"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        name="Affu"
        metadata="Today at 4PM"
        comment="Bye Bye"
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
     
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
