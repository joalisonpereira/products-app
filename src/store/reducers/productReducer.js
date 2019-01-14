import { LOAD_PRODUCTS } from '../actions';

const INITIAL_STATE = {
	data: [],
	loading: true
};

const productReducer = (state=INITIAL_STATE,action) => {
	switch(action.type){
		case LOAD_PRODUCTS:
			return {
				data: action.payload.data,
				loading: false
			};
		default:
			return state;
	}
}

export default productReducer;