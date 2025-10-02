import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = function (props) {
  return (
    <div>
      <p className="fw-bold">Commenti</p>
      <ListGroup>
        {props.comment.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </ListGroup>
    </div>
  );
};
export default CommentList;
