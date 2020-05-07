import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Translate} from 'react-localize-redux'
import {
    loadCountryByShortName,
    loadCountryByFullName,
    loadCountryByCode,
    loadCountryByCurrency,
    inputFiltratedByName,
    getEntitiesInLocalStorage,
    changeCountryChecked
} from '../../AC'
import {getRequestInLocalStorage} from '../../helpers'
import {
    countryNameSelector,
    countrySelector,
    filtratedCountriesSelector,
    loadingSelector
} from "../../selectors"
import {InputLabel, RadioGroup} from '../css'

class Input extends Component {

    state = {
        dispatch: this.props.loadCountryByShortName
    }

    handleLoadCountry = (e) => {
        const {country, inputFiltratedByName, getEntitiesInLocalStorage} = this.props;
        const str = e.target.value;

        const request = getRequestInLocalStorage(str.toLowerCase(), country.type);
        if (request && request.q === str.toLowerCase())
            getEntitiesInLocalStorage(request.entities);
        else if (typeof country.dispatch === "function")
            country.dispatch(str);
        else
            this.state.dispatch(str);
        inputFiltratedByName(str);
    }

    handleFilter = (key, country) => {
        let dispatch;
        const {loadCountryByShortName, loadCountryByFullName,
            loadCountryByCode, loadCountryByCurrency, changeCountryChecked
        } = this.props;

        switch (key) {
            case 'fullName':
                dispatch = loadCountryByFullName;
                country.type = 'LOAD_COUNTRY_BY_FULL_NAME_SUCCESS';
                break;
            case 'code':
                dispatch = loadCountryByCode;
                country.type = 'LOAD_COUNTRY_BY_CODE_SUCCESS';
                break;
            case 'currency':
                dispatch = loadCountryByCurrency;
                country.type = 'LOAD_COUNTRY_BY_CURRENCY_SUCCESS';
                break;
            default:
                dispatch = loadCountryByShortName;
                country.type = 'LOAD_COUNTRY_BY_NAME_SUCCESS';
        }

        country.isChecked = key;
        country.dispatch = dispatch;
        changeCountryChecked(country);
        this.setState({dispatch})
    }


    render() {
        const {country, countryName} = this.props;

        return (
            <div className="form-group">
                <InputLabel>
                    <Translate id="inputCountryLabel"/>
                </InputLabel>

                <RadioGroup>
                    <label className="radio-inline"
                           onClick={() => this.handleFilter('shortName', country)}
                    >
                        <input type="radio" name="optradio" defaultChecked={country.isChecked === 'shortName'}/>
                        <Translate id="shortCountryName"/>
                    </label>
                    <label className="radio-inline"
                           onClick={() => this.handleFilter('fullName', country)}
                    >
                        <input type="radio" name="optradio" defaultChecked={country.isChecked === 'fullName'}/>
                        <Translate id="fullCountryName"/>
                    </label>
                    <label className="radio-inline"
                           onClick={() => this.handleFilter('code', country)}
                    >
                        <input type="radio" name="optradio" defaultChecked={country.isChecked === 'code'}/>
                        <Translate id="codeCountry"/>
                        <code><Translate id="exampleCode"/></code>
                    </label>
                    <label className="radio-inline"
                           onClick={() => this.handleFilter('currency', country)}
                    >
                        <input type="radio" name="optradio" defaultChecked={country.isChecked === 'currency'}/>
                        <Translate id="currencyCountry"/>
                    </label>
                </RadioGroup>

                <input
                    className="form-control"
                    type='text'
                    value={countryName}
                    placeholder={countryName || `Enter...`}
                    onChange={this.handleLoadCountry}
                />
            </div>
        )
    }

}

export default connect(state => ({
    countryName: countryNameSelector(state),
    country: countrySelector(state),
    countries: filtratedCountriesSelector(state),
    loading: loadingSelector(state),
}), {
    loadCountryByShortName,
    loadCountryByFullName,
    loadCountryByCode,
    loadCountryByCurrency,
    inputFiltratedByName,
    getEntitiesInLocalStorage,
    changeCountryChecked
})(Input)