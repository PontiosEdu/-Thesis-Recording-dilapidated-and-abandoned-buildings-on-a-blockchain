import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 function Thessalias () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Karditsas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΑΡΔΙΤΣΑΣ</Link> 
            &nbsp; &nbsp; &nbsp; 
        <Link to={"/Larisas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΛΑΡΙΣΑΣ</Link>
            &nbsp; &nbsp; &nbsp; 
         <Link to={"/Magnisias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΜΑΓΝΗΣΙΑΣ</Link></div>
            <br></br>

    <div>
        <Link to={"/Sporadwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΣΠΟΡΑΔΩΝ</Link> 
        &nbsp; &nbsp; &nbsp; 
        <Link to={"/Trikalwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΤΡΙΚΑΛΩΝ</Link> 
        </div>
        
            <br></br>
         
   </header>
    </div>
    
    </div>
    );
}
 
export default Thessalias;
