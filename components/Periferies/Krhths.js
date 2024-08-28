import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 function Krhths () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">

      <br></br>
      <div>
        <Link to={"/Hrakliou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΗΡΑΚΛΕΙΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Lasithiou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΑΣΙΘΙΟΥ </Link></div>
        <br></br>
        <div> 
        <Link to={"/Rethimnou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΡΕΘΥΜΝΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Xaniwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΧΑΝΙΩΝ</Link></div>
        
            <br></br>

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Krhths;
