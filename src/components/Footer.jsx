const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-5 bg-black">
            <div className="container px-5">
                <p className="m-0 text-center text-white small">
                    Copyright &copy; {currentYear}
                </p>
            </div>
        </footer>
    );
}

export default Footer;