import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';



function Welcome() {
  return (
    <div>
    <div className="d-flex align-items-end justify-content-end p-5" style={{ backgroundImage: 'url(/img/father-656734_1280.jpg)', Width:"100rem", height:"45rem" }}>
      <div>
      <h2  style={{textAlign:"center"}}>Redo för nästa semester?</h2>
      <h2  style={{textAlign:"center"}}>Vi har över 2000 hotell som väntar på dig!</h2>
      <div className="text-center">
      <Link to="Hotellista"><button>Boka nu!</button></Link>
      </div>
      </div>
    </div>


    <div id="searchbox" style={{ backgroundColor:"#023047", borderRadius:"10px", marginTop:"2rem", marginLeft:"15rem", marginRight:"15rem", marginBottom:"20px" }}>
      <div className="d-flex justify-content-center p-4" >
        <DropdownButton className="mx-2" id="dropdown-basic-button" title="Avreseort">
          <Dropdown.Item href="#/action-1">Stockholm</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Göteborg</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Malmö</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="mx-2" id="dropdown-basic-button" title="Resmål">
          <Dropdown.Item href="#/action-1">Spanien</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Italien</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Frankrike</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="mx-2" id="dropdown-basic-button" title="Reslängd">
          <Dropdown.Item href="#/action-1">Weekend</Dropdown.Item>
          <Dropdown.Item href="#/action-2">1 vecka</Dropdown.Item>
          <Dropdown.Item href="#/action-3">2 veckor</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="mx-2" id="dropdown-basic-button" title="Datum">
          <Dropdown.Item href="#/action-1">Januari</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Februari</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Mars</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="mx-2" id="dropdown-basic-button" title="Resenärer">
          <Dropdown.Item href="#/action-1">Vuxen</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Ungdom</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Barn</Dropdown.Item>
        </DropdownButton>
     </div>
      <div className="text-center p-4">
      <Link to="Hotellista"><button className="px-5" onClick={}>Boka nu!</button></Link>
      </div>
  </div>
 


  <div className="mb-5">
    <div id="reviews" className="d-flex justify-content-center my-4 py-2">
    <h2>Vad säger våra kunder?</h2>
    </div>
    <div className="mx-2"> {/* Här använde vi färdig styleade cards för att visa reviews på webbplatsen*/}
   <CardGroup> 
      <Card className="mx-4 border-start rounded-2 shadow p-3 mb-5 bg-body rounded">
        <Card.Body>
          <Card.Title>"Resor.se - En pålitlig resepartner" </Card.Title>
          <Card.Text>
          Jag har förlitat mig på Resor.se för flera resor, och de har aldrig svikit mig. Deras engagemang för att erbjuda säkra och pålitliga resealternativ är beundransvärt. Från att säkra flyg till att ordna boende och turer hanterar Resor.se varje detalj smidigt. Deras webbplats är informativ, och deras priser är konkurrenskraftiga. Pålitliga och pålitliga är Resor.se resepartnern du kan lita på.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-4 border-start rounded-2 shadow p-3 mb-5 bg-body rounded">
        <Card.Body>
          <Card.Title>"Resor.se - Där varje resa börjar"</Card.Title>
          <Card.Text>
          Resor.se är där varje minnesvärd resa börjar. Deras omfattande utbud av destinationer och resepaket tillgodoser alla smaker och preferenser. Jag bokade nyligen en familjesemester genom Resor.se, och det var en fullträff. Boendet var fantastiskt, och de rekommenderade aktiviteterna var omtyckta av min familj. Tack vare Resor.se skapade vi minnesvärda upplevelser som kommer att vara med oss för livet..{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-4 border-start rounded-2 shadow p-3 mb-5 bg-body rounded">
        <Card.Body>
          <Card.Title>"Underbar bokningsupplevelse med Resor.se"</Card.Title>
          <Card.Text>
          Att boka mina semestrar genom Resor.se är alltid en fröjd. Webbplatsens gränssnitt är intuitivt, och jag kan snabbt jämföra olika resealternativ. Deras kundsupportteam är otroligt hjälpsamt och snabbt svarande, vilket säkerställer att jag har all information jag behöver för en stressfri resa. Resor.se gör verkligen bokningsprocessen till en nöje, och jag ser fram emot att använda deras tjänster för många fler äventyr!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
 </div>
 </div>
    );

  }
  export default Welcome;
