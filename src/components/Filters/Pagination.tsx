import React from 'react'
import Pagination from 'react-js-pagination'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {changePages} from '../../AC'
import {isIncludedSubstring} from '../../helpers'
import {RootState, countriesSelector, countryNameSelector, errorSelector} from '../../selectors'
import {CountryType} from '../../reducer/countries'


const PaginationFilter = () => {
    const dispatch = useDispatch();
    const pagination = useSelector((state: RootState) => state.filters.pagination
        , shallowEqual
    );
    const countries = useSelector((state: RootState) => countriesSelector(state)
        , shallowEqual
    );
    const countryName = useSelector((state: RootState) => countryNameSelector(state)
        , shallowEqual
    );
    const error = useSelector((state: RootState) => errorSelector(state)
        , shallowEqual
    );

    const handlePageChange = (page: number) => {
        dispatch(changePages({
            page: page,
            pageSize: pagination.pageSize
        }))
    };

    if (error || countries.length <= 10) return null;
    let countFiltratedByName = 0;

    if (countryName) {
        countFiltratedByName = countries.filter((item: CountryType) => {
            if (item.name)
                return isIncludedSubstring(item.name, countryName);
            return item;
        }).length;
    }

    const total = !countryName ? countries.length : countFiltratedByName;

    return (
        <>
            <Pagination
                activePage={pagination.page}
                itemsCountPerPage={pagination.pageSize}
                totalItemsCount={total <= 0 ? 1 : total}
                onChange={handlePageChange}
            />
        </>
    );
};

export default PaginationFilter;