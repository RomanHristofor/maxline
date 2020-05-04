import {replaceLanguageStorage} from '../helpers';
import {renderToStaticMarkup} from 'react-dom/server';
import globalTranslations from '../components/translations/global.json';
import {
    CHANGE_LANGUAGES_STORAGE,
} from '../constants'


export const reducerLangState = {
    languages: [
        {name: 'EN', code: 'en', active: true},
        {name: 'RU', code: 'ru'},
    ],
    translation: globalTranslations,
    options: {renderToStaticMarkup}
}


export default (state = reducerLangState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_LANGUAGES_STORAGE:
            return {
                ...state,
                languages: replaceLanguageStorage(state.languages, payload)
            };

        default:
            return state
    }
}