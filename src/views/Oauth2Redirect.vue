<script setup>
// import 
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
localStorage.setItem("Authorization", params.token);
localStorage.setItem("ROLE", JSON.stringify(["ROLE_USER"]));
window.location.href = "/";
</script>