import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Dutmak () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Grebenwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΓΡΕΒΕΝΩΝ</Link> 
        &nbsp; &nbsp; &nbsp;
       <Link to={"/Kastoria"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΑΣΤΟΡΙΑΣ </Link></div>
       <br></br>
        <div>
       
        <Link to={"/Kozanhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΟΖΑΝΗΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Florinas"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΦΛΩΡΙΝΑΣ</Link></div>
        
      
   </header>
    </div>
    
    </div>
    );
}
 
export default Dutmak;
