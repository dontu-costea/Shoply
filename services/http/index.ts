import axios from "axios";
import { authInterceptor } from "../interceptors";
import qs from "qs";

export class HttpService {
	axios;

	constructor() {
		this.axios = axios.create({
			baseURL: "https://shoply-api.nanoit.dev",
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				"Cache-Control": "no-cache",
			},
		});

      this.axios.interceptors.request.use(authInterceptor);
  }

	getInstance() {
		return this.axios;
	}

	async get(
		url: string,
		params = {},
		headers: any,
		config: any
	) {
		try {
			const response = await this.axios.get(url, {
				params,
				paramsSerializer: (params) => {
					return qs.stringify(params);
				},
				headers,
				...config,
			});
	
			return response.data;
		} catch (e: any) {
			console.log(e);
			throw e.data;
		}
	}

	async post(
		url: string,
		params = {},
		headers: any,
		config: any
	) {
		try {
			const response = await this.axios.post(url, params);
	
			return response.data;
		} catch (e: any) {
			console.log(e);
			throw e.data;
		}
	}

	async delete(
		url: string,
		params = {},
		headers: any,
		config: any
	) {
		try {
			const response = await this.axios.delete(url, params);
	
			return response.data;
		} catch (e: any) {
			console.log(e);
			throw e.data;
		}
	}
}

const Http = new HttpService();

export default Http;