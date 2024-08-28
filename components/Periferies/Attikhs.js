import React from 'react';
 import "../../css/App.css";
 import { Link } from "react-router-dom";

 
 function Attikhs () {
    return (
      
      <div>
      <div className="App">
      <header className="App-header">
 
      <br></br>
        <div>
            <Link to={"/Anattikhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ</Link> 
            &nbsp; &nbsp; &nbsp;
            <Link to={"/Btomeaathinwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΒΟΡΕΙΟΥ ΤΟΜΕΑ ΑΘΗΝΩΝ</Link>
        </div>
        <br></br> 
        <div>
            <Link to={"/Dutattikhs"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΔΥΤΙΚΗΣ ΑΤΤΙΚΗΣ</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to={"/Dutikoutomaiaathinwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΔΥΤΙΚΟΥ ΤΟΜΕΑ ΑΘΗΝΩΝ</Link> 
        </div>
        <br></br> 
        <div>
            <Link to={"/Kentrikoutomeathinwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΚΕΝΤΡΙΚΟΥ ΤΟΜΕΑ ΑΘΗΝΩΝ</Link> 
            &nbsp; &nbsp; &nbsp;
            <Link to={"/Enothtanhswn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΝΗΣΩΝ</Link>
        </div>
        <br></br> 
        <div>
            <Link to={"/Notioutomaiathinwn"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΝΟΤΙΟΥ ΤΟΜΕΑ ΑΘΗΝΩΝ</Link> 
            &nbsp; &nbsp; &nbsp;
            <Link to={"/Enotpeiraios"} className="button-10">ΠΕΡΙΦΕΡΕΙΑΚΗ ΕΝΟΤΗΤΑ ΠΕΙΡΑΙΩΣ</Link>
        </div>
        
        

         
   </header>
    </div>
    
    </div>
    );
}
 
export default Attikhs;
