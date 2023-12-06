import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, formControl, Button, form } from 'react-bootstrap';

function Bekraftelse() {
  return (
    <div className="m-4">
      <Link to="Bokningssida">
        <button>Tillbaka till bokning</button>
      </Link>{' '}
      {/* Denna knapp ska ta tillbaka användaren till föregående sida */}
      <h1 className="text-center">
        Bokningsbekräftelse för Whistling Waters Hotell
      </h1>
      <div className="border rounded-2 p-5 shadow p-3 mb-5 bg-body rounded">
        <h2 className="text-center">
          Tack för din bokning på Whistling Waters Hotell i Spanien!
        </h2>
        <p className="fw-bold">Bokningsdetaljer:</p>
        <ul className="fw-bold" style={{ listStyleType: 'none' }}>
          <li>Hotell: Whistling Waters</li>
          <li>Typ av rum: 1 privat rum, 2 rum med tre sängar</li>
          <li>Incheckningsdatum: 12 september 2024</li>
          <li>Utcheckningsdatum: 20 september 2024</li>
        </ul>
        <p>
          Vi ser fram emot att välkomna dig till vårt familjevänliga hotell som
          är vackert beläget bland natursköna omgivningar och erbjuder enkel
          tillgång till vandring och spännande utomhusäventyr. På Whistling
          Waters Hotell strävar vi efter att göra din vistelse minnesvärd genom
          att erbjuda olika familjevänliga aktiviteter, inklusive
          naturvandringar och mysiga lägereldar.
        </p>
        <p>
          För att säkerställa en smidig incheckning och för att få uppdateringar
          om din bokning, kommer du också att få denna bekräftelse via e-post
          till adressen: sarah.jansson@gmail.com
        </p>
        <p>
          Om du har några frågor eller behöver ytterligare assistans, tveka inte
          att kontakta vår kundtjänst. Vi ser fram emot att välkomna dig och din
          familj till Whistling Waters Hotell och önskar er en fantastisk
          vistelse! Vänliga hälsningar,{' '}
        </p>
        <address className="fw-bold">
          Whistling Waters
          <br />
          C/ Arana 29
          <br />
          Villaverde De Guadalimar
          <br />
          Albacete
          <br />
          02460
        </address>
        <a className="fw-bold">+34 758 461 821</a> <br />
        <a className="fw-bold">info@whistlingwaters.es</a> <br />
        <a className="fw-bold">http://www.whistlingwaters.es</a>
      </div>
      <div className="d-flex justify-content-evenly my-3">
        {' '}
        {/* Lägger knapparna i en egen div för att kunna stylea dem enklare */}
        <button>Ladda ner bokningsbekräftelse</button>
        <button>Skriv ut bokningsbekräftelse</button>
      </div>
    </div>
  );
}
export default Bekraftelse;
