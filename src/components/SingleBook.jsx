import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card className="m-1" style={{ border: this.state.selected ? "3px solid red" : "none" }}>
        <Card.Img onClick={() => this.setState({ selected: !this.state.selected })} className="book-img " variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
          <Card.Text>{this.props.book.price} €</Card.Text>
          <Card.Text>{this.props.book.asin} </Card.Text>
          <Button variant="secondary">
            <i className="bi bi-bag-check me-3"></i>
            {this.props.book.price} €
          </Button>
        </Card.Body>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Card>
    );
  }
}
export default SingleBook;
