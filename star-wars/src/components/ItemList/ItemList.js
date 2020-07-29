import React from 'react'
import PropTypes from 'prop-types';
import './ItemList.css';

const ItemList = ({setItem, currentItem, renderItem, items}) => {

    return (
        <ul className='list-group item-list'>

            {items.map((item) => (
                <li onClick={() => setItem(item)}
                    key={item.url}
                    className={`list-group-item ${currentItem.url === item.url ? 'active' : ''}`}>
                    {renderItem(item)}
                </li>)
            )}

        </ul>
    )
}

ItemList.defaultProps = {
    setItem: () => null,
    items: []
}

ItemList.propTypes = {
    setItem: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList;