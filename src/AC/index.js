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


export function loadCountryByShortName(str) {
    return {
        type: LOAD_COUNTRY_BY_NAME,
        callAPI: `${HOST}name/${str}`
    }
}

export function loadCountryByFullName(str) {
    return {
        type: LOAD_COUNTRY_BY_FULL_NAME,
        callAPI: `${HOST}name/${str}?fullText=true`
    }
}

export function loadCountryByCode(str) {
    return {
        type: LOAD_COUNTRY_BY_CODE,
        payload: true,
        callAPI: str.includes(';') ? `${HOST}alpha?codes=${str}` : `${HOST}alpha/${str}`
    }
}

export function loadCountryByCurrency(str) {
    return {
        type: LOAD_COUNTRY_BY_CURRENCY,
        payload: true,
        callAPI: `${HOST}currency/${str}`
    }
}

export function inputFiltratedByName(str) {
    return {
        type: INPUT_COUNTRY_NAME,
        payload: str,
    }
}

export function changePages(page) {
    return {
        type: CHANGE_PAGES,
        payload: page
    }
}

export function changeCountryChecked(country) {
    return {
        type: CHANGE_COUNTRY_CHECKED,
        payload: country
    }
}

export function changeLanguageStorage(lang) {
    return {
        type: CHANGE_LANGUAGES_STORAGE,
        payload: lang
    }
}

export function getEntitiesInLocalStorage(entities) {
    return {
        type: GET_ENTITIES_IN_STORAGE,
        payload: entities
    }
}
