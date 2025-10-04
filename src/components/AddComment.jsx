import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      body: JSON.stringify({ comment: this.state.comment, rate: this.state.rate, elementId: this.props.asin }),
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlODc0OTk2MDFiZjAwMTViNGE3NDQiLCJpYXQiOjE3NTk0MTQwODksImV4cCI6MTc2MDYyMzY4OX0.rXclr1qtUOdWlWKOeO7WRDK64xQzUDq89avLybE51ic",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      this.props.fetchComments();
    }
  };

  render() {
    return (
      <div>
        <p className="fw-bold">Add Comment {this.props.asin}</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="inserisci il tuo commento"
              value={this.state.comment}
              onChange={(e) => this.setState({ comment: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rate">
            <Form.Select value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
              <option value="1">uno</option>
              <option value="2">due</option>
              <option value="3">tre</option>
              <option value="4">quattro</option>
              <option value="5">cinque</option>
            </Form.Select>
          </Form.Group>
          <button type="submit">invia</button>
        </Form>
      </div>
    );
  }
}
export default AddComment;
