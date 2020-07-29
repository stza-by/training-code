import React, {Component} from 'react';

const withPages = (View) => {

    return class extends Component {

        state = {
            currentPage: 1,
            itemsPerPage: 10
        }

        paginate = (number) => {
            this.setState({currentPage: number});
        }

        renderPagination = (itemsPerPage, totalItems, currentPage) => {
            const pageNumbers = [];

            for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
                pageNumbers.push(i);
            }

            const pageItems = pageNumbers.map((number) => (
                <li key={number}
                    className={`page-item ${number === currentPage ? 'active' : ''}`}
                    onClick={() => this.paginate(number)}>
                    <span className='page-link'>{number}</span>
                </li>
            ))

            return (
                <ul className='pagination mt-3 justify-content-end'>
                    {pageItems}
                </ul>
            )
        }

        render() {
            const {items} = this.props;

            const {currentPage, itemsPerPage} = this.state;
            const lastItemIndex = currentPage * itemsPerPage;
            const firstItemIndex = lastItemIndex - itemsPerPage;

            const currentItems = items.slice(firstItemIndex, lastItemIndex);

            return (
                <React.Fragment>
                    <View {...this.props} items={currentItems}/>
                    {this.renderPagination(itemsPerPage, items.length, currentPage)}
                </React.Fragment>
            )
        }
    }
}

export default withPages;