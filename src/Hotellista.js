import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

/*Här skapar jag en variabel med en array som innehåller fem olika hotell och deras information. */
let myData = [
  {
    hotellname: 'Hotel Palmones',
    description: 'Familjevänligt hotell i Europa',
    location: 'Beläget inland',
    attractions: 'Bra tillgång till närliggande sevärdheter',
    activities: 'Erbjuder ett utbud av familje- och barnaktiviteter',
    img: '/img/beach-174561_640.jpg',
  },
  {
    hotellname: 'The Breeze Bay',
    description: 'Familjevänligt kusthotell i Europa',
    location: 'Naturskön kustplats',
    attractions: 'Bekväm tillgång till strandaktiviteter',
    activities:
      'Erbjuder olika familjeinriktade bekvämligheter och underhållningsalternativ',
    img: '/img/beach-612553_640.jpg',
  },
  {
    hotellname: 'Whistiling Waters',
    description: 'Familjevänligt hotell i Europa',
    location: 'Inbäddat inland bland natursköna omgivningar',
    attractions: 'Enkel tillgång till vandring och utomhusäventyr',
    activities:
      'Erbjuder familjevänliga aktiviteter som naturvandringar och lägereldar',
    img: '/img/cancun-1249306_640.jpg',
  },
  {
    hotellname: 'New Age Hotel',
    description: 'Familjevänligt kusthotell i Europa',
    location: 'Prima kustläge med vackra vyer',
    attractions: 'Tillgång till strandaktiviteter och vattensporter',
    activities: 'Erbjuder familjecentrerade tjänster och program',
    img: '/img/greece-844269_640.jpg',
  },
  {
    hotellname: 'Orson Hotel',
    description: 'Familjevänligt hotell i Europa',
    location: 'Beläget inland, ger en fridfull reträtt',
    attractions: 'Närliggande tillgång till kulturella och historiska platser',
    activities: 'Organiserar familjeinriktade utflykter och evenemang',
    img: '/img/to-reprimand-1330978_640.jpg',
  },
];

const Hotellista = () => {
  /* variabeln lista tar arrayen och filtrerar sedan ut hotellet med hotellnamn, beskrivning, plats, 
  sevärdigheter och aktiviteter som presenteras i en box med två kolumner. En kolumn för bilden och en
  kolumn med titel, och lista med informationen för namnet och sedan ett omdöme betyg och knapp för att 
  komma vidare till hotellspecifikation och bokning.*/
  const lista = myData.map((product, index) => (
    <Stack md={4} className="d-flex flex-row">
      <Col className="m-1">
        <img className="w-100 rounded-2" src={product.img} />
      </Col>
      <Col className="m-4">
        <h2>{product.hotellname}</h2>

        <ul>
          <li>{product.description}</li>
          <li>{product.location}</li>
          <li>{product.attractions}</li>
          <li>{product.activities}</li>
        </ul>
      </Col>
      <Col>
        <div className="d-flex align-items-end flex-column bd-highlight mb-3 align-content-between">
          <div className="mb-5 p-2 bd-highlight">
            <h3>
              <Badge>Omdöme 10</Badge>
            </h3>
          </div>
          <div className="mt-auto p-2 bd-highlight">
            <Link to="Hotell">
              <button className="px-4">Boka nu</button>
            </Link>
          </div>
        </div>
      </Col>
    </Stack>
  ));

  return (
    <Container className="m-4">
      <Row>
        <div className="mb-4">
          <Link to="startsida">
            <button>Tillbaka till startsidan</button>
          </Link>{' '}
          {/* Denna knapp ska ta tillbaka användaren till föregående sida */}
        </div>
        <Col md={3} className="border rounded shadow px-2">
          {' '}
          {/*Skapar en kolumn i containern och stylear den för att innehållet ska lägga sig till vänster i en smalare kalumn än den till höger */}
          <p className="fw-bold m-4">Filter:</p>{' '}
          {/*Här är en en filter komponent byggd med ett formulär, som endast visar  hur det kan se ut, men fungerar inte.*/}
          <Form className="m-4">
            <Form.Group>
              <Form.Label className="fw-bold my-2">Restaurang</Form.Label>
              <Form.Check label="Vegetarian" />
              <Form.Check label="Vegan" />
              <Form.Check label="Glutenfri" />
              <Form.Check label="Pescetarian" />
              <Form.Label className="fw-bold my-2">
                Tillgänglighetsanpassning
              </Form.Label>
              <Form.Check label="Rullstolsanpassad" />
              <Form.Check label="Hiss" />
              <Form.Check label="Rum på nedreplan" />
              <Form.Check label="Rum nästintill varandra" />
              <Form.Label className="fw-bold my-2">Faciliteter</Form.Label>
              <Form.Check label="Rumsservice" />
              <Form.Check label="Flygplats transfer" />
              <Form.Check label="Wifi" />
              <Form.Check label="Pool" />
              <Form.Label className="fw-bold my-2">
                Fritidsaktiviteter
              </Form.Label>
              <Form.Check label="Dagsutflykter" />
              <Form.Check label="Snorkeltur" />
              <Form.Check label="Wifi" />
              <Form.Check label="Pool" />
            </Form.Group>
          </Form>
          <div className="text-center my-4">
            <button className="px-5">Filtrera</button>
          </div>
        </Col>
        <Col>{lista}</Col>{' '}
        {/*Här skrivs variabeln lista in som filtrerar ut arrayen med hotellobjekten.*/}
      </Row>
    </Container>
  );
};

export default Hotellista;
