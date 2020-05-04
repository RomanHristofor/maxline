import {extendsItemInCountries, removeItemInLocalStorage, pushItemInCountries} from '../helpers'
import {
    START,
    SUCCESS,
    FAIL,
    LOAD_COUNTRY_BY_NAME,
    LOAD_COUNTRY_BY_FULL_NAME,
    LOAD_COUNTRY_BY_CODE,
    LOAD_COUNTRY_BY_CURRENCY,
    GET_ENTITIES_IN_STORAGE,
    CHANGE_COUNTRY_CHECKED
} from '../constants'


export const reducerState = {
    loading: false,
    loaded: false,
    error: '',
    country: {
        isChecked: 'shortName'
    },
    countries: []
}



export default (state = reducerState, action) => {
    const {type, response, payload} = action;
    switch (type) {
        case LOAD_COUNTRY_BY_NAME + START:
        case LOAD_COUNTRY_BY_FULL_NAME + START:
        case LOAD_COUNTRY_BY_CODE + START:
        case LOAD_COUNTRY_BY_CURRENCY + START:
            return {...state, loading: true};

        case LOAD_COUNTRY_BY_NAME + SUCCESS:
        case LOAD_COUNTRY_BY_FULL_NAME + SUCCESS:
            return {
                ...state,
                countries: extendsItemInCountries(response, type),
                error: '',
                loading: false,
                loaded: true
            };

        case LOAD_COUNTRY_BY_CODE + SUCCESS:
        case LOAD_COUNTRY_BY_CURRENCY + SUCCESS:
            return {
                ...state,
                countries: pushItemInCountries(state.countries, response, type),
                error: '',
                loading: false,
                loaded: true
            };

        case GET_ENTITIES_IN_STORAGE:
            return {
                ...state,
                countries: payload,
            };

        case CHANGE_COUNTRY_CHECKED:
            return {
                ...state,
                country: payload,
            };

        case LOAD_COUNTRY_BY_NAME + FAIL:
        case LOAD_COUNTRY_BY_FULL_NAME + FAIL:
        case LOAD_COUNTRY_BY_CURRENCY + FAIL:
            removeItemInLocalStorage(type);
            return {
                ...state,
                countries: [],
                error: 'Not found',
                loading: false
            };

        default:
            return state
    }
}