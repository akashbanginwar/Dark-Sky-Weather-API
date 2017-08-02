import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
        const data = {data: action.payload.data, city: action.city};
        return [  data, ...state ];
        
    }
    return state;
}