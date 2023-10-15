import { dev } from '$app/environment';
import axios from 'axios';

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
	baseURL: !dev ? 'http://atjav.test/api' : 'http://atjav.test/api'
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request, token) => {
	const headers = {
		'Content-Type': 'application/json'
	};
	if (token) {
		// @ts-ignore
		headers['authorization'] = `Bearer ${token}`;
	}
	//using the axios instance to perform the request that received from each http method
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	})
		.then((res) => {
			return Promise.resolve(res.data);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

// function to execute the http get request
const get = (url, request, token) => apiRequest('get', url, request, token);

// function to execute the http delete request
const deleteRequest = (url, request, token) => apiRequest('delete', url, request, token);

// function to execute the http post request
const post = (url, request, token) => apiRequest('post', url, request, token);

// function to execute the http put request
const put = (url, request, token) => apiRequest('put', url, request, token);

// function to execute the http path request
const patch = (url, request, token) => apiRequest('patch', url, request, token);

// expose your method to other services or actions
const API = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
};
export default API;
