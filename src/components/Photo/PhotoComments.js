import React from "react";
import UserContext from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import "./PhotoComments.css";

const PhotoComments = ({ id, comments }) => {
  const [comment, setComment] = React.useState(() => comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  })

  return (
    <div className="PhotoCommentsComponent">
      <ul ref={commentsSection}>
        {comment.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComment} />}
    </div>
  );
};

export default PhotoComments;
