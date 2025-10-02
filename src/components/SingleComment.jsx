import { ListGroupItem } from "react-bootstrap";

const SingleComment = function ({ comment }) {
  return <ListGroupItem>{comment.comment} </ListGroupItem>;
};
export default SingleComment;
