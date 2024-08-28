import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";


 function Anmaktha () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
      <div>
        <Link to={"/Drama"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΔΡΑΜΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Ebrou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΕΒΡΟΥ</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Thasou"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΘΑΣΟΥ</Link></div>
        <br></br>

    <div>
        <Link to={"/Kavala"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΑΒΑΛΑΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Xanthi"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΞΑΝΘΗΣ</Link> 
        &nbsp; &nbsp; &nbsp;
        <Link to={"/Rodophs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΡΟΔΟΠΗΣ</Link></div>
        
   </header>
    </div>
    
    </div>
    );
}
 
export default Anmaktha;
