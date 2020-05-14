import {defaultFilters} from "./reducer/filters"
import {LangInterface} from './reducer/languages'
import {CountryType, ResponseType} from './reducer/countries'

export type Request = {
    q: string
    type: string
    response: boolean
}

export function extendsItemInCountries(countries: CountryType[], type: string) {
    const entities = countries.map((item, i) => {
        item.id = i.toString();
        return item;
    });
    setRequestInLocalStorage(entities, type, true);
    return entities;
}

export function setRequestInLocalStorage(entities: CountryType[], type: string, response: boolean) {
    const q = defaultFilters.countryName.toLowerCase();
    let request = getLocalStorage('request') || [];

    if (request.length === 0) {
        request = setInitialRequest(type, response);
    }

    if (q && type && response) {
        const findRequest = request.filter(
            (i: Request) => i.q === q && i.type === type && i.response === response
        );

        if (findRequest.length === 1) {
            const idx = request.findIndex(
                (i: Request) => i.q === q && i.type === type && i.response === response
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

export function setInitialRequest(type: string, response: boolean) {
    const q = defaultFilters.countryName.toLowerCase();
    let request = {q:'',type:'',response: false};
    if (q && type && response) {
        request.q = q;
        request.type = type;
        request.response = response;
        setLocalStorage([request]);
    }
    return [request];
}

function setLocalStorage(request: Request[]) {
    localStorage.setItem('request', JSON.stringify(request));
}

export function getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

export function getRequestInLocalStorage(q: string, type = 'LOAD_COUNTRY_BY_NAME_SUCCESS') {
    const request = getLocalStorage('request');

    if (request && request.length)
        return request.find((i: Request) => i.q === q && i.type === type);
}


export function pushItemInCountries(countries: CountryType[], response: ResponseType, type: string) {
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

export function removeItemInLocalStorage(type: string) {
    const request = getLocalStorage('request');
    const q = defaultFilters.countryName;
    const idx = request.findIndex(
        (i: Request) => i.q === q && i.type === type
    );
    if (idx !== -1)
        request.splice(idx, 1);
    setLocalStorage(request);
}


export function addTranslationsForActiveLanguage(lang: LangInterface, fn: any) {
    if (!lang) return;

    import(`./components/translations/${lang.code}.country.json`)
        .then(translations => {
            fn(translations, lang.code)
        });
}

export function isIncludedSubstring(str: string, subStr: string) {
    return str.toLowerCase().includes(subStr.toLowerCase());
}

export function replaceLanguageStorage(stateLanguages: LangInterface[], localStorageLang: LangInterface) {
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

    if (activeStorageLang.length)
        return activeStorageLang.find((i: LangInterface) => i.active);
}
