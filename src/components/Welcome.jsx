import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <>
      <Alert className="text-black" variant="warning" dismissible>
        Benvenuto su EpiBooks!
        <h4>Il tuo shop di libri online</h4>
      </Alert>
    </>
  );
};
export default Welcome;
