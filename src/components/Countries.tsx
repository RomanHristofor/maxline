import React, {useEffect} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {withLocalize, Translate, LocalizeContextProps} from 'react-localize-redux'
import { addTranslationsForActiveLanguage, getActiveLanguageInLocalStorage } from '../helpers'
import Input from './Filters/Input'
import Pagination from './Filters/Pagination'
import Loader from './common/Loader'
import NotFound from './common/NotFound'
import {filtratedCountriesSelector, loadingSelector, RootState} from '../selectors'
import {CountryType} from "../reducer/countries";
import {LangInterface} from "../reducer/languages";
import {Title, Link, CountryInfo} from './css'



type Props = {
    activeLanguage?: LangInterface,
    setActiveLanguage?: (c: string) => void
}& LocalizeContextProps

const Countries = ({
                       activeLanguage,
                       setActiveLanguage,
                       addTranslationForLanguage
                   }: Props) => {

    const countries = useSelector(
        (state: RootState) => filtratedCountriesSelector(state)
        , shallowEqual
    );
    const loading = useSelector(
        (state: RootState) => loadingSelector(state)
        , shallowEqual
    );

    useEffect(() => {
        const activeLang = getActiveLanguageInLocalStorage();
        addTranslationsForActiveLanguage(activeLanguage, addTranslationForLanguage);
        if (activeLang && (activeLanguage && activeLanguage.code !== activeLang.code)) {
            setActiveLanguage(activeLang.code);
            addTranslationsForActiveLanguage(activeLang, addTranslationForLanguage);
        }
    }, [activeLanguage, addTranslationForLanguage, setActiveLanguage]);


    const loader = loading && <Loader/>;
    const notFount = countries.length === 0 ? <NotFound/> : null;
    const countryDetails = countries.map((country: CountryType) =>
        <div key={country.id}>
            <CountryInfo display={country.name}>
                <Translate id={`country.name`}/>
                <b>{country.name}</b>
            </CountryInfo>
            <CountryInfo display={country.capital}>
                <Translate id={`country.capital`}/>
                <b>{country.capital}</b>
            </CountryInfo>
            <Link as={NavLink} to={`/maxline/${country.id}`}>
                <Translate id={`countryLink`}/>
            </Link>
            <hr/>
        </div>
    );

    return (
        <div>
            <Title primary>
                <Translate id="title"/>
            </Title>
            <Input/>
            <Link as={NavLink} to={`/maxline/codes`}>
                <Translate id="listOfCodes"/>
            </Link>
            <hr/>

            {!loading && <div>
                <div>
                    {countryDetails}
                </div>
                {notFount}
            </div>}
            {loader}

            <Pagination/>
        </div>
    )
};

export default withLocalize(Countries);
