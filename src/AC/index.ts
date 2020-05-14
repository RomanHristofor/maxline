import {
    LOAD_COUNTRY_BY_NAME,
    LOAD_COUNTRY_BY_FULL_NAME,
    LOAD_COUNTRY_BY_CODE,
    LOAD_COUNTRY_BY_CURRENCY,
    INPUT_COUNTRY_NAME,
    CHANGE_PAGES,
    CHANGE_COUNTRY_CHECKED,
    CHANGE_LANGUAGES_STORAGE,
    HOST,
    GET_ENTITIES_IN_STORAGE
} from '../constants'
import {ActionType} from '../reducer/filters'
import {LangInterface} from '../reducer/languages'
import {CountryType} from '../reducer/countries'



export function loadCountryByShortName(str: string) {
    return {
        type: LOAD_COUNTRY_BY_NAME,
        callAPI: `${HOST}name/${str}`
    }
}

export function loadCountryByFullName(str: string) {
    return {
        type: LOAD_COUNTRY_BY_FULL_NAME,
        callAPI: `${HOST}name/${str}?fullText=true`
    }
}

export function loadCountryByCode(str: string) {
    return {
        type: LOAD_COUNTRY_BY_CODE,
        payload: true,
        callAPI: str.includes(';') ? `${HOST}alpha?codes=${str}` : `${HOST}alpha/${str}`
    }
}

export function loadCountryByCurrency(str: string) {
    return {
        type: LOAD_COUNTRY_BY_CURRENCY,
        payload: true,
        callAPI: `${HOST}currency/${str}`
    }
}

export function inputFiltratedByName(value: string) {
    return {
        type: INPUT_COUNTRY_NAME,
        payload: value
    }
}

export function changePages(payload: ActionType) {
    return {
        type: CHANGE_PAGES,
        payload
    }
}

export function changeCountryChecked(country: CountryType) {
    return {
        type: CHANGE_COUNTRY_CHECKED,
        payload: country
    }
}

export function changeLanguageStorage(lang: LangInterface) {
    return {
        type: CHANGE_LANGUAGES_STORAGE,
        payload: lang
    }
}

export function getEntitiesInLocalStorage(entities: CountryType[]) {
    return {
        type: GET_ENTITIES_IN_STORAGE,
        payload: entities
    }
}