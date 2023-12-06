import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CustomerService() {
  return (
    <div>
      {' '}
      {/* Här använde vi oss av en pop up trigger för att få upp ett kontaktformulär när användaren klickar på kontakta kundtjänst.  */}
      <Popup
        trigger={
          <span>
            {' '}
            <img
              src="/img/kundtjanst.png"
              style={{ maxWidth: '25%', maxHeight: '25%' }}
            />{' '}
          </span>
        }
        position="right center"
      >
        <div>Hur kan vi hjälpa dig?</div>
        <input
          type="text"
          style={{
            borderRadius: '25px',
            padding: '5px',
            paddingLeft: '0.5rem',
          }}
        />

        <div>Vilken e-postadress kan vi återkoppla till?</div>
        <input
          type="text"
          style={{
            borderRadius: '25px',
            padding: '5px',
            paddingLeft: '0.5rem',
          }}
        />
        <input
          type="submit"
          value="Skicka"
          style={{
            backgroundColor: '#ffb703',
            borderRadius: '25px',
            padding: '5px',
          }}
        />
      </Popup>
    </div>
  );
}
export default CustomerService;
