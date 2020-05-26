import {
    CHANGE_PAGES,
    INPUT_COUNTRY_NAME
} from '../constants'

export const defaultFilters = {
    countryName: '',
    pagination: {
        page: 1,
        pageSize: 5,
    },
};
export type StateFiltersInterface = typeof defaultFilters;

export type PaginationType = {
    page: number
    pageSize: number
}
export type ActionType = {
    type: string
    payload: string
}

export default (state = defaultFilters, action: ActionType) => {
    const {type, payload} = action;

    switch (type) {
        case INPUT_COUNTRY_NAME:
            defaultFilters.countryName = payload;
            return {...state, ...defaultFilters};

        case CHANGE_PAGES:
            return {...state, pagination: payload};

        default:
            return state
    }
}