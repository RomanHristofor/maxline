import React, {useEffect} from 'react'
import {useRoutes, HookRouter} from "hookrouter"
import LanguageToggle from './common/LanguageToggle'
import {withLocalize, LocalizeContextProps} from 'react-localize-redux'
import CountryCodeList from './Filters/CountryCode'
import {getLocalStorage} from '../helpers'
import {reducerState, LanguagesInterface} from '../reducer/languages'
import Country from './Country'
import Countries from './Countries'
import {Main} from './css'


type Props = {
    reducerState: LanguagesInterface
} & LocalizeContextProps

const Routes = (props: Props) => {
    const activeStorageLang = getLocalStorage('lang');
    localStorage.removeItem('request');

    useEffect(() => {
        if (activeStorageLang.length) {
            reducerState.languages = activeStorageLang;
            props.initialize(reducerState);
        } else {
            props.initialize(reducerState);
        }
    }, []);

    const routes = {
        '/maxline': () => <Countries/>,
        '/maxline/codes': () => <CountryCodeList/>,
        '/maxline/:id': ({id}: HookRouter.QueryParams) => <Country id={id} key={id}/>
    };

    return (
        <Main>
            <LanguageToggle/>
            {useRoutes(routes)}
        </Main>
    )
};

export default withLocalize(Routes);