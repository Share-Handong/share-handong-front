import axios from 'axios';

class AuthService {
    executeJwtAuthenticationService = (email, pw, name) => {
        return axios.post('http://127.0.0.1:8020/api/v1/user/signup', {
            email,
            pw,
            name,
        });
    };

    executeJwtAuthLogin = (reEmail, rePw, reName) => {
        if (reEmail) {
            axios
                .post('http://127.0.0.1:8020/api/v1/user/login', {
                    email: reEmail,
                    pw: rePw,
                    name: reName,
                })
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('token', res.headers.refresh_token);
                });
            // 토큰 refresh
            console.log('refresh!!');
            return false;
        }
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };

    executeHelloService = () => {
        console.log('===executeHelloService===');
        return axios.get('http://127.0.0.1:8020/hello');
    };

    registerSuccessfulLoginForJwt = (email, token, pw, name) => {
        console.log('===registerSuccessfulLoginForJwt===');
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', email);
        localStorage.setItem('authenticatedUserId', pw);
        localStorage.setItem('authenticatedUserName', name);
        // sessionStorage.setItem('authenticatedUser', username)
        // this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    };

    createJWTToken = (token) => {
        return `Bearer ${token}`;
    };

    setupAxiosInterceptors = () => {
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                const objConfig = config;
                if (token) {
                    objConfig.headers.Authorization = `Bearer ${token}`;
                }
                console.log(objConfig);
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            (error) => {
                Promise.reject(error);
            },
        );
    };

    getAxiosInterceptors = () => {
        axios.interceptors.response.use(
            (response) => {
                console.log('===response===');
                console.log(response);
                return response;
            },
            (error) => {
                Promise.reject(error);
            },
        );
    };

    logout = () => {
        // sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('token');
    };

    isUserLoggedIn = () => {
        const token = localStorage.getItem('token');

        console.log(token);

        let isLogin = false;
        if (token) {
            this.setupAxiosInterceptors();
            isLogin = axios
                .post('http://127.0.0.1:8020/api/v1/user/login/check', {})
                .then((res) => {
                    console.log(res);
                    //   if (res.data.login === true) return true;

                    //   localStorage.removeItem("token");
                    //   localStorage.setItem("token", res.data.token);
                    return true;
                })
                .catch((error) => {
                    // 토큰 만료 or unauthorize
                    if (error.response.status === 401) {
                        const reEmail = localStorage.getItem('authenticatedUser');
                        const rePw = localStorage.getItem('authenticatedUserId');
                        const reName = localStorage.getItem('authenticatedUserName');
                        this.executeJwtAuthLogin(reEmail, rePw, reName);
                    }
                });
        }
        if (isLogin) return true;
        return false;
    };

    getLoggedInUserInfo = () => {
        // let user = sessionStorage.getItem('authenticatedUser')

        const email = localStorage.getItem('authenticatedUser');
        const name = localStorage.getItem('authenticatedUserName');
        if (email === null) return '';
        return { email, name };
    };
}

export default new AuthService();
