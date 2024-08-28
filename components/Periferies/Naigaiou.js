import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 function Naigaiou () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Androu"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΝΔΡΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Thhras"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΘΗΡΑΣ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Kalumnou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΑΛΥΜΝΟΥ</Link></div>
        <br></br> 
       
        <div>
        <Link to={"/Karpathou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΑΡΠΑΘΟΥ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Kynthou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΕΑΣ – ΚΥΘΝΟΥ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Kw"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΩ</Link></div>
        <br></br> 
        
        <div>
        <Link to={"/Mhlou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΜΗΛΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Mykonou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΜΥΚΟΝΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Naxou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΝΑΞΟΥ</Link> </div>
        <br></br> 
        
        <div>
        <Link to={"/Parou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΠΑΡΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Rodou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΡΟΔΟΥ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Syrou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΣΥΡΟΥ</Link> </div>
        <br></br> 
        <div>
        <Link to={"/Tinou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΤΗΝΟΥ</Link> 
        </div>
        
            <br></br>

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Naigaiou;
