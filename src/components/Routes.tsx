import React, {Component} from 'react'
import {Route, Switch, RouteComponentProps} from 'react-router-dom'
import LanguageToggle from './common/LanguageToggle'
import { withLocalize, LocalizeContextProps } from 'react-localize-redux'
import CountryCodeList from './Filters/CountryCode'
import {getLocalStorage} from '../helpers'
import {reducerState, LanguagesInterface} from '../reducer/languages'
import Country from './Country'
import Countries from './Countries'
import {Main} from './css'


interface RouterProps {
    id: string
}

type Props = {
    reducerState: LanguagesInterface
}

class Routes extends Component<Props & LocalizeContextProps> {
    constructor(props: any) {
        super(props);
        const activeStorageLang = getLocalStorage('lang');
        localStorage.removeItem('request');

        if (activeStorageLang.length) {
            reducerState.languages = activeStorageLang;
            this.props.initialize(reducerState);
        } else {
            this.props.initialize(reducerState);
        }
    }

    getIndex = ({match}: RouteComponentProps<RouterProps>) => {
        const {id} = match.params;
        return <Country
            id={id} key={id}
        />
    };

    countries = () => <Countries/>;
    getListOfCodes = () => <CountryCodeList/>;

    render() {
        return (
            <Main>
                <LanguageToggle />
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