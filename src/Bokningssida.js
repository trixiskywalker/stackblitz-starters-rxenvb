import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

function Bokningssida() {
  const [open, setOpen] = useState(false);
  return (
    /*Här gör jag en container för hela sidan med en full Row för hela sidan och sedan lägger jag in kolumner (Col) 
    så "Fyll i bokningsuppgifter" och "Ditt val" kommer sida vid sida."Betalning" kommer sedan under bokningsuppgifter.
    För att göra sidan mer responsiv så la jag till storleken i kolumnerna "<Col md>" om sidan blir mindre så läggs de om
    så de kommer efter varandra och inte bredvid varandra.*/

    <Container className="m-4">
      <Row>
        <div className="mb-5">
          {/*La in knappen i en egen div så den inte blev samma storlek som sidan*/}
          <Link to="Hotell">
            {' '}
            <button>Tillbaka till hotellinformation</button>{' '}
          </Link>
          {/* Denna knapp ska ta tillbaka användaren till föregående sida */}
        </div>
        <Col md>
          <h2>Fyll i bokningsuppgifter</h2>
          <div className="border rounded-2 p-5 shadow p-3 mb-5 bg-body rounded">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFname">
                  {/*Här är förnamn och efternamn bredvid varandra som kolumner med as={col}*/}
                  <Form.Label>Förnamn</Form.Label>
                  <Form.Control type="name" placeholder="" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLname">
                  <Form.Label>Efternamn</Form.Label>
                  <Form.Control type="name" placeholder="" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>E-postadress</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridEmailConf">
                <Form.Label>Bekräfta E-postadress</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
            </Form>
            <p>Bokningsbekräftelsen skickas till den angivna e-postadressen</p>
          </div>
          <h2>Betalning</h2>
          <div className="border rounded-2 p-5 shadow p-3 mb-5 bg-body rounded">
            <Form>
              <fieldset>
                <Form.Group className="mb-4">
                  <Form.Check
                    className="mb-2"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    type="radio"
                    label="Betala Direkt"
                    id="betaladriekt"
                  />
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <Form.Group>
                        <Form.Label>Kortnummer</Form.Label>
                        <Form.Control className="mb-3" />
                        <Row className="mb-3">
                          <Col>
                            <Form.Label>Expirations datum</Form.Label>
                            <Form.Control placeholder="MM/YY" />
                          </Col>
                          <Col>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control />
                          </Col>
                        </Row>
                        <Form.Label>Kort innehavare</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </div>
                  </Collapse>
                  <Form.Check
                    className="mt-3"
                    type="radio"
                    label="Betala på hotellet"
                    id="betaladriekt"
                  />
                </Form.Group>
              </fieldset>
              <Form.Group>
                <Form.Label>Rabattkod/Presentkort</Form.Label>
                <Form.Control type="text" id="" />
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col md>
          <h2>Ditt val</h2>
          <div className=" border rounded-2 p-5 shadow p-3 mb-5 bg-body rounded">
            {/*La in kolumner i denna box också*/}
            <Row>
              <Col>
                <img
                  className="w-100 rounded-2"
                  src="/img/cancun-1249306_640.jpg"
                />
              </Col>
              <Col>
                <h3>Whistling Waters</h3>
                <ul>
                  <li>Familjevänligt hotell i Spanien</li>
                  <li>Inbäddat inland bland natursköna omgivningar</li>
                  <li>Enkel tillgång till vandring och utomhusäventyr</li>
                  <li>
                    Erbjuder familjevänliga aktiviteter som naturvandringar och
                    lägereldar
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Incheckning:</b> 12 / 09 / 2024
                </p>
              </Col>
              <Col>
                <p>
                  <b>Utcheckning:</b> 20 / 09 / 2024
                </p>
              </Col>
            </Row>
            <p>
              <b>Längd:</b> 8 nätter
            </p>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <b>Antal rum: 3</b>
              </li>
              <li>
                <b>1 x Privat enbäddsrum</b>
              </li>
              <li>
                <b>2 x Tre bäddsrum</b>
              </li>
              <li>5 vuxna</li>
              <li>2 barn</li>
            </ul>
          </div>
          <div className="d-flex flex-row-reverse">
            {/*Gjorde denna div med bokningsknappen flex så jag kunde positionera den till höger med att ändra vilket håll raden börjar på.*/}
            <Link to="Bekraftelse">
              <button className="px-5">Boka nu!</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Bokningssida;
