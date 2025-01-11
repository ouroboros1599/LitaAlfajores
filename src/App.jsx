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
import B_nuez from '../src/assets/images/B_nuez.webp'
import B_oreo from '../src/assets/images/B_oreo.webp'
import C_cuchufli from '../src/assets/images/C_cuchufli.webp'
import box1 from '../src/assets/images/box1.webp'
import box2 from '../src/assets/images/box2.webp'
import box3 from '../src/assets/images/box3.webp'
function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='all-content'>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
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
                    src={A_bonobon}
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
                    src={A_oreo}
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
                    src={A_nuez}
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
                    src={B_merman}
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">BomBon Mermelada</h3>
                    <p className="product-description">
                      2 bombones rellenos de mermelada de frutilla y manjar, con trozos de
                      galleta de vainilla con cobertura de chocolate.
                    </p>
                    <p className="product-price">$1500</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src={B_prestigio}
                    alt="BOMBON DE PRESTIGIO"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">BomBon Prestigio</h3>
                    <p className="product-description">
                      2 bombones relleno de coco rallado con leche condensada y cobertura de chocolate.
                    </p>
                    <p className="product-price">$2000</p>
                    <p className="request">(Bajo pedido)</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src={B_nuez}
                    alt="BOMBON DE NUEZ"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">BomBon Nuez</h3>
                    <p className="product-description">
                      2 bombones relleno de nuez picada y manjar con cobertura de chocolate.
                    </p>
                    <p className="product-price">$2000</p>
                    <p className="request">(Bajo pedido)</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src={B_oreo}
                    alt="BOMBON DE OREO"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">BomBon Oreo</h3>
                    <p className="product-description">
                      2 bombones relleno de galleta oreo con cobertura de chocolate.
                    </p>
                    <p className="product-price">$1200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección cajas regalo */}
            <div className="section">
              <h2 className="section-title">Cajas de regalo</h2>
              <div className="grid">
                <div className="product-card">
                  <img
                    src={ box1 }
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Caja de regalo N°1</h3>
                    <p className="product-description">
                      2 alfajores de nuez y 2 alfajores de bon o bon
                    </p>
                    <p className="product-price">$7000</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src={ box2 }
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Caja de regalo N°2</h3>
                    <p className="product-description">
                      2 alfajores de oreo, 2 alfajores de bon o bon y 2 bombones mermelada manjar
                    </p>
                    <p className="product-price">$6000</p>
                  </div>
                </div>
                <div className="product-card">
                  <img
                    src={ box3 }
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Caja de regalo N°3</h3>
                    <p className="product-description">
                      2 trufas de nuez, 1 trufa mermelada manjar y 2 alfajores bon o bon
                    </p>
                    <p className="product-price">$7500</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de cuchuflis */}
            <div className="section">
              <h2 className="section-title">Cuchufli</h2>
              <div className="grid">
                <div className="product-card">
                  <img
                    src={C_cuchufli}
                    alt="BOMBON DE MERMELADA"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">Cuchufli</h3>
                    <p className="product-description">
                      4 cuchufli rellenos de manjar
                    </p>
                    <p className="product-price">$1200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h2 className="section-title">Nuestras redes sociales</h2>
            <div className="footer-content">
              <div className="social-icons">
                <div className="grid">
                  {/* <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                  </a> */}
                  <a href="https://www.instagram.com/lita_alfajores/" target="_blank" rel="noopener noreferrer">
                    <img src={igIcon} alt="Instagram - Lita Alfajores" />
                  </a>
                </div>
              </div>
              <p className="copy">© {currentYear} La Lita Alfajores - Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
