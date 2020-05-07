import {defaultFilters} from "./reducer/filters"

export function extendsItemInCountries(countries, type) {
    const entities = countries.map((item, i) => {
        item.id = i.toString();
        return item;
    });
    setRequestInLocalStorage(entities, type, true);
    return entities;
}

export function setRequestInLocalStorage(entities, type, response) {
    const q = defaultFilters.countryName.toLowerCase();
    let request = getLocalStorage('request') || [];

    if (request.length === 0) {
        request = setInitialRequest(type, response);
    }

    if (q && type && response) {
        const findRequest = request.filter(
            i => i.q === q && i.type === type && i.response === response
        );

        if (findRequest.length === 1) {
            const idx = request.findIndex(
                i => i.q === q && i.type === type && i.response === response
            );
            findRequest[0].entities = entities;
            request.splice(idx, 1, findRequest[0]);
            setLocalStorage(request);
        }
        if (findRequest.length === 0) {
            request.push({q: q, type: type, response: response, entities: entities});
            setLocalStorage(request);
        }
    }
}

export function setInitialRequest(type, response) {
    const q = defaultFilters.countryName.toLowerCase();
    let request = {};
    if (q && type && response) {
        request.q = q;
        request.type = type;
        request.response = response;
        setLocalStorage([request]);
    }
    return [request];
}

function setLocalStorage(request) {
    localStorage.setItem('request', JSON.stringify(request));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getRequestInLocalStorage(q, type = 'LOAD_COUNTRY_BY_NAME_SUCCESS') {
    const request = getLocalStorage('request');

    if (request && request.length)
        return request.find(i => i.q === q && i.type === type);
}

export function pushItemInCountries(countries, response, type) {
    if (!response.status && !response.message) {
        if (Array.isArray(response)) {
            return extendsItemInCountries(
                response.filter(i => i !== null), type
            );
        }
        countries = [];
        countries.push(response);
        return extendsItemInCountries(countries, type);
    }
    removeItemInLocalStorage(type);
    return [];
}

export function removeItemInLocalStorage(type) {
    const request = getLocalStorage('request');
    const q = defaultFilters.countryName;
    const idx = request.findIndex(
        i => i.q === q && i.type === type
    );
    if (idx !== -1)
        request.splice(idx, 1);
        setLocalStorage(request);
}

export function addTranslationsForActiveLanguage(lang, fn) {
    if (!lang) return;

    import(`./components/translations/${lang.code}.country.json`)
        .then(translations => {
            fn(translations, lang.code)
        });
}

export function isIncludedSubstring(str, subStr) {
    return str.toLowerCase().includes(subStr.toLowerCase());
}

export function replaceLanguageStorage(stateLanguages, localStorageLang) {
    const idx = stateLanguages.findIndex(a => !a.active);
    const revertItemActive = stateLanguages.map(i => {
        if (i.active)
            i.active = !i.active;
        return i;
    });
    revertItemActive.splice(idx, 1, localStorageLang);
    localStorage.setItem('lang', JSON.stringify(revertItemActive));
    // window.location.reload();
    return revertItemActive;
}

export function getActiveLanguageInLocalStorage() {
    const activeStorageLang = getLocalStorage('lang');

    if (activeStorageLang)
        return activeStorageLang.find(i => i.active);
}