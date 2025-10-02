import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Books from "./books/fantasy.json";
import History from "./books/history.json";
import Horror from "./books/horror.json";
import Romance from "./books/romance.json";
import Scifi from "./books/scifi.json";

const AllTheBooks = function () {
  return (
    <main>
      <div className="container">
        <h3 className="text-center my-3 fw-bold">FANTASY</h3>
        <div className="row">
          {Books.map((book) => (
            <div className="col-6 col-md-3" key={book.asin}>
              <Card>
                <Card.Img src={book.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {book.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* history */}
      <div className="container">
        <h3 className="text-center my-3 fw-bold">HISTORY</h3>
        <div className="row">
          {History.map((history) => (
            <div className="col-6 col-md-3" key={history.asin}>
              <Card>
                <Card.Img src={history.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{history.title}</Card.Title>
                  <Card.Text>{history.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {history.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* horror */}
      <div className="container">
        <h3 className="text-center my-3 fw-bold">HORROR</h3>
        <div className="row">
          {Horror.map((horror) => (
            <div className="col-6 col-md-3" key={horror.asin}>
              <Card>
                <Card.Img src={horror.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{horror.title}</Card.Title>
                  <Card.Text>{horror.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {horror.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* romance */}
      <div className="container">
        <h3 className="text-center my-3 fw-bold">ROMANCE</h3>
        <div className="row">
          {Romance.map((romance) => (
            <div className="col-6 col-md-3" key={romance.asin}>
              <Card>
                <Card.Img src={romance.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{romance.title}</Card.Title>
                  <Card.Text>{romance.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {romance.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* scifi */}
      <div className="container">
        <h3 className="text-center my-3 fw-bold">SCIFI</h3>
        <div className="row">
          {Scifi.map((scifi) => (
            <div className="col-6 col-md-3" key={scifi.asin}>
              <Card>
                <Card.Img src={scifi.img} className="book-img" />
                <Card.Body>
                  <Card.Title className="text-truncate">{scifi.title}</Card.Title>
                  <Card.Text>{scifi.category}</Card.Text>
                  <Button variant="secondary">
                    <i className="bi bi-bag-check me-3"></i>
                    {scifi.price} euro
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default AllTheBooks;
