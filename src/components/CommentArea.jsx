import { Component } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentLis";
// 1-Fare la fetch dei commenti sull id del libro

class CommentArea extends Component {
  state = {
    comments: [],
    text: "",
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/asin").then((response) => {
      if (!response.ok) {
        throw new Error("err");
      } else {
        return response.json();
      }
    });
  }

  render() {
    return (
      <>
        <div>{this.props.asin}</div>
        <AddComment />
        <CommentList />
      </>
    );
  }
}
export default CommentArea;
