<template>
    <div class="auth-title">
        <h1>
            <img src="@/assets/logo.png" height="80" />
            Library SYS
        </h1>
    </div>
    <div class="login-router">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-router {
    margin: 24px 30% 12px;
}
.auth-title {
    margin-top: 3%;
    text-align: center;
}
</style>
