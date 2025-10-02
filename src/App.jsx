import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import Fantasy from "./components/books/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" />
      <Container>
        <Welcome />
        <BookList books={Fantasy} />
        {/* <SingleBook img={Fantasy[0].img} title={Fantasy[0].title} category={Fantasy[0].category} price={Fantasy[0].price} /> */}
        {/* <AllTheBooks /> */}
      </Container>
      <MyFooter titleFooter="EpiBooks" email="Email: info@epicode.com" telefono="3488003680" ig="EpicodeBooks" linkedin="EpicodeLk" copy="© 2025 EpiBooks" />
    </>
  );
}

export default App;
