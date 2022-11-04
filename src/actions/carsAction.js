import axios from 'axios'

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = (available, year, capacity) => {
    if(available === "true" && available) available = true
    else if(available === "false" && available) available = false
    if(year) year = parseInt(year)
    if(capacity) capacity = parseInt(capacity)

    return(dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_CARS,
            payload: {
                loading: true,
                data: null,
                error: null
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout: 120000
        })
            .then((response) => {
                //berhasil get api
                console.log("tes3", available, year, capacity);
                let data;
                if ((available!==undefined || available!==null) && year && capacity) {
                    data = response.data.filter((car) => {
                        return car.available == available && car.year == year && car.capacity == capacity
                    });
                    console.log("tes1", data);
                }
                else {
                    data=response.data;
                }
                if(data.length <= 0) {
                    dispatch({
                        type: GET_LIST_CARS,
                        payload:{
                            loading: false,
                            data: null,
                            error: null
                        },
                    })
                }
                else {
                    dispatch({
                        type: GET_LIST_CARS,
                        payload: {
                            loading: false,
                            data: data,
                            error: null
                        },
                    })
                }
            }) 
            .catch((error) => {
                dispatch({
                    type: GET_LIST_CARS,
                    payload: {
                        loading: false,
                        data: null,
                        error: error
                    },
                })
            })

    }
}