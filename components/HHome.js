import React from 'react';
import Video from '../img/home.mp4';

function Home() {
  return (
    <div className='video-container' >
      <video className='bbackground-video-home' autoPlay loop muted>
      <source src={Video} type='video/mp4' />
      </video>
      
        
    </div>
  );
}
  
  export default Home;