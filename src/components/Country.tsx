import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {withLocalize, Translate, LocalizeContextProps} from 'react-localize-redux'
import {addTranslationsForActiveLanguage, getActiveLanguageInLocalStorage} from '../helpers'
import {ListWrap, CountryInfo, CountryFlag} from './css'
import {RootState} from '../selectors'
import {LangInterface} from "../reducer/languages"
import {CountryType} from "../reducer/countries"


type Props = {
    id: string,
    country?: CountryType,
    activeLanguage?: LangInterface,
    setActiveLanguage?: (c: string) => void,
}

class Country extends Component<Props & LocalizeContextProps> {

    componentDidUpdate(prevProps: Props) {
        const {activeLanguage, setActiveLanguage, addTranslationForLanguage} = this.props;
        const activeLang = getActiveLanguageInLocalStorage();

        addTranslationsForActiveLanguage(activeLanguage, addTranslationForLanguage);
        if (activeLang && (prevProps.activeLanguage && prevProps.activeLanguage.code !== activeLang.code)) {
            setActiveLanguage(activeLang.code);
            addTranslationsForActiveLanguage(activeLang, addTranslationForLanguage);
        }
    }

    render() {
        const {country} = this.props;
        if (!country)
            return <Redirect to='/maxline'/>;

        return (
            <ListWrap>
                {this.getBody()}
            </ListWrap>
        )
    }

    getBody() {
        const {country} = this.props;
        if (!country) return null;
        const timezones = country.timezones && country.timezones[0];
        const borders = country.borders && country.borders[0];
        const currencies = country.currencies && country.currencies[0];
        const languages = country.languages && country.languages[0];
        const translations = country.translations ? Object.entries(country.translations) : [];
        const regionalBlocs = country.regionalBlocs && country.regionalBlocs[0];
        return (
            <section>
                <h2>
                    <Translate id="countryTitleName" data={{name: country.name}}>
                        {'Country: ${name}'}
                    </Translate>
                </h2>
                <CountryInfo display={country.name}>
                    <Translate id={`country.name`}/>
                    <b>{country.name}</b>
                </CountryInfo>
                <CountryFlag src={`${country.flag}`} alt="Preview"/>
                <br/>
                <CountryInfo display={country.capital}>
                    <Translate id={`country.capital`}/>
                    <b>{country.capital}</b>
                </CountryInfo>
                <CountryInfo display={country.region}>
                    <Translate id={`country.region`}/>
                    <b>{country.region}</b>
                </CountryInfo>
                <CountryInfo display={country.subregion}>
                    <Translate id={`country.subregion`}/>
                    <b>{country.subregion}</b>
                </CountryInfo>
                <CountryInfo display={country.population}>
                    <Translate id={`country.population`}/>
                    <b>{country.population}</b>
                </CountryInfo>
                <CountryInfo display={country.demonym}>
                    <Translate id={`country.demonym`}/>
                    <b>{country.demonym}</b>
                </CountryInfo>
                <CountryInfo display={country.area}>
                    <Translate id={`country.area`}/>
                    <b>{country.area}</b>
                </CountryInfo>
                <CountryInfo display={country.gini}>
                    <Translate id={`country.gini`}/>
                    <b>{country.gini}</b>
                </CountryInfo>
                <CountryInfo display={country.nativeName}>
                    <Translate id={`country.nativeName`}/>
                    <b>{country.nativeName}</b>
                </CountryInfo>
                <CountryInfo display={country.numericCode}>
                    <Translate id={`country.numericCode`}/>
                    <b>{country.numericCode}</b>
                </CountryInfo>
                <CountryInfo display={timezones}>
                    <Translate id={`country.timezones`}/>
                    {Array.isArray(timezones) && timezones.map((time, i) => (<b key={i}>{time}</b>))}
                </CountryInfo>
                <CountryInfo display={borders}>
                    <Translate id={`country.borders`}/>
                    {Array.isArray(borders) && borders.map((border, i) => (<b key={i}>{border},</b>))}
                </CountryInfo>
                <CountryInfo display={currencies}>
                    <Translate id={`country.currencies`}/>
                    {Array.isArray(currencies) && currencies.map((currency, i) => (
                        <b key={i}>{currency.code}, {currency.name}, {currency.symbol}</b>
                    ))}
                </CountryInfo>
                <CountryInfo display={languages}>
                    <Translate id={`country.languages`}/>
                    {Array.isArray(languages) && languages.map((lang, i) => (
                        <b key={i}>{lang.name}, {lang.nativeName}</b>
                    ))}
                </CountryInfo>
                <CountryInfo display={translations}>
                    <Translate id={`country.translations`}/>
                    {translations.map(([k, v]) => (
                        <Fragment key={k}><b>{k}: </b> {v}, </Fragment>
                    ))}
                </CountryInfo>
                <CountryInfo display={regionalBlocs}>
                    <Translate id={`country.regionalBlocs`}/>
                    {Array.isArray(regionalBlocs) && regionalBlocs.map((regional, i) => (
                        <b key={i}>{regional.name}, </b>
                    ))}
                </CountryInfo>
                <CountryInfo display={country.cioc}>
                    <Translate id={`country.cioc`}/>
                    <b>{country.cioc}</b>
                </CountryInfo>
            </section>
        )
    }
}

export default connect((state: RootState, ownProps: Props) => ({
    country: state.countries.countries.find((c: CountryType) => c.id === ownProps.id),
}))(withLocalize(Country))
