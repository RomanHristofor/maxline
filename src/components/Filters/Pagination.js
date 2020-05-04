import React, {Component} from 'react'
import Pagination from 'react-js-pagination'
import {connect} from 'react-redux'
import {changePages} from '../../AC'
import {isIncludedSubstring} from '../../helpers'
import {countriesSelector, countryNameSelector, errorSelector} from '../../selectors'

class PaginationFilter extends Component {

    handlePageChange = (page) => {
        const {changePages, pagination} = this.props;
        changePages({
            page: page,
            pageSize: pagination.pageSize
        })
    }

    render() {
        const {countries, countryName, pagination, error} = this.props;
        if (error || countries.length <= 10) return null;
        let countFiltratedByName = 0;

        if (countryName) {
            countFiltratedByName = countries.filter(item => {
                return isIncludedSubstring(item.name, countryName)
            }).length;
        }

        const total = !countryName ? countries.length : countFiltratedByName;

        return (
            <div>
                <Pagination
                    activePage={pagination.page}
                    itemsCountPerPage={pagination.pageSize}
                    totalItemsCount={total <= 0 ? 1 : total}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default connect(state => ({
    countries: countriesSelector(state),
    countryName: countryNameSelector(state),
    pagination: state.filters.pagination,
    error: errorSelector(state),
}), {changePages})(PaginationFilter)