const MyFooter = function (props) {
  return (
    <footer className="bg-body-secondary">
      <div className="container ">
        <div className="row ">
          <div className="col-12">
            <p className="text-black fw-bold text-center mt-3">
              {props.titleFooter} <i className="bi bi-book fs-3 ms-2 "></i>
            </p>
          </div>
          <div className="col-8">
            <h3 className="mb-3">CONTATTI</h3>
            <p>{props.email}</p>
            <p>{props.telefono}</p>
          </div>
          <div className="col-4">
            <h3 className="mb-3">SOCIAL</h3>
            <p>
              <a href="#" className="text-black text-decoration-none">
                <i className="bi bi-instagram"> {props.ig}</i>
              </a>
            </p>
            <p>
              <a href="#" className="text-black text-decoration-none">
                <i className="bi bi-linkedin me-1"></i>
                {props.linkedin}
              </a>
            </p>
          </div>
          <div className="col-12 text-center mt-3">
            <p>{props.copy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default MyFooter;
