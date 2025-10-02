import Nav from "react-bootstrap/Nav";

const MyNav = function (props) {
  return (
    <div>
      <Nav className="bg-body-secondary d-flex align-items-center" activeKey="#">
        <Nav.Item>
          <Nav.Link className="text-black fw-bold" href="#">
            {props.title} <i className="bi bi-book fs-3 ms-2 "></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ms-auto">
          <Nav.Link className="text-black">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-black">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-black">Browse</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default MyNav;
