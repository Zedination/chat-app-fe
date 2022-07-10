<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const props = defineProps({

});
const router = useRouter();
const errors = ref([]);
const formLoginUrl = import.meta.env.VITE_ROOT_API + "/auth/login";
const googleAuthorizationUrl = import.meta.env.VITE_ROOT_API + "/oauth2/authorization/google?redirect_uri=" + window.location.origin + "/oauth2/redirect";
const facebookAuthorizationUrl = import.meta.env.VITE_ROOT_API + "/oauth2/authorization/facebook?redirect_uri=" + window.location.origin + "/oauth2/redirect";
const emailInputRef = ref(null);
const passwordInputRef = ref(null);
const isValidEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const onSubmitLogin = async event => {
    errors.value.length = 0;
    event.preventDefault();
    if (!isValidEmail(emailInputRef.value.value)) errors.value.push("Email sai định dạng!");
    if (!passwordInputRef.value.value) errors.value.push("Không được để trống password!");
    if (errors.value.length > 0) return;
    const payload = {
        "email": emailInputRef.value.value,
        "password": passwordInputRef.value.value
    }

    try {
        let result = await axios.post(formLoginUrl, payload);
        console.log(result.data);
        localStorage.setItem("Authorization", result.data.token);
        localStorage.setItem("ROLE", JSON.stringify(result.data.authorities));
        // router.push("/");
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        // console.log(params.redirect);
        if (params.redirect) {
            window.location.href = params.redirect;
        } else {
            window.location.href = "/";
        }
    } catch (ex) {
        console.log(ex);
        errors.value.push("Sai email hoặc mật khẩu!");
    }

}
</script>
<template>
<main class="main">
        <div class="container">
            <section class="wrapper">
                <div class="heading">
                    <h1 style="text-align: center;" class="text text-large">Đăng nhập</h1>
                    <p style="text-align: center; color: red; margin-top: 10px;" v-for="error in errors" :key="error"> {{error}}</p>
                </div>
                <form name="login" class="form" method="POST" :action="formLoginUrl" >
                    <div style="margin-bottom: 20px;">
                        <!-- <label class="input-label" hidden>Username</label> -->
                        <input name="email" ref="emailInputRef" type="email" class="input-field" placeholder="Tên đăng nhập">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <!-- <label class="input-label" hidden>Mật khẩu</label> -->
                        <input name="password" ref="passwordInputRef" type="password" class="input-field" placeholder="Mật khẩu">
                    </div>
                    <div class="input-control">
                        <!-- <a href="#" class="text text-links">Forgot Password</a> -->
                        <input type="button" @click="onSubmitLogin($event)" name="submit" class="center input-submit" value="Login">
                    </div>
                </form>
                <div class="striped">
                    <span class="striped-line"></span>
                    <span class="striped-text">Hoặc</span>
                    <span class="striped-line"></span>
                </div>
                <div class="method">
                    <div class="method-control">
                        <a style="text-align: center;" :href="googleAuthorizationUrl" class="method-action">
                            <i class="ion ion-logo-google"></i>
                            <span>Đăng nhập Google</span>
                        </a>
                    </div>
                    <div class="method-control">
                        <a style="text-align: center;" :href="facebookAuthorizationUrl" class="method-action">
                            <i class="ion ion-logo-facebook"></i>
                            <span>Đăng nhập Facebook</span>
                        </a>
                    </div>
                    </div>
                    </section>
                </div>
    </main>
</template>
<style scoped>
@import url("https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css");
@import '@/assets/login/login.css';
</style>
<style>
html.login-special {
    --color-white: #ffffff;
    --color-light: #f1f5f9;
    --color-black: #121212;
    --color-night: #001632;
    --color-red: #f44336;
    --color-blue: #1a73e8;
    --color-gray: #80868b;
    --color-grayish: #dadce0;
    --shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  html.login-special {
    font-size: 100%;
    font-size-adjust: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /* html.login-special,
  html.login-special::before,
  html.login-special::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  } */
  
  html.login-special *,
  html.login-special *::before,
  html.login-special *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  .login-special body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: var(--color-black);
    background: var(--color-light);
  }
</style>