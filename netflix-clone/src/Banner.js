import React, { useEffect, useState } from 'react'
import './CSS/Banner.css'
import axios from 'axios';
import requests from './Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const request =  await axios.get(requests.fetchTrending);
          setMovie( 
              request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
           ]
          );
          return request;
        }
        fetchData();
      }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header 
    className='banner'
     style={{
        backgroundSize: "cover", 
        backgroundImage: `url("https://w0.peakpx.com/wallpaper/896/738/HD-wallpaper-black-banner.jpg")`,
        backgroundPosition: "center center",
      }}>

        <div className='banner_contents'>
          <h1 className='banner-title'>Movie Name</h1>
          <div className='banner_bttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner-description'>{truncate(`This is a test descr`, 100)}</h1>
        </div>

        <div className='banner-fadebottom'/>
    </header>
  )
}


export default Banner
 