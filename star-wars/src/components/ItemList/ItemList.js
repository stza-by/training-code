import React from 'react'
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

export default ItemList;