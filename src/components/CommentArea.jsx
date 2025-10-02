import { Component } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentLis";
// 1-Fare la fetch dei commenti sull id del libro

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODc0OTk2MDFiZjAwMTViNGE3NDQiLCJpYXQiOjE3NTk0MTQwODksImV4cCI6MTc2MDYyMzY4OX0.rXclr1qtUOdWlWKOeO7WRDK64xQzUDq89avLybE51ic",
        },
      });

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments: comments }); //inseriamo i commenti all'interno dell array (state-comments)
      } else {
        console.error("Errore nella fetch: " + response.status);
      }
    } catch (error) {
      console.error("Errore di rete: ", error);
    }
  };

  componentDidMount() {
    this.fetchComment(); //chiamiamo la funzione-fetch GET
  }

  render() {
    return (
      <>
        <h5 className="fw-bold">Comment Area</h5>
        <div>{this.props.asin}</div>
        <AddComment asin={this.props.asin} />
        <CommentList comment={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
