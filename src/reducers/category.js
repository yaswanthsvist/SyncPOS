
export const categorys=(state=[],action)=>{
	switch(action.type){
		case "ADD_CATEGORY":
			return [
				...state,
				action.name
			]
			break;
		case "REMOVE_CATEGORY":
			return [
				...state.slice(0,action.id),
				...state.slice(action.id+1)
			]
			break;
		default:
			return state;
	}
}
