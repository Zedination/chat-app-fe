<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
console.log(params);
if (!params.token || params.error) {
    router.push("/login");
    // window.location.href = "/login";
} else {
    localStorage.setItem("Authorization", params.token);
    localStorage.setItem("ROLE", JSON.stringify(["ROLE_USER"]));
    // window.location.href = "/";
    router.push("/");
}

// router.push("/");
</script>