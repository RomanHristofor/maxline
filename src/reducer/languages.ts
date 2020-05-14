import {replaceLanguageStorage} from '../helpers';
import { renderToStaticMarkup } from 'react-dom/server';
import globalTranslations from '../components/translations/global.json';
import {CHANGE_LANGUAGES_STORAGE} from '../constants'


export type LangInterface = {
    name: string
    code: string
    active?: boolean
}

export type ActionType = {
    type: string
    payload: LangInterface & LangInterface[]
}

export type LanguagesInterface = typeof reducerState

export const reducerState = {
    languages: [
        {name: 'EN', code: 'en', active: true},
        {name: 'RU', code: 'ru'},
    ],
    translation: globalTranslations,
    options: {renderToStaticMarkup}
}


export default (state = reducerState, action: ActionType) => {
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