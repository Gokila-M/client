import React, { useState } from 'react'
import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {

  const [slideNumber,setSlideNumber]=useState(0)
  const [open,setOpen]=useState(false)
  const HandleOpen =(i)=>{
  setSlideNumber(i);
   setOpen(true)
  }

  const photos=[
    {
      src:"https://i.pinimg.com/736x/ff/1a/28/ff1a28ce0b069680db9164630eadab94.jpg"
    },
    {
      src:"https://i.pinimg.com/736x/0e/fa/90/0efa903a9d631f0bceb02f342bfead35.jpg"
    },
    {
      src:"https://i.pinimg.com/736x/b0/69/ea/b069ea9ab2a2907a67aa93e7cc50346d.jpg"
    },
    {
      src:"https://i.pinimg.com/originals/0d/da/48/0dda4827376b8478e2c35842e2f131de.jpg"
    },
    {
      src:"https://i.pinimg.com/474x/9d/ac/10/9dac1047632453a2b004119acf45371d.jpg"
    },
    {
      src:"https://i.pinimg.com/236x/fb/ce/ae/fbceaecd49171f5d37c14270a048e214.jpg"
    },
    

  ]
  return (
    <div>
      <Navbar/>
      <Header type="List" />
      <div className="hotelContainer">
       { open &&
       <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} />
               <FontAwesomeIcon icon={faCircleArrowLeft} />
               <div className="slideWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve Or BookNow !     </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton st 125 New York</span>
          </div>  
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighLight">Book a Stay Over $114 at ythis Property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} onClick={()=>HandleOpen(i)} alt="" className="hotelImg" />
              </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              Aparthotel Stare Miasto is situated in the very centre of Kraków’s Old Town, 
              just 120 metres from the Main Market Square. It features spacious modern apartments with free WiFi.
              Set in the centre of Kraków, within 500 metres of St.
               Mary's Basilica and 600 metres of Lost Souls Alley,
               Grace Apartments offers accommodation with free WiFi
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for 9-night stay</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8 !</span>
              <h2><b>$945</b>(9 nights)</h2>
              <button>Resserve or Book Now !</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
