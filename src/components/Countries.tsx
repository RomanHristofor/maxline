import React, {Component} from 'react'
import {connect} from 'react-redux'
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
    countries: CountryType[],
    loading?: boolean,
    activeLanguage?: LangInterface,
    setActiveLanguage?: (c: string) => void,
}

class Countries extends Component<Props & LocalizeContextProps> {

    componentDidMount() {
        const {setActiveLanguage, addTranslationForLanguage} = this.props;
        const activeLang = getActiveLanguageInLocalStorage();

        if (activeLang) {
            setActiveLanguage(activeLang.code);
            addTranslationsForActiveLanguage(activeLang, addTranslationForLanguage);
        }
    }

    componentDidUpdate() {
        const {activeLanguage, setActiveLanguage, addTranslationForLanguage} = this.props;
        const activeLang = getActiveLanguageInLocalStorage();

        addTranslationsForActiveLanguage(activeLanguage, addTranslationForLanguage);
        if (activeLang && (activeLanguage.code !== activeLang.code)) {
            setActiveLanguage(activeLang.code);
            addTranslationsForActiveLanguage(activeLang, addTranslationForLanguage);
        }
    }

    render() {
        const {loading, countries} = this.props;
        const loader = loading && <Loader/>;
        const notFount = countries.length === 0 ? <NotFound/> : null;
        const countryDetails = countries.map(country =>
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
                    <Translate id="title" />
                </Title>
                <Input />
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

                <Pagination />
            </div>
        )
    }
}

export default connect((state: RootState) => ({
    countries: filtratedCountriesSelector(state),
    loading: loadingSelector(state),
}))(withLocalize(Countries))

