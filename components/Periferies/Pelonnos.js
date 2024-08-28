import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 function Pelonnos () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Argolidas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΡΓΟΛΙΔΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Arkadias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΡΚΑΔΙΑΣ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Korinthias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΟΡΙΝΘΙΑΣ</Link></div>
            <br></br>

    <div>
        <Link to={"/Lakwnias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΑΚΩΝΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Messhnias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΜΕΣΣΗΝΙΑΣ</Link> 
        </div>
        
            <br></br>
         
   </header>
    </div>
    
    </div>
    );
}
 
export default Pelonnos;
