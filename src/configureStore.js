
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers/main'
import thunk from "redux-thunk";

function configureStore(){
	try{
		const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
		let store = createStoreWithMiddleware(reducer);
		return store;
	}catch(err){
		return err;
	}
}
export default configureStore;
