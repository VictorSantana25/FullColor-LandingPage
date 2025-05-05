const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-5 bg-black">
            <div className="container px-5 d-flex justify-content-between align-items-center">
                <p className="m-0 text-white small">
                    Todos los derechos reservados. &copy; {currentYear}
                </p>

                <div className="d-flex align-items-center">
                    <a href="https://g.page/fullcolorpi" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-location-dot" style={{ marginRight: "1.5rem", fontSize: "1.5rem", color:"red" }}></i>
                    </a>
                    <i className="fa fa-envelope text-white" style={{ marginRight: "0.5rem" }}></i>
                    <a href="mailto:fullcolorpi@yahoo.com" className="text-white small">fullcolorpi@gmail.com</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
