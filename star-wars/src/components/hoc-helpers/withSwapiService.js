import React from 'react';
import {SwapiConsumer} from "../swapi-service-context";

const withSwapiService = Inner => {

    return (props) => (
        <SwapiConsumer>
            {
                (SwapiService) => (
                    <Inner {...props} SwapiService={SwapiService}/>
                )
            }
        </SwapiConsumer>
    )
}

export default withSwapiService;