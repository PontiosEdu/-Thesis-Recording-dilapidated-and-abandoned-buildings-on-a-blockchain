import "../css/App.css";
import { BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Periferies from '../components/Periferies';
import Home from '../components/Home';
import HHome from '../components/HHome';
import Metamask from "../Metamask";
import ImgDipaeIcon from '../img/dipae-icon.png'; 
import Imgmetamask from '../img/metamask.png'; 

import ImgDImosNetIcon from '../img/DimosNet.png'; 
import Imggeodata from '../img/geodata.png'; 
import Imgkodiko from '../img/kodiko.png'; 
import Imgpoleodomia from '../img/poleodomia.png'; 
import Imgktimatologio from '../img/ktimatologio.png'; 
import ImgWeb3Storage from '../img/Web3Storage.png'; 


import RecBuldings from '../components/RecBuldings';
import ViewBuildings from '../components/ViewBuildings';

//********************************************/
import  Anmaktha  from './Periferies/Anmaktha';
import  Dututikhs  from './Periferies/Dututikhs';

import  Thessalias  from './Periferies/Thessalias';
import  Krhths  from './Periferies/Krhths';
import  Stereas  from './Periferies/Stereas';

import  Attikhs  from './Periferies/Attikhs';
import  Dutmak  from './Periferies/Dutmak';
import  Ionio  from './Periferies/Ionio';

import  Naigaiou  from './Periferies/Naigaiou';
import  Baigaiou  from './Periferies/Baigaiou';
import  Hpeiros  from './Periferies/Hpeiros';

import  Kmak  from './Periferies/Kmak';
import  Pelonnos  from './Periferies/Pelonnos';
/********************************************/
/********************************************/
import  Drama  from './Periferies/toperiferies/Drama';
import  Kavala  from './Periferies/toperiferies/Kavala';
import  Rodophs  from './Periferies/toperiferies/Rodophs';
import  Thasou  from './Periferies/toperiferies/Thasou';
import  Xanthi  from './Periferies/toperiferies/Xanthi';
import  Ebrou  from './Periferies/toperiferies/Ebrou';


import  Anattikhs  from './Periferies/toperiferies/Anattikhs';
import  Btomeaathinwn  from './Periferies/toperiferies/Btomeaathinwn';
import  Dutattikhs  from './Periferies/toperiferies/Dutattikhs';
import  Dutikoutomaiaathinwn  from './Periferies/toperiferies/Dutikoutomaiaathinwn';
import  Kentrikoutomeathinwn  from './Periferies/toperiferies/Kentrikoutomeathinwn';
import  Enothtanhswn  from './Periferies/toperiferies/Enothtanhswn';
import  Notioutomaiathinwn  from './Periferies/toperiferies/Notioutomaiathinwn';
import  Enotpeiraios  from './Periferies/toperiferies/Enotpeiraios';

import  Ikarias  from './Periferies/toperiferies/Ikarias';
import  Lesbou  from './Periferies/toperiferies/Lesbou';
import  Lhmnou  from './Periferies/toperiferies/Lhmnou';
import  Samou  from './Periferies/toperiferies/Samou';
import  Xiou  from './Periferies/toperiferies/Xiou';

import  Aitolokarnanias  from './Periferies/toperiferies/Aitolokarnanias';
import  Axaias  from './Periferies/toperiferies/Axaias';
import  Hleias  from './Periferies/toperiferies/Hleias';

import  Florinas  from './Periferies/toperiferies/Florinas';
import  Grebenwn  from './Periferies/toperiferies/Grebenwn';
import  Kastoria  from './Periferies/toperiferies/Kastoria';
import  Kozanhs  from './Periferies/toperiferies/Kozanhs';

import  Thesprotias  from './Periferies/toperiferies/Thesprotias';
import  Artas  from './Periferies/toperiferies/Artas';
import  Iwanninwn  from './Periferies/toperiferies/Iwanninwn';
import  Prevezas  from './Periferies/toperiferies/Prevezas';

import  Karditsas  from './Periferies/toperiferies/Karditsas';
import  Larisas  from './Periferies/toperiferies/Larisas';
import  Magnisias  from './Periferies/toperiferies/Magnisias';
import  Sporadwn  from './Periferies/toperiferies/Sporadwn';
import  Trikalwn  from './Periferies/toperiferies/Trikalwn';

import  Ithakhs  from './Periferies/toperiferies/Ithakhs';
import  Kefalonias  from './Periferies/toperiferies/Kefalonias';
import  Kerkyras  from './Periferies/toperiferies/Kerkyras';
import  Leukadas  from './Periferies/toperiferies/Leukadas';
import  Zakynthou  from './Periferies/toperiferies/Zakynthou';

import  Hmathias  from './Periferies/toperiferies/Hmathias';
import  Kilkis  from './Periferies/toperiferies/Kilkis';
import  Pellas  from './Periferies/toperiferies/Pellas';
import  Pierias  from './Periferies/toperiferies/Pierias';
import  Serrwn  from './Periferies/toperiferies/Serrwn';
import  Thessalonikhs  from './Periferies/toperiferies/Thessalonikhs';
import  Xalkidikhs  from './Periferies/toperiferies/Xalkidikhs';

import  Hrakliou  from './Periferies/toperiferies/Hrakliou';
import  Lasithiou  from './Periferies/toperiferies/Lasithiou';
import  Rethimnou  from './Periferies/toperiferies/Rethimnou';
import  Xaniwn  from './Periferies/toperiferies/Xaniwn';
 
import  Androu  from './Periferies/toperiferies/Androu';
import  Kalumnou  from './Periferies/toperiferies/Kalumnou';
import  Karpathou  from './Periferies/toperiferies/Karpathou';
import  Kw  from './Periferies/toperiferies/Kw';
import  Kynthou  from './Periferies/toperiferies/Kynthou';
import  Mhlou  from './Periferies/toperiferies/Mhlou';
import  Mykonou  from './Periferies/toperiferies/Mykonou';
import  Naxou  from './Periferies/toperiferies/Naxou';
import  Parou  from './Periferies/toperiferies/Parou';
import  Rodou  from './Periferies/toperiferies/Rodou';
import  Syrou  from './Periferies/toperiferies/Syrou';
import  Thhras  from './Periferies/toperiferies/Thhras';
import  Tinou  from './Periferies/toperiferies/Tinou';

import  Argolidas  from './Periferies/toperiferies/Argolidas';
import  Arkadias  from './Periferies/toperiferies/Arkadias';
import  Korinthias  from './Periferies/toperiferies/Korinthias';
import  Lakwnias  from './Periferies/toperiferies/Lakwnias';
import  Messhnias  from './Periferies/toperiferies/Messhnias';

import  Boiwtias  from './Periferies/toperiferies/Boiwtias';
import  Euritanias  from './Periferies/toperiferies/Euritanias';
import  Eyboias  from './Periferies/toperiferies/Eyboias';
import  Fthiotidas  from './Periferies/toperiferies/Fthiotidas';
import  Fwkidas  from './Periferies/toperiferies/Fwkidas';

/********************************************/
/********************************************/

/********************************************/

function App() {

  return (

     <BrowserRouter>
     
     <a href="https://www.cs.ihu.gr/"><img src={ImgDipaeIcon} alt="Dipae.io"  text-align="left"></img></a>
     <a href="https://community.metamask.io/"><img src={Imgmetamask} alt="metamask.io"  text-align="left"   ></img></a>
     <a href="https://dimosnet.gr/"><img src={ImgDImosNetIcon} alt="DImosNet.io"  text-align="left"></img></a>
     <a href="https://geodata.gov.gr/"><img src={Imggeodata} alt="geodata.io"  text-align="left"   ></img></a>
     <a href="https://www.kodiko.gr/"><img src={Imgkodiko} alt="kodiko.io"  text-align="left"></img></a>
     <a href="http://gis.epoleodomia.gov.gr/v11/index.html#/"><img src={Imgpoleodomia} alt="poleodomia.io"  text-align="left"   ></img></a>
     <a href="https://gis.ktimanet.gr/wms/ktbasemap/default.aspx"><img src={Imgktimatologio} alt="ktimatologio.io"  text-align="left"></img></a>
     <a href="https://web3.storage/products/w3link/"><img src={ImgWeb3Storage} alt="ImgWeb3Storage.io"  text-align="left"></img></a>


  
    
      <div className ="center-navibar">

      <Link to="/RecBuldings" style={{ marginRight: 100,textDecoration: 'none' ,color: '#FFF'}}>ΕΓΓΡΑΦΗ ΚΤΙΡΙΟΥ   </Link>
        

         <Link to="/ViewBuildings" style={{ marginRight: 100,textDecoration: 'none' ,color: '#FFF'}}>ΠΡΟΒΟΛΗ ΚΤΙΡΙΟΥ   </Link>
         
         <Link to="/Periferies" style={{ marginRight: 100,textDecoration: 'none',color: '#FFF' }}>ΠΕΡΙΦΕΡΕΙΕΣ</Link>
        
         </div>
        
        <Routes>
        <Route path="/" element={<HHome/>} />
        <Route path="/Home" element={<Home/>} />
          
         <Route path="/ViewBuildings" element={<ViewBuildings/>}/>
          <Route path="/RecBuldings" element={<RecBuldings />}/>
          <Route path="/Periferies/*" element={<Periferies />}/>
         
          <Route path="/Anmaktha" element={<Anmaktha />}/>
          <Route path="/Dututikhs" element={<Dututikhs />}/>
          <Route path="/Thessalias" element={<Thessalias />}/>
          <Route path="/Krhths" element={<Krhths />}/>
          <Route path="/Stereas" element={<Stereas />}/>
          <Route path="/Attikhs" element={<Attikhs />}/>
          <Route path="/Dutmak" element={<Dutmak />}/>
          <Route path="/Ionio" element={<Ionio />}/>
          <Route path="/Naigaiou" element={<Naigaiou />}/>
          <Route path="/Baigaiou" element={<Baigaiou />}/>
          <Route path="/Hpeiros" element={<Hpeiros />}/>
          <Route path="/Kmak" element={<Kmak />}/>
          <Route path="/Pelonnos" element={<Pelonnos />}/>

          <Route path="/Drama" element={<Drama />}/>
          <Route path="/Ebrou" element={<Ebrou />}/>
          <Route path="/Kavala" element={<Kavala />}/>
          <Route path="/Rodophs" element={<Rodophs />}/>
          <Route path="/Thasou" element={<Thasou />}/>
          <Route path="/Xanthi" element={<Xanthi />}/>

          <Route path="/Anattikhs" element={<Anattikhs />}/>
          <Route path="/Btomeaathinwn" element={<Btomeaathinwn />}/>
          <Route path="/Dutattikhs" element={<Dutattikhs />}/>
          <Route path="/Dutikoutomaiaathinwn" element={<Dutikoutomaiaathinwn />}/>
          <Route path="/Kentrikoutomeathinwn" element={<Kentrikoutomeathinwn />}/>
          <Route path="/Enothtanhswn" element={<Enothtanhswn />}/>
          <Route path="/Notioutomaiathinwn" element={<Notioutomaiathinwn />}/>
          <Route path="/Enotpeiraios" element={<Enotpeiraios />}/>

          <Route path="/Ikarias" element={<Ikarias />}/>
          <Route path="/Lesbou" element={<Lesbou />}/>
          <Route path="/Lhmnou" element={<Lhmnou />}/>
          <Route path="/Samou" element={<Samou />}/>
          <Route path="/Xiou" element={<Xiou />}/>

          <Route path="/Aitolokarnanias" element={<Aitolokarnanias />}/>
          <Route path="/Axaias" element={<Axaias />}/>
          <Route path="/Hleias" element={<Hleias />}/>

          <Route path="/Florinas" element={<Florinas />}/>
          <Route path="/Grebenwn" element={<Grebenwn />}/>
          <Route path="/Kastoria" element={<Kastoria />}/>
          <Route path="/Kozanhs" element={<Kozanhs />}/>

          <Route path="/Artas" element={<Artas />}/>
          <Route path="/Iwanninwn" element={<Iwanninwn />}/>
          <Route path="/Prevezas" element={<Prevezas />}/>
          <Route path="/Thesprotias" element={<Thesprotias />}/>

          <Route path="/Karditsas" element={<Karditsas />}/>
          <Route path="/Larisas" element={<Larisas />}/>
          <Route path="/Magnisias" element={<Magnisias />}/>
          <Route path="/Sporadwn" element={<Sporadwn />}/>
          <Route path="/Trikalwn" element={<Trikalwn />}/>

          <Route path="/Zakynthou" element={<Zakynthou />}/>
          <Route path="/Ithakhs" element={<Ithakhs />}/>
          <Route path="/Kefalonias" element={<Kefalonias />}/>
          <Route path="/Kerkyras" element={<Kerkyras />}/>
          <Route path="/Leukadas" element={<Leukadas />}/>

          <Route path="/Hmathias" element={<Hmathias />}/>
          <Route path="/Kilkis" element={< Kilkis />}/>
          <Route path="/Pellas" element={<Pellas />}/>
          <Route path="/Pierias" element={<Pierias />}/>
          <Route path="/Serrwn" element={<Serrwn />}/>
          <Route path="/Thessalonikhs" element={<Thessalonikhs />}/>
          <Route path="/Xalkidikhs" element={<Xalkidikhs />}/>

          <Route path="/Hrakliou" element={<Hrakliou />}/>
          <Route path="/Lasithiou" element={<Lasithiou />}/>
          <Route path="/Rethimnou" element={<Rethimnou />}/>
          <Route path="/Xaniwn" element={<Xaniwn />}/>

          <Route path="/Androu" element={<Androu />}/>
          <Route path="/Kalumnou" element={<Kalumnou />}/>
          <Route path="/Karpathou" element={<Karpathou />}/>
          <Route path="/Kw" element={<Kw />}/>
          <Route path="/Kynthou" element={<Kynthou />}/>
          <Route path="/Mhlou" element={<Mhlou />}/>
          <Route path="/Mykonou" element={<Mykonou />}/>
          <Route path="/Naxou" element={<Naxou />}/>
          <Route path="/Parou" element={<Parou />}/>
          <Route path="/Rodou" element={<Rodou />}/>
          <Route path="/Syrou" element={<Syrou />}/>
          <Route path="/Thhras" element={<Thhras />}/>
          <Route path="/Tinou" element={<Tinou />}/>
        
          <Route path="/Argolidas" element={<Argolidas />}/>
          <Route path="/Arkadias" element={<Arkadias />}/>
          <Route path="/Korinthias" element={<Korinthias />}/>
          <Route path="/Lakwnias" element={<Lakwnias />}/>
          <Route path="/Messhnias" element={<Messhnias />}/>

          <Route path="/Boiwtias" element={<Boiwtias />}/>
          <Route path="/Euritanias" element={<Euritanias />}/>
          <Route path="/Eyboias" element={<Eyboias />}/>
          <Route path="/Fthiotidas" element={<Fthiotidas />}/>
          <Route path="/Fwkidas" element={<Fwkidas />}/>


       </Routes>



       <div className="footer">    
          <p>{Metamask()}</p>
          </div>
          
    
     </BrowserRouter>
      
    

 
  );
}

export default App;


