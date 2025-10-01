import React from 'react'
import './Banner.scss'
// import banner1 from '../../assets/svg/banner1.svg'
import banner2 from '../../assets/svg/banner2.svg'
import banner3 from '../../assets/svg/banner3.svg'
import banner4 from '../../assets/svg/banner4.svg'
import banner5 from '../../assets/svg/banner5.svg'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div className='banner'>
      <div className="banner-cont">
        <Link to="/fvd"className='hhh1'>
            <h1>Скидки -6% на все букеты по предзаказу на 8 марта</h1>
        </Link>
        <div className="bbimg">
      <Link to="/jhnk"><img src={banner2} alt="" /></Link> 
      <Link to="/jhnk"><img src={banner3} alt="" /> </Link> 
      <Link to="/jhnk"><img src={banner4} alt="" /></Link> 
      <Link to="/jhnk"> <img src={banner5} alt="" /></Link> 
        </div>
      </div>
    
    </div>
  )
}

export default Banner
