import ItemList from './ItemList';
import compose from "../hoc-helpers/compose";

import {withData, withPages} from "../hoc-helpers";

export default compose(withData, withPages)(ItemList)