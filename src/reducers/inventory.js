
const product=(state={},action)=>{
	switch(action.type){
		case "ADD_PRODUCT":
			return {
					id:action.id,
					name:action.name,
					price:action.price
				};
			break;
		case "UPDATE_PRODUCT_PRICE":
			return {
				...state,
				'price':action.price
			}
			break;
		case "UPDATE_PRODUCT_NAME":
			return {
				...state,
				'price':action.name
			}
			break;
		default:
			return state
	}
}
export const products=(state=[],action)=>{
	switch(action.type){
		case "ADD_PRODUCT":
			return [
				...state,
				product(undefined,action)
			]
			break;
		case "REMOVE_PRODUCT":
			return [
				...state.slice(0,action.id),
				...state.slice(action.id+1)
			]
			break;
		case "UPDATE_PRODUCT_PRICE":
			return [
				...state.slice(0,action.id),
				product(state[action.id],action),
				...state.slice(action.id+1)	
			]
			break;
		default:
			return state;
	}
}
