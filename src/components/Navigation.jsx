
const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">FullColorPI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <a className="btn whatsapp-button btn-lg rounded-pill bold text-white" target="_blank" href='https://api.whatsapp.com/send/?phone=573155160393&text&type=phone_number&app_absent=0'>WhatsApp</a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation