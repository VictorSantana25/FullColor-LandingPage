import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className="masthead text-center text-white" id="page-top">
            <div className="masthead-content">
                <div className="container px-5">
                    <div className="row flex-column flex-md-row align-items-center text-center text-md-start">
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            {/* Columna de la imagen (Logo) */}
                            <h1 className="masthead-heading mb-0">{props.title}</h1>
                        </div>
                        <div className="col-12 col-md-8">
                            {/* Columna del texto */}
                            <h2 className="masthead-subheading mb-0 fs-4 text-wrap">
                                {props.subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.object.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default Header
