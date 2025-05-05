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
      <Header title={<img className="overlay-image" src="../assets/img/Logo.png" alt="Logo" />} subtitle={"Es una empresa con más de 18 años de experiencia dedicada al diseño, impresión, marketing digital y comercialización de equipos de oficina y papelería. Nos especializamos en brindar soluciones publicitarias innovadoras y de alta calidad que conectan a nuestros clientes con el mundo, posicionándonos como la mejor opción en Tumaco y sus alrededores."} />
      {/* Content section 1 */}
      <ContentSection position={"right"} title={"CONÓCENOS"} description={<div className="container my-4">
        <div className="row g-4">
          {/* COLUMNA IZQUIERDA */}
          <div className="col-md-6 d-flex flex-column gap-3">
            {/* BOTÓN - QUIÉNES SOMOS */}
            <button
              className="btn btn-primary social-btn d-block text-center"
              onClick={() => document.getElementById('quienesModal').style.display = 'block'}
            >
              Quiénes Somos
            </button>

            {/* MODAL - QUIÉNES SOMOS */}
            <div
              id="quienesModal"
              className="modal fade-custom"
              onClick={(e) => {
                if (e.target.id === 'quienesModal') {
                  document.getElementById('quienesModal').style.display = 'none';
                }
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content p-4">
                  <span
                    className="close-btn"
                    onClick={() => document.getElementById('quienesModal').style.display = 'none'}
                  >
                    &times;
                  </span>
                  <h2 className="h4">QUIÉNES SOMOS</h2>
                  <p>
                    Hola, FullColorPI (Full Color Publicidad Inteligente) es una empresa con más de 18 años de experiencia en Diseño, Impresión y Elaboración de Todo Tipo, Marketing Digital, Comercialización de Equipos de Oficina y Papelería.

                    En 2006 iniciamos con un servicio de Impresión a Full Color, a finales de 2010 ya realizábamos volantes, talonarios, entre otros; e implementamos la impresión de diplomas y certificados dándole un estatus de empresa a nuestro negocio. Una vez establecidos y transcurridos 6 años más de experiencia nos convertimos en una empresa de Publicidad y desde 2018 en una solución Inteligente para las necesidades de nuestro cliente.

                    Ratificamos la mejor disposición para encontrar en conjunto una opción de negocio a fin de lograr lo requerido por su compañía; para ello, puede contar con los recursos humanos, materiales y técnicos disponibles en FullColorPI.

                    Esperamos tener el gusto de atenderl@.

                  </p>

                </div>
              </div>
            </div>

            {/* ENLACE - PORTAFOLIO */}
            <a
              href="https://drive.google.com/file/d/1H_YdPge9qIowBG3TGprRR77yqB1rxGWj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary social-btn d-block text-center"
            >
              Portafolio de Servicios
            </a>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="col-md-6 d-flex flex-column gap-3">
            {/* BOTÓN - MISIÓN */}
            <button
              className="btn btn-primary social-btn d-block text-center"
              onClick={() => document.getElementById('misionModal').style.display = 'block'}
            >
              Misión
            </button>

            {/* MODAL - MISIÓN */}
            <div
              id="misionModal"
              className="modal fade-custom"
              onClick={(e) => {
                if (e.target.id === 'misionModal') {
                  document.getElementById('misionModal').style.display = 'none';
                }
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content p-4">
                  <span
                    className="close-btn"
                    onClick={() => document.getElementById('misionModal').style.display = 'none'}
                  >
                    &times;
                  </span>
                  <h2 className="h4">MISIÓN</h2>
                  <p>
                    Brindar el mejor servicio de publicidad en Tumaco y sus alrededores, con los más altos estándares de calidad, convirtiéndonos así en la mejor solución a las necesidades de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÓN - VISIÓN */}
            <button
              className="btn btn-primary social-btn d-block text-center"
              onClick={() => document.getElementById('visionModal').style.display = 'block'}
            >
              Visión
            </button>

            {/* MODAL - VISIÓN */}
            <div
              id="visionModal"
              className="modal fade-custom"
              onClick={(e) => {
                if (e.target.id === 'visionModal') {
                  document.getElementById('visionModal').style.display = 'none';
                }
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content p-4">
                  <span
                    className="close-btn"
                    onClick={() => document.getElementById('visionModal').style.display = 'none'}
                  >
                    &times;
                  </span>
                  <h2 className="h4">VISIÓN</h2>
                  <p>
                    Establecer en Tumaco un servicio de publicidad de alta calidad que satisfaga las necesidades de nuestros clientes y les permita mostrarse en cualquier lugar del mundo a través de nuestros productos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      } image={"../assets/img/quienesSomos.png"} backgroundImageUrl="../assets/img/ESCRITORIO0.jpg" />

      {/* Content section 2 */}


      <ContentSection title={"SÍGUENOS"} description={<div className="social-buttons">
        <a href="https://www.facebook.com/fullcolorpi/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
          <i className="fa-brands fa-facebook-f"></i>
          <span>Facebook<br /><strong>@fullcolorpi</strong></span>
        </a>
        <a href="https://www.youtube.com/c/FullColorPI" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
          <i className="fa-brands fa-youtube"></i>
          <span>YouTube<br /><strong>@fullcolorpi</strong></span>
        </a>
        <a href="https://www.instagram.com/fullcolorpi/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
          <i className="fa-brands fa-instagram"></i>
          <span>Instagram<br /><strong>@fullcolorpi</strong></span>
        </a>
        <a href="https://x.com/fullcolorpi" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
          <i className="fa-brands fa-x-twitter"></i>
          <span>X<br /><strong>@fullcolorpi</strong></span>
        </a>
        <a href="https://www.tiktok.com/@fullcolorpi" target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
          <i className="fa-brands fa-tiktok"></i>
          <span>TikTok<br /><strong>@fullcolorpi</strong></span>
        </a>
        <a href="https://www.threads.net/@fullcolorpi" target="_blank" rel="noopener noreferrer" className="social-btn threads">
          <i className="fa-brands fa-threads"></i>
          <span>Threads<br /><strong>@fullcolorpi</strong></span>
        </a>
      </div>

      } image={"../assets/img/redes.png"} backgroundImageUrl="../assets/img/PERFIL1.jpg" />


      {/* Content section 3 */}


      <ContentSection position={"right"} title={"PARTICIPA"} description={<div className="container mt-4">
        <div className="row g-3">
          {/* Columna izquierda */}
          <div className="col-6 d-flex flex-column gap-3">
            <h5 className="fst-italic">Activos</h5>
            <a href="https://sorteos.fullcolorpi.com/motosorteoextremo" target="_blank" className="btn btn-outline-secondary social-btn text-wrap px-2">Moto Sorteo Extremo 2025</a>
            <a href="" target="_blank" className="btn btn-outline-secondary social-btn"></a>
            <a href="" target="_blank" className="btn btn-outline-secondary social-btn"></a>
          </div>

          {/* Columna derecha */}
          <div className="col-6 d-flex flex-column gap-3">
            <h5 className="fst-italic">Finalizados</h5>
            <a href="https://sorteos.fullcolorpi.com/gane10millones" target="_blank" className="btn btn-outline-secondary social-btn d-block text-center">Sorteo 10 millones</a>
            <a href="https://sorteos.fullcolorpi.com//sorteo12millones" target="_blank" className="btn btn-outline-secondary social-btn d-block text-center">Sorteo 12 millones</a>
            <a href="https://sorteos.fullcolorpi.com/sorteo28millones" target="_blank" className="btn btn-outline-secondary social-btn d-block text-center">Sorteo 28 millones</a>
            <a href="https://sorteos.fullcolorpi.com/sorteo15millones" target="_blank" className="btn btn-outline-secondary social-btn d-block text-center">Sorteo 15 millones</a>
          </div>
        </div>
      </div>
      } image={"../assets/img/sorteos.png"} backgroundImageUrl="../assets/img/ESCRITORIO0.jpg" />
      {/* Footer */}
      <Footer />

    </>
  )
}

export default Principal