import * as actions from './../actions/actionTypes';
import { cloneDeep } from 'lodash';

const initialState = {
    city: null,
    weatherData: []
};

const reducer = (state=initialState, action) => {
    let clonedState = cloneDeep(state);
    switch(action.type) {
        case actions.SET_WEATHER_DATA:
            clonedState.city = action.payload.city;
            clonedState.weatherData = action.payload.data;
            return clonedState;
        default: return state;
    }
}

export default reducer;
