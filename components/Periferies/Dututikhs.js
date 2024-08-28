import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Dututikhs () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Aitolokarnanias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΙΤΩΛΟΑΚΑΡΝΑΝΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Axaias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΧΑΪΑΣ</Link></div>
        <br></br>
        <div>
        <Link to={"/Hleias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΗΛΕΙΑΣ</Link></div>
            <br></br>

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Dututikhs;
