import React, { useEffect } from 'react'
import { useDispatch, useSelector } from'react-redux'
import { getListCars } from '../../actions/carsAction'
import { Layout, Spin} from 'antd';
import '../../css/style.css'
const { Header, Content } = Layout;

function ListCars(available, year, capacity) {
    const { getListCarsResult, getListCarsLoading, getListCarsError } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        
        //panggil action getlistcars
        dispatch(getListCars(available, year, capacity));
    }, [dispatch])

    console.log(getListCarsResult);

    const colMax = 4;
    let count = -1;

    let gridRow = [];
    let gridDisplay = [];
    if(getListCarsResult) {
      getListCarsResult.map((item) => {
        if(count % colMax===0) {
          gridDisplay.push(gridRow);
          gridRow = [];
        }
        else {
          gridRow.push(item)
        }
        count++;
      })
    }

    console.log("display", gridDisplay);

    const parseRupiah = (price) => {
      return price.toLocaleString("id-ID", {
        currency: "IDR",
      })
    }
  return (
    <div id="cars-container">
         {getListCarsResult ? (getListCarsResult.map((item) => 
        (
            <div className='border rounded p-3 m-2 car-item'>
                <div className="d-flex flex-column justify-content-between h-100">
                    <img src={item.image} alt={item.manufacture} />
                    <div>            
                        <p>{item.manufacture} / {item.model}</p>
                        <p><b>Rp {parseRupiah(item.rentPerDay)}/hari</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="d-flex flex-row">
                            <img className="icon" src="img/fi_users.png" alt="seat" />
                            <p>{item.capacity} orang</p>
                        </div>   
                        <div className="d-flex flex-row">   
                            <img className="icon" src="img/fi_settings.png" alt="seat" />
                            <p>{item.transmission}</p>
                        </div> 
                        <div className="d-flex flex-row"> 
                            <img className="icon" src="img/fi_calendar.png" alt="seat" />
                            <p>Tahun {item.year}</p>   
                        </div>
                        <button className="btn">Pilih Mobil</button> 
                    </div>          
                </div>
            </div>

          )
          ))  : getListCarsLoading ? (
                <div className='no-data text-center'>
                    <Spin size="large" />
                    <h5>Loading...</h5>
                </div>
        ) : getListCarsError ? (
                <div>
                    <h5>Error</h5>
                </div>
        ) : (
            <div>
                <div className='no-data text-center alert alert-danger'>Tidak Ada Data</div>
            </div>
        )}
    </div>
  )
}

export default ListCars