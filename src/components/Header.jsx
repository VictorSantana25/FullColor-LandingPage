import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header className="masthead text-center text-white" id='page-top'>
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">{props.title}</h1>
                    <h2 className="masthead-subheading mb-0">{props.subtitle}</h2>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    btninfo: PropTypes.object.isRequired
}

export default Header