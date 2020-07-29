import React, {Component} from 'react'
import NavBar from '../NavBar';
import RandomPlanet from '../RandomPlanet';
import Pages from '../Pages';
import SwapiService from "../../services/swapi";
import {SwapiProvider} from '../swapi-service-context';

import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

export default class App extends Component {

    render() {

        const {
            PeoplePage,
            StarshipPage,
            PlanetPage
        } = Pages;

        return (
            <div className='container'>

                <SwapiProvider value={SwapiService}>

                    <BrowserRouter>
                        <NavBar/>
                        <RandomPlanet getPlanet={SwapiService.getPlanet}/>

                        <Route path='/' render={() => <h1>Добро пожаловать!!!</h1>} exact/>

                        <Route path='/people' component={PeoplePage}/>
                        <Route path='/starship' component={StarshipPage}/>
                        <Route path='/planets' component={PlanetPage}/>

                    </BrowserRouter>
                </SwapiProvider>
            </div>
        )
    }
}
