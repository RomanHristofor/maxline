import React, {Fragment} from 'react'
import InputFilter from './Input'
import PaginationFilter from './Pagination'

function Filters() {
    return (
        <Fragment>
            <InputFilter />
            <PaginationFilter />
        </Fragment>
    )
}

export default Filters;
