import React, {Component} from 'react'
import Row from '../Row';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';

export default class PeoplePage extends Component {

    state = {currentStarship: null}

    setStarship = (starship) => {
        this.setState({currentStarship: starship})
    }

    render() {
        const {currentStarship} = this.state;
        const {SwapiService} = this.props;

        return (
            <Row
                left={<ItemList
                    setItem={this.setStarship}
                    currentItem={currentStarship || {}}
                    getData={SwapiService.getStarships}
                    renderItem={(item) => item.name}
                />}
                right={currentStarship && <ItemDetails
                    item={currentStarship}
                    title={currentStarship ? currentStarship.name : ''}
                    renderedFields={
                        [{field: 'model', label: 'Модель'},
                            {field: 'starship_class', label: 'Класс корябля'}]
                    }
                    getPicUrl={SwapiService.getStarShipPictureByURL}/>}
            />
        )
    }
}
