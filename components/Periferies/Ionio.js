import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Ionio () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">

      <br></br>
      <div>
        <Link to={"/Zakynthou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΖΑΚΥΝΘΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Ithakhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΙΘΑΚΗΣ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Kerkyras"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΕΡΚΥΡΑΣ</Link></div>
            <br></br>

    <div>
        <Link to={"/Kefalonias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΕΦΑΛΛΗΝΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Leukadas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΕΥΚΑΔΑΣ</Link> 
        </div>
        
            <br></br>

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Ionio;
