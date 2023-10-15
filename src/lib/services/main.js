import { dev } from '$app/environment';
import API from '$lib/Api';

/**
 * 主页
 * @returns
 */
export const getMainList = async () => {
	try {
		const response = await API.get('main/?limit=16');
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 搜索列表
 * @param {URLSearchParams} params
 * @returns
 */
export const getSearchList = async (params) => {
	try {
		const response = await API.get(`search/?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 获取信息
 * @param {URLSearchParams} params
 * @returns
 */
export const getShow = async (params) => {
	try {
		const response = await API.get(`show/?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 获取视频信息
 * @param {URLSearchParams|null} params
 * @returns
 */
export const getTopList = async (params = null) => {
	try {
		const response = await API.get(`top/?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 种类列表
 * @param {string} type
 * @param {URLSearchParams} params
 * @returns
 */
export const getFenleiList = async (type,params) => {
	try {
		const response = await API.get(`${type}/?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 列表
 * @param {string} code
 * @param {URLSearchParams} params
 * @returns
 */
export const getVideo = async (code, params) => {
	try {
		const response = await API.get(`code/${code}?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 * 种类列表
 * @param {URLSearchParams} params
 * @returns
 */
export const getVideoList = async (params) => {
	try {
		const response = await API.get(`video_list/?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};

/**
 *
 * @param {string} slug
 * @param {URLSearchParams} params
 * @returns
 */
export const getGenreList = async (slug, params) => {
	try {
		const response = await API.get(`genres/${slug}?${params}`);
		if (response.code == 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};
