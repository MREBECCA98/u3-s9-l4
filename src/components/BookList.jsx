import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Container className=" mt-3">
          <Row>
            <Col className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div className=" row mt-3">
            {this.props.books
              .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
              .map((b) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={b.asin}>
                  <SingleBook book={b} />
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
export default BookList;
