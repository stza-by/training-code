import React, {Component} from 'react'
import Row from '../Row';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';

export default class PlanetPage extends Component {

    state = {
        currentPlanet: null
    }

    setPlanet = (planet) => {
        this.setState({currentPlanet: planet})
    }


    render() {
        const {currentPlanet} = this.state;
        const {SwapiService} = this.props;

        return (
            <Row
                left={<ItemList
                    setItem={this.setPlanet}
                    currentItem={currentPlanet || {}}
                    getData={SwapiService.getPlanets}
                    renderItem={(item) => item.name}
                />}
                right={currentPlanet && <ItemDetails
                    item={currentPlanet}
                    title={currentPlanet ? currentPlanet.name : ''}
                    renderedFields={
                        [{field: 'climate', label: 'Климат'},
                            {field: 'diameter', label: 'Диаметр'},
                            {field: 'rotation_period', label: 'Период вращения'}]
                    }
                    getPicUrl={SwapiService.getPlanetPictureByURL}/>}
            />
        )
    }
}
