import { combineReducers } from 'redux';
import {products} from './inventory'
import {categorys} from './category'
const reducer=combineReducers({categorys,products});
export default reducer;
