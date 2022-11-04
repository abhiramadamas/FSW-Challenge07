import '../../css/style.css'
import { getListCars } from '../../actions/carsAction'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DatePicker } from 'antd'
const useState = React.useState
const useEffect = React.useEffect

function CarsPage() {

  const [available, setAvailable] = useState(null)
  const [year, setYear] = useState(null)
  const [capacity, setCapacity] = useState(null)

  const handleSetAvailable = (e) => {
    setAvailable(e.target.value)
  }

  const handleSetCapacity = (e) => {
    setCapacity(e.target.value)
  }

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    console.log("tes", available, typeof(available), year, typeof(year), capacity, typeof(capacity))
    dispatch(getListCars(available, year, capacity))
    e.preventDefault()
  }

  return (
  <div>
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
            <li className="nav-item"><a className="nav-link" href="/#our-service">Our Service</a></li>
            <li className="nav-item"><a className="nav-link" href="/#why-us">Why Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/#testimonial">Testimonial</a></li>
            <li className="nav-item"><a className="nav-link" href="/#faq">FAQ</a></li>
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
    </div>
    <img className="col-md-auto p-0" src="img/img_car.png" alt />
  </article>
  {/* Search Car */}
  <form id="search" className="container p-3 rounded" onSubmit={handleSubmit}>
    <div className="row align-items-end">
      <div className="col">
        <p>Tipe Driver</p>
        <select className="btn-select form-select" aria-label="Default select example" onChange={handleSetAvailable}>
          <option selected>Pilih Tipe Driver</option>
          <option value={true}>Dengan Sopir</option>
          <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
        </select>
      </div>
      <div className="col">
        <p>Tanggal</p>
        <div className="dropdown">
          <DatePicker picker="year" className="btn-select rounded" onChange={(date, dateString)=>{
            const year = dateString.split('-')[0]
            setYear(year)}} />
        </div>
      </div>
      <div className="col">
        <p>Waktu Jemput/Ambil</p>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="waktu-jemput" data-bs-toggle="dropdown" aria-expanded="false">
            Pilih Waktu
            <img src="./img/fi_clock.png" />
          </button>
          <ul id="waktu-jemput-list" className="dropdown-menu" aria-labelledby="waktu-jemput">
            <li><a className="dropdown-item waktu-jemput-item">-none-</a></li>
            <li><a className="dropdown-item waktu-jemput-item">8.00</a></li>
            <li><a className="dropdown-item waktu-jemput-item">9.00</a></li>
            <li><a className="dropdown-item waktu-jemput-item">10.00</a></li>
            <li><a className="dropdown-item waktu-jemput-item">11.00</a></li>
            <li><a className="dropdown-item waktu-jemput-item">12.00</a></li>
          </ul>
        </div>
      </div>
      <div className="col">
        <p>Jumlah Penumpang (optional)</p>
        <select className="btn-select form-select" aria-label="Default select example" onChange={handleSetCapacity}>
          <option selected>Jumlah Penumpang</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        {/* <input id="jumlahPenumpang" className="btn btn-secondary dropdown-toggle" placeholder="Jumlah Penumpang" type="text" /> */}
      </div>
      <div className="col-2 text-center">
        <button id="search-btn" type="submit" className="btn">Cari Mobil</button>
      </div>
    </div>
  </form>
  
  {/* script */}
  {/*  */}
</div>

  )
}

export default CarsPage

