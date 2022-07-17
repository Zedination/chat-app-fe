import axios from "axios";

export function jwtInterceptor() {
    axios.interceptors.request.use(request => {
        // add auth header with jwt if account is logged in and request is to the api url
        const token = localStorage.getItem("Authorization");
        const isApiUrl = request.url.startsWith(import.meta.env.VITE_ROOT_API);

        if (token && isApiUrl) {
            request.headers.common.Authorization = `Bearer ${token}`;
        }

        return request;
    });
}