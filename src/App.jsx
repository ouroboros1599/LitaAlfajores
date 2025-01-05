import React from "react";
import logo from '../src/assets/images/logo.svg';
import igIcon from '../src/assets/images/instagram.svg';
import './App.css';

/*imports de imagenes */
import A_bonobon from '../src/assets/images/A_bonbon.webp';
import A_oreo from '../src/assets/images/A_oreo.webp';
import A_nuez from '../src/assets/images/A_nuez.webp';
import B_merman from '../src/assets/images/B_mermeladaManjar.webp'
import B_prestigio from '../src/assets/images/B_prestigio.webp'
function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='all-content'>
        <div className="main-content">
          <div className="header-content">
            <img src={logo} alt="Alfajores la Lita" className="logo" />
          </div>
          <div className="body-content">
            {/* Sección de Alfajores */}
            <div className="section">
              <h2 className="section-title">Alfajores</h2>
              <div className="grid">
                <div className="product-card">
                  <img
                    src={ A_bonobon }
                    alt="ALFAJOR DE BON O BON"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Alfajor de Bon o Bon</h3>
                    <p className="product-description">
                      Alfajor con cobertura de chocolate, relleno con bon o bon y manjar.
                    </p>
                    <p className="product-price">$800</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src= { A_oreo }
                    alt="ALFAJOR DE OREO"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Alfajor de Oreo</h3>
                    <p className="product-description">
                      Alfajor con cobertura de chocolate, relleno con oreo y manjar.
                    </p>
                    <p className="product-price">$800</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src= { A_nuez }
                    alt="ALFAJOR DE NUEZ"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Alfajor de Nuez</h3>
                    <p className="product-description">
                      Alfajor con cobertura de chocolate, relleno de trozos de nuez y manjar.
                    </p>
                    <p className="product-price">$1200</p>
                    <p className="request">(Bajo pedido)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Bombones */}
            <div className="section">
              <h2 className="section-title">Bombones</h2>
              <div className="grid">
                <div className="product-card">
                  <img
                    src= { B_merman }
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Bom-Bon Mermelada</h3>
                    <p className="product-description">
                      2 bombones rellenos de mermelada de frutilla y manjar, con trozos de
                      galleta de vainilla con cobertura de chocolate.
                    </p>
                    <p className="product-price">$1500</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src= { B_prestigio }
                    alt="BOMBON DE PRESTIGIO"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Bom-Bon Prestigio</h3>
                    <p className="product-description">
                      2 bombones relleno de coco rallado con leche condensada y cobertura de chocolate.
                    </p>
                    <p className="product-price">$2000</p>
                    <p className="request">(Bajo pedido)</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="BOMBON DE NUEZ"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Bom-Bon Nuez</h3>
                    <p className="product-description">
                      2 bombones relleno de nuez picada y manjar con cobertura de chocolate.
                    </p>
                    <p className="product-price">$2000</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="BOMBON DE OREO"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Bom-Bon Oreo</h3>
                    <p className="product-description">
                      2 bombones relleno de galleta oreo con cobertura de chocolate.
                    </p>
                    <p className="product-price">$2000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="social-icons">
              {/* <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
              </a> */}
              <a href="https://www.instagram.com/lita_alfajores/" target="_blank" rel="noopener noreferrer">
                <img src={igIcon} alt="Instagram - Lita Alfajores" />
              </a>
            </div>
            <p>© {currentYear} La Lita Alfajores - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;