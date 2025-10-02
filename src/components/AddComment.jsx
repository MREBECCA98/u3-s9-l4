import { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {};
  render() {
    return (
      <>
        <h5>Add Comment</h5>
        <InputGroup className="mb-3">
          <Form.Control
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            placeholder="comments"
            type="text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </>
    );
  }
}
export default AddComment;
