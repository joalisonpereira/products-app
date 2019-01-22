import { 
	LOAD_PRODUCTS,
	STORE_PRODUCT,
	EDIT_PRODUCT,
	DELETE_PRODUCT 
} from '../actions';

const INITIAL_STATE = {
	data: [],
	loading: true,
	error: false
};

const productReducer = (state=INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return {
				...INITIAL_STATE,
				data: action.payload.data,
				loading: false
			};
		case STORE_PRODUCT:
			return {
				...INITIAL_STATE,
				storeStatus: action.payload.status
			};
		case EDIT_PRODUCT:
			return {
				...INITIAL_STATE,
				editStatus: action.payload.status
			};
		case DELETE_PRODUCT:
			return {
				...INITIAL_STATE,
				deleteStatus: action.payload.status
			};
		default:
			return state;
	}
}

export default productReducer;