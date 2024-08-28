import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Kmak () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Hmathias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΗΜΑΘΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Thessalonikhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΘΕΣΣΑΛΟΝΙΚΗΣ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Kilkis"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΙΛΚΙΣ</Link></div>
            <br></br>

    <div>
        <Link to={"/Pellas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΠΕΛΛΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Pierias"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΠΙΕΡΙΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Serrwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΣΕΡΡΩΝ</Link></div>
        <br></br> 
    <div>
        <Link to={"/Xalkidikhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΧΑΛΚΙΔΙΚΗΣ</Link> 
        </div>
        
            <br></br>
         
   </header>
    </div>
    
    </div>
    );
}
 
export default Kmak;
