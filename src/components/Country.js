import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {withLocalize, Translate} from 'react-localize-redux'
import {addTranslationsForActiveLanguage, getActiveLanguageInLocalStorage} from '../helpers'
import {ListWrap, CountryInfo, CountryFlag} from './css'


class Country extends Component {

    componentDidUpdate(prevProps) {
        const {activeLanguage, setActiveLanguage, addTranslationForLanguage} = this.props;
        const activeLang = getActiveLanguageInLocalStorage();

        addTranslationsForActiveLanguage(activeLanguage, addTranslationForLanguage);
        if (activeLang && (prevProps.activeLanguage.code !== activeLang.code)) {
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
                <CountryInfo display={country.timezones[0]}>
                    <Translate id={`country.timezones`}/>
                    {country.timezones.map((time, i) => (<b key={i}>{time}</b>))}
                </CountryInfo>
                <CountryInfo display={country.borders[0]}>
                    <Translate id={`country.borders`}/>
                    {country.borders.map((border, i) => (<b key={i}>{border},</b>))}
                </CountryInfo>
                <CountryInfo display={country.currencies[0]}>
                    <Translate id={`country.currencies`}/>
                    {country.currencies.map((currency, i) => (
                        <b key={i}>{currency.code}, {currency.name}, {currency.symbol}</b>
                    ))}
                </CountryInfo>
                <CountryInfo display={country.languages[0]}>
                    <Translate id={`country.languages`}/>
                    {country.languages.map((lang, i) => (
                        <b key={i}>{lang.name}, {lang.nativeName}</b>
                    ))}
                </CountryInfo>
                <CountryInfo display={Object.entries(country.translations).length}>
                    <Translate id={`country.translations`}/>
                    {Object.entries(country.translations).map(([k, v]) => (
                        <Fragment key={k}><b>{k}: </b> {v}, </Fragment>
                    ))}
                </CountryInfo>
                <CountryInfo display={country.regionalBlocs[0]}>
                    <Translate id={`country.regionalBlocs`}/>
                    {country.regionalBlocs.map((regional, i) => (
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

export default connect((state, ownProps) => ({
    country: state.countries.countries.find(c => c.id === ownProps.id),
}))(withLocalize(Country))
