import { api } from '../../services';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const loadProducts = () => {
	return async dispatch => {
		const { data:{data} } = await api.get('/products');
		dispatch({
			type: LOAD_PRODUCTS,
			payload: {data}
		});
	};
}

export const STORE_PRODUCT = 'STORE_PRODUCT';
export const storeProduct = formData => {
	return async dispatch => {
		const { data:{status} } = await api.post('/products',formData);
		dispatch({
			type: LOAD_PRODUCTS,
			payload: {status}
		});
	};
}