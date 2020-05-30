import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {Translate} from 'react-localize-redux'
import {
    loadCountryByShortName,
    loadCountryByFullName,
    loadCountryByCode,
    loadCountryByCurrency,
    inputFiltratedByName,
    changeCountryChecked,
    getEntitiesInLocalStorage
} from '../../AC'
import {getRequestInLocalStorage} from '../../helpers'
import {countryNameSelector, countrySelector, RootState} from "../../selectors"
import {InputLabel, RadioGroup} from '../css'


const Input = () => {
    const dispatch = useDispatch();
    const country = useSelector(
        (state: RootState) => countrySelector(state)
        , shallowEqual
    );
    const countryName = useSelector(
        (state: RootState) => countryNameSelector(state)
        , shallowEqual
    );

    const handleLoadCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value;
        const request = getRequestInLocalStorage(str.toLowerCase(), country.type);
        if (request && request.q === str.toLowerCase())
            dispatch(getEntitiesInLocalStorage(request.entities));
        else if (typeof country.dispatch === "function") {
            dispatch(country.dispatch(str));
        }
        else {
            dispatch(loadCountryByShortName(str));
        }
        dispatch(inputFiltratedByName(str));
    };

    const handleFilter = (key: string) => () => {
        let action;
        switch (key) {
            case 'fullName':
                action = loadCountryByFullName;
                country.type = 'LOAD_COUNTRY_BY_FULL_NAME_SUCCESS';
                break;
            case 'code':
                action = loadCountryByCode;
                country.type = 'LOAD_COUNTRY_BY_CODE_SUCCESS';
                break;
            case 'currency':
                action = loadCountryByCurrency;
                country.type = 'LOAD_COUNTRY_BY_CURRENCY_SUCCESS';
                break;
            default:
                action = loadCountryByShortName;
                country.type = 'LOAD_COUNTRY_BY_NAME_SUCCESS';
        }
        country.isChecked = key;
        country.dispatch = action;
        dispatch(changeCountryChecked(country));
    };

    return (
        <div className="form-group">
            <InputLabel>
                <Translate id="inputCountryLabel"/>
            </InputLabel>
            <RadioGroup>
                <label className="radio-inline" onClick={handleFilter("shortName")}>
                    <input type="radio" name="optradio" defaultChecked={country.isChecked === 'shortName'}/>
                    <Translate id="shortCountryName"/>
                </label>
                <label className="radio-inline" onClick={handleFilter("fullName")}>
                    <input type="radio" name="optradio" defaultChecked={country.isChecked === 'fullName'}/>
                    <Translate id="fullCountryName"/>
                </label>
                <label className="radio-inline" onClick={handleFilter("code")}>
                    <input type="radio" name="optradio" defaultChecked={country.isChecked === 'code'}/>
                    <Translate id="codeCountry"/>
                </label>
                <label className="radio-inline" onClick={handleFilter("currency")}>
                    <input type="radio" name="optradio" defaultChecked={country.isChecked === 'currency'}/>
                    <Translate id="currencyCountry"/>
                </label>
            </RadioGroup>
            <input
                className="form-control"
                type='text'
                value={countryName}
                placeholder={countryName || `Enter...`}
                onChange={handleLoadCountry}
            />
        </div>
    )
};

export default Input;
