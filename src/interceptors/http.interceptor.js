import axios from "axios";
import { useRouter } from "vue-router";

export function httpException() {
    axios.interceptors.response.use(response => response, err => {
        switch (err.response.status) {
            case 401:
                let recirectPath = window.location.pathname;
                window.location.href = `/login?redirect=${recirectPath}`;
                break;
            case 403:
                alert("Bạn không có quyền thực hiện chức năng này!");
                break;
            default:
                console.log(err);
                break;
        }
        return Promise.reject(err);
    });
}

export function loadingIndicator() {
    axios.interceptors.request.use(request => {
        NProgress.start();
        return request;
    })
    axios.interceptors.response.use(response => {
        NProgress.done();
        return response;
    }, err => {
        NProgress.done();
        return Promise.reject(err);
    })
}