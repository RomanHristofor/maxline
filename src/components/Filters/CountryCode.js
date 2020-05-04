import React from 'react';
import countries from './countries';
import {Translate} from 'react-localize-redux';
import {TableCode} from '../css';

function CountryCodeList() {
    return (
        <TableCode className="table table-striped">
            <thead>
            <tr>
                <th scope="col">
                    <Translate id="codeTable"/>
                </th>
                <th scope="col">
                    <Translate id="countryTable"/>
                </th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(countries).map(([code, country]) => (
                <tr key={code}>
                    <td>{code}</td>
                    <td>{country}</td>
                </tr>
            ))}
            </tbody>
        </TableCode>
    )
}

export default CountryCodeList;