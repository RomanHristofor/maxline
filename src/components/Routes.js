import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {withLocalize} from 'react-localize-redux'
import LanguageToggle from './common/LanguageToggle'
import {reducerLangState} from '../reducer/languages'
import {getLocalStorage} from '../helpers'
import CountryCodeList from './Filters/CountryCode'
import Country from './Country'
import Countries from './Countries'
import {Main} from './css'


class Routes extends Component {
    constructor(props) {
        super(props);
        const activeStorageLang = getLocalStorage('lang');
        localStorage.removeItem('request');

        if (activeStorageLang) {
            reducerLangState.languages = activeStorageLang;
            this.props.initialize(reducerLangState);
        } else {
            this.props.initialize(reducerLangState);
        }
    }

    getIndex = ({match}) => {
        const {id} = match.params;
        return <Country id={id} key={id}/>
    };

    countries = () => <Countries/>;
    getListOfCodes = () => <CountryCodeList/>;

    render() {
        return (
            <Main>
                <LanguageToggle/>
                <Switch>
                    <Route path="/maxline" render={this.countries} exact/>
                    <Route path="/maxline/codes" render={this.getListOfCodes} exact/>
                    <Route path="/maxline/:id" render={this.getIndex}/>
                </Switch>
            </Main>
        )
    }
}

export default withLocalize(Routes);
