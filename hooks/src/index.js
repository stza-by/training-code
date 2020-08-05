import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import UseState from "./use-state";
import UseEffect from "./use-effect";

ReactDOM.render(
    <React.StrictMode>
        {/*<UseState/>*/}
        <UseEffect/>
    </React.StrictMode>,
    document.getElementById('root')
);
