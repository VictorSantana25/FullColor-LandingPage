import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header className="masthead text-center text-white" id='page-top'>
            <div className="masthead-content">
                <div className="container px-5">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Columna izquierda (4 espacios) */}
                            <h1 className="masthead-heading mb-0 ">{props.title}</h1>
                        </div>
                        <div className="col-md-8">
                            {/* Columna derecha (restante) */}
                            <h2 className="masthead-subheading mb-0 fs-4 text-wrap">{props.subtitle}</h2>
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