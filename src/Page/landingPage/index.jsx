import '../../css/style.css';
import React from 'react'

function Landing() {
  return (
    <div>
  {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css" />
  <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css" />
  <link rel="stylesheet" href="./css/style.css" /> */}
  {/* Navbar */}
  <header>
    <nav className="navbar navbar-expand-lg fixed-top pxc-7">
      <a className="navbar-brand" href="/">Binar Car Rental</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end w-50" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <a className="navbar-brand" href="/">BCR</a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item"><a className="nav-link" href="#our-service">Our Service</a></li>
            <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonial</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
            <li className="nav-item"><button className="btn" onclick>Register</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* Home */}
  <article id="home" className="row align-items-end">
    <div className="col home-content align-self-center">
      <h2 className="mb-5 font-weight-bold">Sewa &amp; Rental Mobil Terbaik di kawasan Surabaya</h2>
      <p className="mb-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
      {/* <button class="btn">Mulai Sewa Mobil</button> */}
      <a href="/cars" className="btn">Mulai Sewa Mobil</a>
    </div>
    <img className="col-md-auto p-0" src="img/img_car.png" alt />
  </article>
  {/* Our Service */}
  <article id="our-service" className="pxc-7 row align-items-center">
    <img className="col-md-auto" src="img/img_service.png" alt />
    <div className="col">
      <h3 className="font-weight-bold mb-4">Best Car Rental for any kind of trip in Surabaya!</h3>
      <p className="mb-4">Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
      <ul>
        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
        <li>Sewa Mobil Jangka Panjang Bulanan</li>
        <li>Gratis Antar - Jemput Mobil di Bandara</li>
        <li>Layanan Airport Transfer / Drop In Out</li>
      </ul>
    </div>
  </article>
  {/* Why Us */}
  <article id="why-us" className="d-flex flex-column justify-content-center pxc-7">
    <h3 className="font-weight-bold mb-3">Why Us?</h3>
    <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
    <div className="card-deck">
      <div className="card d-flex flex-column justify-content-between">
        <img className="icon-card" src="img/icon_complete.svg" alt />
        <h5 className="font-weight-bold">Mobil Lengkap</h5>
        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
      </div>
      <div className="card d-flex flex-column justify-content-between">
        <img className="icon-card" src="img/icon_price.svg" alt />
        <h5 className="font-weight-bold">Harga Murah</h5>
        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
      </div>
      <div className="card d-flex flex-column justify-content-between">
        <img className="icon-card" src="img/icon_24hrs.svg" alt />
        <h5 className="font-weight-bold">Layanan 24 Jam</h5>
        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
      </div>
      <div className="card d-flex flex-column justify-content-between">
        <img className="icon-card" src="img/icon_professional.svg" alt />
        <h5 className="font-weight-bold">Sopir Profesional</h5>
        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
      </div>
    </div>
  </article>
  {/* Testimonial */}
  <article id="testimonial">
    <div id="testimonial-content" className="d-flex flex-column align-items-center justify-content-center">
      <h3 className="font-weight-bold mb-3">Testimonial</h3>
      <p className="mx-5 text-center">Berbagai review positif dari para pelanggan kami</p>
      <div className="owl-carousel">
        <div className="item">
          <div className="card card-testi d-flex align-items-center">
            {/* <!-- <img src="img/img_photo2.png" alt style={{width: 70, height: 'fit-content'}} /> --> */}
            <div className="d-flex flex-column">
              {/* <!-- <img src="img/rate.svg" alt style={{width: 100, height: 'fit-content'}} /> --> */}
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <h5 className="font-weight-bold">John Dee 32, Bromo</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card-testi d-flex align-items-center">
            {/* <!-- <img src="img/img_photo3.png" alt style={{width: 70, height: 'fit-content'}} /> --> */}
            <div className="d-flex flex-column">
              {/* <!-- <img src="img/rate.svg" alt style={{width: 100, height: 'fit-content'}} /> --> */}
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <h5 className="font-weight-bold">John Dee 32, Bromo</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card-testi d-flex align-items-center">
            {/* <!-- <img src="img/img_photo2.png" alt style={{width: 70, height: 'fit-content'}} /> --> */}
            <div className="d-flex flex-column">
              {/* <!-- <img src="img/rate.svg" alt style={{width: 100, height: 'fit-content'}} /> --> */}
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <h5 className="font-weight-bold">John Dee 32, Bromo</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card card-testi d-flex align-items-center">
            {/* <!-- <img src="img/img_photo3.png" alt style={{width: 70, height: 'fit-content'}} /> --> */}
            <div className="d-flex flex-column">
              {/* <!-- <img src="img/rate.svg" alt style={{width: 100, height: 'fit-content'}} /> --> */}
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <h5 className="font-weight-bold">John Dee 32, Bromo</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner sewa */}
    <div id="banner-sewa" className="d-flex align-items-center justify-content-center pxc-7">
      <div className="container banner d-flex flex-column align-items-center">
        <h2 className="font-weight-bold mb-4 text-center">Sewa Mobil di Surabaya Sekarang</h2>
        <p className="mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/cars" className="btn">Mulai Sewa Mobil</a>
      </div>
    </div>
  </article>
  {/* FAQ */}
  <article id="faq" className="row">
    <div className="col-md-auto">
      <h3 className="font-weight-bold">Frequently Asked Question</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div className="col faq-accordion">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Apa saja syarat yang dibutuhkan?</button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Berapa hari minimal sewa mobil lepas kunci?</button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Apakah Ada biaya antar-jemput?</button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Bagaimana jika terjadi kecelakaan</button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
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
</div>

  )
}

export default Landing

