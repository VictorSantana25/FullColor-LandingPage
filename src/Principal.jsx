import ContentSection from "./components/ContentSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

const Principal = () => {
    return (
        <>
            {/* Navigation */}
            <Navigation />
            {/*  Header */}
            <Header title={<img className="overlay-image" src="../assets/img/Logo.png" alt="Logo" />} subtitle={""} />
            {/* Content section 1 */}
            <ContentSection position={"right"} title={"Quiénes somos, Misión y Visión"} description={<div className="modal-container">
  {/* BOTÓN 1 - QUIÉNES SOMOS */}
  <button 
    className="modal-button" 
    onClick={() => document.getElementById('quienesModal').style.display = 'block'}
  >
    Quiénes Somos
  </button>

  <div 
    id="quienesModal" 
    className="modal"
    onClick={(e) => {
      if (e.target.id === 'quienesModal') {
        document.getElementById('quienesModal').style.display = 'none';
      }
    }}
  >
    <div className="modal-content">
      <span 
        className="modal-close" 
        onClick={() => document.getElementById('quienesModal').style.display = 'none'}
      >
        &times;
      </span>

      <h2>QUIÉNES SOMOS</h2>
      <p>
        Hola, FullColorPI (Full Color Publicidad Inteligente) es una empresa con más de 18 años de experiencia en Diseño, Impresión y Elaboración de Todo Tipo, Marketing Digital, Comercialización de Equipos de Oficina y Papelería.
      </p>
      <p>
        En 2006 iniciamos con un servicio de Impresión a Full Color, a finales de 2010 ya realizábamos volantes, talonarios, entre otros; e implementamos la impresión de diplomas y certificados dándole un estatus de empresa a nuestro negocio. Una vez establecidos y transcurridos 6 años más de experiencia nos convertimos en una empresa de Publicidad y desde 2018 en una solución Inteligente para las necesidades de nuestro cliente.
      </p>
      <p>
        Ratificamos la mejor disposición para encontrar en conjunto una opción de negocio a fin de lograr lo requerido por su compañía; para ello, puede contar con los recursos humanos, materiales y técnicos disponibles en FullColorPI.
      </p>
      <p>
        Esperamos tener el gusto de atenderl@.
      </p>
    </div>
  </div>

  {/* BOTÓN 2 - MISIÓN */}
  <button 
    className="modal-button" 
    onClick={() => document.getElementById('misionModal').style.display = 'block'}
  >
    Nuestra Misión
  </button>

  <div 
    id="misionModal" 
    className="modal"
    onClick={(e) => {
      if (e.target.id === 'misionModal') {
        document.getElementById('misionModal').style.display = 'none';
      }
    }}
  >
    <div className="modal-content">
      <span 
        className="modal-close" 
        onClick={() => document.getElementById('misionModal').style.display = 'none'}
      >
        &times;
      </span>

      <h2>MISIÓN</h2>
      <p>
        Brindar el mejor servicio de publicidad en Tumaco y sus alrededores, con los más altos estándares de calidad, convirtiéndonos así en la mejor solución a las necesidades de nuestros clientes.
      </p>
    </div>
  </div>

  {/* BOTÓN 3 - VISIÓN */}
  <button 
    className="modal-button" 
    onClick={() => document.getElementById('visionModal').style.display = 'block'}
  >
    Nuestra Visión
  </button>

  <div 
    id="visionModal" 
    className="modal"
    onClick={(e) => {
      if (e.target.id === 'visionModal') {
        document.getElementById('visionModal').style.display = 'none';
      }
    }}
  >
    <div className="modal-content">
      <span 
        className="modal-close" 
        onClick={() => document.getElementById('visionModal').style.display = 'none'}
      >
        &times;
      </span>

      <h2>VISIÓN</h2>
      <p>
        Establecer en Tumaco un servicio de publicidad de alta calidad que satisfaga las necesidades de nuestros clientes y les permita mostrarse en cualquier lugar del mundo a través de nuestros productos.
      </p>
    </div>
  </div>
</div>
} image={"../assets/img/quienesSomos.png"} />

            {/* Content section 2 */}
            <ContentSection title={"Encuéntranos en nuestras redes:"} description={ <div className="social-icons">
      <a href="https://www.facebook.com/fullcolorpi/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-square-facebook"></i>
      </a>
      <a href="https://www.instagram.com/fullcolorpi/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-square-instagram"></i>
      </a>
      <a href="https://www.tiktok.com/@fullcolorpi" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-tiktok"></i>
      </a>
      <a href="https://www.youtube.com/c/FullColorPI" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-square-youtube"></i>
      </a>
      <a href="https://www.threads.net/@fullcolorpi" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-threads"></i>
      </a>
      <a href="https://x.com/fullcolorpi" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a href="https://g.page/fullcolorpi" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-location-dot"></i>
      </a>
    </div>
}  image={"../assets/img/redes.jpg"} />
            {/* Content section 3 */}
            <ContentSection position={"right"} title={"Sorteos"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."} image={"../assets/img/sorteos.png"} />
            {/* Footer */}
            <Footer />

        </>
    )
}

export default Principal