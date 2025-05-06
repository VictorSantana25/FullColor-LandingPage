const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-5 bg-black">
  <div className="container px-3">
    <div className="row justify-content-between align-items-center gx-3 gy-3">
      <div className="col-12 col-md-auto text-center text-md-start">
        <p className="m-0 text-white small">
          Todos los derechos reservados. &copy; {currentYear}
        </p>
      </div>

      <div className="col-12 col-md d-flex flex-column flex-md-row align-items-center justify-content-center text-white text-center text-md-start">
        <div className="d-flex align-items-center mb-2 mb-md-0 me-md-3">
          <i className="fa-solid fa-phone me-2" style={{ fontSize: "1.2rem" }}></i>
          <p className="m-0">Contacto: 315 516 0393</p>
        </div>

        <div className="d-flex align-items-center mb-2 mb-md-0 me-md-3">
          <a href="https://g.page/fullcolorpi" target="_blank" rel="noopener noreferrer" className="me-2">
            <i className="fa-solid fa-location-dot" style={{ fontSize: "1.5rem", color: "red" }}></i>
          </a>
          <p className="m-0">Tumaco, Nariño - Colombia</p>
        </div>

        <div className="d-flex align-items-center">
          <i className="fa fa-envelope me-2"></i>
          <a href="mailto:fullcolorpi@yahoo.com" className="text-white small m-0">fullcolorpi@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}

export default Footer;
