import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="row">
    <div className="col pr-5">
      <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p>
      <p>081-233-334-808</p>
    </div>
    <div className="col pr-5 d-flex flex-column">
      <a className="mb-3 font-weight-bold" href="#our-service">Our Service</a>
      <a className="mb-3 font-weight-bold" href="#why-us">Why Us</a>
      <a className="mb-3 font-weight-bold" href="#testimonial">Testimonial</a>
      <a className="mb-3 font-weight-bold" href="#faq">FAQ</a>
    </div>
    <div className="col pr-5 mb-3">
      <p>Connect with us</p>
      <div className="d-flex">
        <a href><img className="mr-3" src="img/icon_facebook.svg" alt /></a>
        <a href><img className="mr-3" src="img/icon_instagram.svg" alt /></a>
        <a href><img className="mr-3" src="img/icon_twitter.svg" alt /></a>
        <a href><img className="mr-3" src="img/icon_mail.svg" alt /></a>
        <a href><img src="img/icon_twitch.svg" alt /></a>
      </div>
    </div>
    <div className="col">
      <p>Copyright Binar 2022</p>
      <a className="navbar-brand" href="#home">Binar Car Rental</a>
    </div>
  </footer>
  )
}

export default Footer