import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  {
    /* skapar en container för att göra tre olika kolumner */
  }
  return (
    <footer style={{ backgroundColor: '#023047' }}>
      <div className="container" style={{ paddingTop: '1.5rem' }}>
        <div className="row">
          <div className="col">
            <h3 style={{ color: '#FFFDFD', paddingLeft: '2rem' }}>Länkar</h3>
            <ul style={{ listStyleType: 'none', color: '#FFFDFD' }}>
              <Link to="startsida">
                <li className="text-white">Startsida</li>
              </Link>
              <Link to="Hotellista">
                <li className="text-white">Alla hotell</li>
              </Link>
              <Link to="Hotellista">
                <li className="text-white">Familjehotell</li>
              </Link>
              <Link to="Hotellista">
                <li className="text-white">Vuxenhotell</li>
              </Link>
              <li>
                <a href="#" className="text-white">
                  Kontakta oss
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4 style={{ color: '#FFFDFD', paddingLeft: '4rem' }}>
              Missa inte de bästa erbjudanden! <br /> Anmäl dig till vårt
              nyhetsbrev
            </h4>

            <form>
              {' '}
              {/*Använder form för att göra ett formulär som användaren kan fylla i om hen önskar att få mail med erbjudan */}
              <label style={{ color: '#FFFDFD', paddingRight: '0.5rem' }}>
                E-postadress:
              </label>
              <input
                type="text"
                style={{
                  borderRadius: '25px',
                  padding: '5px',
                  paddingLeft: '0.5rem',
                }}
              ></input>
              <input
                type="submit"
                value="Anmäl"
                style={{
                  backgroundColor: '#ffb703',
                  borderRadius: '25px',
                  padding: '5px',
                }}
              ></input>
              <p
                style={{
                  color: 'white',
                  paddingTop: '3rem',
                  paddingLeft: '6rem',
                }}
              >
                @2023 copyright: resor.se{' '}
              </p>
            </form>
          </div>
          <div className="col">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <a href="#" class="fa fa-facebook fa-2x"></a>
            <a href="#" class="fa fa-instagram fa-2x"></a>
            <a href="#" class="fa fa-twitter fa-2x"></a>
            <a href="#" class="fa fa-youtube fa-2x"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
