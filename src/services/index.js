import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost/products-api/public/api',
	headers: {
		'Content-Type': 'multipart/form-data',
	}
});

