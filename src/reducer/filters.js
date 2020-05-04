import {
    CHANGE_PAGES,
    INPUT_COUNTRY_NAME
} from '../constants'

export const defaultFilters = {
    countryName: '',
    pagination: {
        page: 1,
        pageSize: 10,
    },
};


export default (state = defaultFilters, action) => {
    const {type, payload} = action;

    switch (type) {
        case INPUT_COUNTRY_NAME:
            defaultFilters.countryName = payload;
            return {...state, ...defaultFilters}

        case CHANGE_PAGES:
            return {...state, pagination: payload};

        default:
            return state
    }
}