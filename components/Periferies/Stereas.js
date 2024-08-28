import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 function Stereas () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Boiwtias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΒΟΙΩΤΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp; 
        <Link to={"/Eyboias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΕΥΒΟΙΑΣ</Link>
        &nbsp; &nbsp; &nbsp;        
        <Link to={"/Euritanias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΕΥΡΥΤΑΝΙΑΣ</Link></div>
            <br></br>

    <div>
        <Link to={"/Fthiotidas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΦΘΙΩΤΙΔΑΣ</Link> 
        &nbsp; &nbsp; &nbsp; 
        <Link to={"/Fwkidas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΦΩΚΙΔΑΣ</Link> 
        </div>
        
            <br></br>
         
   </header>
    </div>
    
    </div>
    );
}
 
export default Stereas;
