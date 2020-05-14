import {combineReducers} from 'redux'
import { localizeReducer } from 'react-localize-redux';

import countries from './countries'
import filters from './filters'
import languages from './languages'

export default combineReducers({
    localize: localizeReducer,
    languages,
    countries,
    filters
})