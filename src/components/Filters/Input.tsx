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
import {countryNameSelector, countrySelector, RootState} from "../../selectors"
import {CountryType} from "../../reducer/countries"
import {InputLabel, RadioGroup} from '../css'


type Props = {
    country: CountryType,
    countryName: string,
    loadCountryByShortName?: (s: string) => void,
    loadCountryByFullName?: (s: string) => void,
    loadCountryByCode?: (s: string) => void,
    loadCountryByCurrency?: (s: string) => void,
    inputFiltratedByName: (v: string) => void,
    changeCountryChecked: (country: CountryType) => void,
    getEntitiesInLocalStorage: (entities: CountryType[]) => void,
}

type State = {
    dispatch?: (s: string) => void
}

class Input extends Component<Props & State> {

    state = {
        dispatch: this.props.loadCountryByShortName
    }

    handleLoadCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {dispatch} = this.state;
        const {country, inputFiltratedByName, getEntitiesInLocalStorage} = this.props;
        const str = e.target.value;

        const request = getRequestInLocalStorage(str.toLowerCase(), country.type);
        if (request && request.q === str.toLowerCase())
            getEntitiesInLocalStorage(request.entities);
        else if (typeof country.dispatch === "function")
            country.dispatch(str);
        else {
            if (dispatch) dispatch(str);
        }
        inputFiltratedByName(str);
    }

    handleFilter = (key: string, country: CountryType) => {
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

export default connect((state: RootState) => ({
    countryName: countryNameSelector(state),
    country: countrySelector(state),
}), {
    loadCountryByShortName,
    loadCountryByFullName,
    loadCountryByCode,
    loadCountryByCurrency,
    inputFiltratedByName,
    getEntitiesInLocalStorage,
    changeCountryChecked
})(Input)