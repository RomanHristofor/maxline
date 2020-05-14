import {createSelector} from 'reselect'
import {LanguagesInterface} from '../reducer/languages'
import {StateFiltersInterface} from '../reducer/filters'
import {StateCountryInterface} from '../reducer/countries'

export interface RootState {
    countries: StateCountryInterface
    filters: StateFiltersInterface
    languages: LanguagesInterface
}

const filtersGetter = (state: RootState) => state.filters;
const filtersCountryGetter = (state: RootState) => state.filters.countryName;
export const countryNameSelector = createSelector(
    filtersCountryGetter, countryName => countryName
);

const countryGetter = (state: RootState) => state.countries.country;
export const countrySelector = createSelector(
    countryGetter, country => country
);

const countriesGetter = (state: RootState) => state.countries;
export const countriesSelector = createSelector(
    countriesGetter, (countriesState) => {
        const {countries} = countriesState;
        return countries;
    });

const loadingGetter = (state: RootState) => state.countries.loading;
export const loadingSelector = createSelector(loadingGetter, loading => loading);
const errorGetter = (state: RootState) => state.countries.error;
export const errorSelector = createSelector(errorGetter, error => error);

export const filtratedCountriesSelector = createSelector(
    countriesGetter, filtersGetter, (countriesState, filters) => {
        const {pagination} = filters;
        const {countries} = countriesState;

        return countries
            .slice((pagination.page * pagination.pageSize) - pagination.pageSize,
                pagination.page * pagination.pageSize)
    });
