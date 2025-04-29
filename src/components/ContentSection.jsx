import PropTypes from 'prop-types'

const ContentSection = ({ title, description, image, position = "left" }) => {
    return (
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className={"col-lg-6 order-lg-" + (position === "right" ? "2" : "1") }>
                        <div className="p-5"><img className="img-fluid rounded-circle w-75" src={image} alt="..." /></div>
                    </div>
                    <div className={"col-lg-6 order-lg-" + (position === "right" ? "1" : "2")}>
                        <div className="p-5">
                            <h2 className="display-5 fw-bold fst-italic">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ContentSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    position: PropTypes.string
}

export default ContentSection