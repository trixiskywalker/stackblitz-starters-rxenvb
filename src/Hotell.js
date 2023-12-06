import React, { StrictMode } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function Hotell() { //gör två kolumner genom att göra en stor "container" och ha två stycken div:ar med className "col"
  return (
    <div>
      <div className="container"> 
        <div className="mt-4">
         <Link to="Hotellista"> <button>Tillbaka till hotellöversikt</button> </Link> {/* Denna knapp ska ta tillbaka användaren till föregående sida */}
        </div>
        <div className="row">
          <div className="col">
            <img
              className="w-200 rounded-3 m-5"
              src="/img/cancun-1249306_640.jpg"
            />
            <div className="m-5 border rounded p-4">
              <table>
                <tr>
                  <th>Hotellfakta</th>
                </tr>
                <tr>
                  <td>Pool</td>
                  <td>3st</td>
                  <td>Städdagar/vecka</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Barnpool</td>
                  <td>2st</td>
                  <td>Avstånd till centrum</td>
                  <td>0m</td>
                </tr>
                <tr>
                  <td>Restaurang</td>
                  <td>3st</td>
                  <td>Närmaste strand</td>
                  <td>250m</td>
                </tr>
                <tr>
                  <td>Bar</td>
                  <td>1st</td>
                  <td>WiFi</td>
                  <td>gratis</td>
                </tr>
                <tr>
                  <td>Hiss</td>
                  <td>Ja</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="col">
            <br />
            <h1>
              Whistling Waters &#11088; &#11088; &#11088; &#11088; &#11088;{' '}
            </h1>
            <p>
              <i>Malaga, Spanien</i>
            </p>
            <p>
              Whistling Waters är ett familjevänligt hotell med vackra,
              natursköna omgivningar. Här bor du nära stranden i Malaga. På
              hotellet finns flera pooler att välja mellan, alla är omgivna av
              grönska. I direkt anslutning till hotellet ligger en populär
              vandringsled, El Caminito del Rey, där du får utsikt över hela
              Malagas citykärna. Det finns även ett flertal alternativ på
              familjevänliga aktiviteter,exempelvis naturvandringar och
              lägereldar. Vill du ha mer information om aktiviteter i området så
              är det bara att fråga i receptionen som har öppet mellan
              6.30-23.00.
            </p>
            <h3>Övrig information</h3>
            <ul style={{ listStyleType: 'none' }}>
              <li>Parkering på gatan runt hotellet</li>
              <li>Byggt 1998</li>
              <li>Renoverat 2021 (pooler, barer och vissa restauranger)</li>
              <li>3 byggnad/er</li>
              <li>5 våning/ar</li>
              <li>828 rum/lägenheter</li>
              <li>Hiss</li>
              <li>Reception</li>
              <li>Bagagerum</li>
              <li>Tvättservice mot avgift</li>
              <li>Uttagsautomat</li>
            </ul>
            <div className="m-4"></div>
          </div>
          <div className="row">
            <div className="col-6 m-4">
              <div>
                <h3>Liknande familjehotell</h3>
                <div className="d-flex flex-row justify-content-between border rounded mb-3 p-3">
                  <img
                    className="w-25 rounded"
                    src="/img/beach-174561_640.jpg"
                  />
                  <div>
                    <p className="fw-bold">Hotel Palamones</p>
                    <ul>
                      <li>Familjevänligt hotell i Hawaii</li>
                      <li>Beläget inland</li>
                      <li>Bra tillgång till närliggande sevärdheter</li>
                      <li>
                        Erbjuder ett utbud av familje- och barnaktiviteter
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between border rounded mb-3 p-3">
                  <img
                    className="w-25 rounded"
                    src="/img/beach-612553_640.jpg"
                  />
                  <div>
                    <p className="fw-bold">The Breeze Bay</p>
                    <ul>
                      <li>Familjevänligt kusthotell i Jamaica</li>
                      <li>Naturskön kustplats</li>
                      <li>Bekväm tillgång till strandaktiviteter</li>
                      <li>Erbjuder olika familjeinriktade bekvämligheter</li>
                      <li>Erbjuder olika underhållningsalternativ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> {/*Här skapar vi två nya kolumner för att för innehållet jämnt med varandra. */}
            <div className="col m-4">
              {' '}
              <h3>Standardrum</h3>
              <div className="d-flex flex-row justify-content-between">
                <DropdownButton
                  className="mx-2"
                  id="dropdown-basic-button"
                  title="Antal rum"
                >
                  <Dropdown.Item href="#/action-1">0</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">3</Dropdown.Item>
                </DropdownButton>
                <ul>
                  <li>1 dubbelsäng/ 2 enkelsängar</li>
                  <li>Sovplats för 2</li>
                  <li>Värdeförvaring</li>
                  <li>Strykjärn</li>
                </ul>

                <img
                  className="w-25 "
                  src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"
                />
              </div>
              <h3>Trebäddsrum</h3>
              <div className="d-flex flex-row justify-content-between">
                <DropdownButton
                  className="mx-2"
                  id="dropdown-basic-button"
                  title="Antal rum"
                >
                  <Dropdown.Item href="#/action-1">0</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">3</Dropdown.Item>
                </DropdownButton>
                <ul>
                  <li>1 dubbelsäng + bäddsoffa</li>
                  <li>Sovplats för 3</li>
                  <li>Värdeförvaring</li>
                  <li>AC</li>
                </ul>

                <img
                  className="w-25"
                  src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg"
                />
              </div>
              <h3>Privat enbäddsrum</h3>
              <div className="d-flex flex-row justify-content-between">
                <DropdownButton
                  className="mx-2"
                  id="dropdown-basic-button"
                  title="Antal rum"
                >
                  <Dropdown.Item href="#/action-1">0</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">3</Dropdown.Item>
                </DropdownButton>
                <ul>
                  <li>1 enkelsäng</li>
                  <li>Sovplats för 1</li>
                  <li>Värdeförvaring</li>
                  <li>AC</li>
                </ul>

                <img
                  className="w-25"
                  src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className="m-5 border rounded p-4">
                <p>
                  <b>Välj datum:</b>
                </p>
                <p>
                  <b>Från:</b>
                </p>
                <input type="date"></input>
                <p>
                  <b>Till:</b>
                </p>
                <input type="date"></input>
              </div>
              <div className="text-center my-4"> {/*Lägger knappen i en egen Div för att kunna stylea så att hela knappen hamnar i mitten  */}
                <Link to="Bokningssida"><button className="px-5">Boka nu</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hotell;
