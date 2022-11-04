import {GET_LIST_CARS} from '../../actions/carsAction'

const initialState = {
    getListCarsResult : false,
    getListCarsLoading : false,
    getListCarskError : false

}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_CARS:
            return {
                ...state,
                getListCarsResult: action.payload.data,
                getListCarsLoading: action.payload.loading,
                getListCarsError: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default cars