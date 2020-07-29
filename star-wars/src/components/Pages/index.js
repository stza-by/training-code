import PlanetPage from './PlanetPage';
import PeoplePage from './PeoplePage';
import StarshipPage from './StarshipPage';
import {withSwapiService} from '../hoc-helpers';


export default {
    PlanetPage: withSwapiService(PlanetPage),
    PeoplePage: withSwapiService(PeoplePage),
    StarshipPage: withSwapiService(StarshipPage)
}