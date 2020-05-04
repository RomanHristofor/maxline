import {createSelector} from 'reselect'


const filtersGetter = (state) => state.filters;
const filtersCountryGetter = (state) => state.filters.countryName;
export const countryNameSelector = createSelector(
    filtersCountryGetter, countryName => countryName
);

const countryGetter = (state) => state.countries.country;
export const countrySelector = createSelector(
    countryGetter, country => country
);

const countriesGetter = (state) => state.countries;
export const countriesSelector = createSelector(
    countriesGetter, (countriesState) => {
        const {countries} = countriesState;
        return countries;
    });

const loadingGetter = (state) => state.countries.loading;
export const loadingSelector = createSelector(loadingGetter, loading => loading);
const errorGetter = (state) => state.countries.error;
export const errorSelector = createSelector(errorGetter, error => error);

export const filtratedCountriesSelector = createSelector(
    countriesGetter, filtersGetter, (countriesState, filters) => {
        const {pagination} = filters;
        const {countries} = countriesState;

        return countries
            .slice((pagination.page * pagination.pageSize) - pagination.pageSize,
                pagination.page * pagination.pageSize)
    });
