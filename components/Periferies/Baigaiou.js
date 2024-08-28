import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Baigaiou () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br> 
      <div>
        <Link to={"/Ikarias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΙΚΑΡΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Lesbou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΕΣΒΟΥ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Lhmnou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΗΜΝΟΥ</Link></div>
        <br></br> 

    <div>
        <Link to={"/Samou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΣΑΜΟΥΝ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Xiou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΧΙΟΥ</Link> 
        </div>
        
            
         
   </header>
    </div>
    
    </div>
    );
}
 
export default Baigaiou;
