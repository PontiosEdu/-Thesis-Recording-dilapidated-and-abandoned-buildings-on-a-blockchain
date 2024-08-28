import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Hpeiros () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Artas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΡΤΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Thesprotias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΘΕΣΠΡΩΤΙΑΣ </Link></div>
        <br></br> 

            <div>    
        <Link to={"/Iwanninwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΙΩΑΝΝΙΝΩΝ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Prevezas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΠΡΕΒΕΖΑΣ</Link></div>
        
            <br></br>

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Hpeiros;
