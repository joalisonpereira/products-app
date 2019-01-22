import axios from 'axios';

//Run with "php artisan serve"
export const api = axios.create({
	baseURL: 'http://127.0.0.1:3003',
	headers: {
		'Content-Type': 'multipart/form-data',
	}
});

