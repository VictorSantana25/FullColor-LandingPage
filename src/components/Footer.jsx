const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-5 bg-black">
            <div className="container px-5 d-flex justify-content-between align-items-center">
                <p className="m-0 text-white small">
                    Copyright &copy; {currentYear}
                </p>
                <div className="d-flex align-items-center">
                    <i className="fa fa-envelope text-white" style={{ marginRight: "0.5rem" }}></i>
                    <a href="mailto:example@email.com" className="text-white small">example@email.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
