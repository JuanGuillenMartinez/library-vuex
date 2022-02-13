<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
                >Correo electrónico</label
            >
            <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
                >Contraseña</label
            >
            <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
            />
        </div>
        <div class="container-login-actions">
            <button @click="loginUser" type="button" class="btn btn-primary">
                Iniciar sesión
            </button>
            <div class="container-register-text">
                <span>No se encuentra registrado? Registrese.</span>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: '',
            password: '',
            isAuth: false,
        }
    },
    methods: {
        ...mapActions('AuthStore', ['fetchUserCredentials']),
        async loginUser () {
            const credentials = {
                email: this.email,
                password: this.password
            }
            this.isAuth = await this.fetchUserCredentials(credentials)
            this.userIsLoggedIn()
        },
        userIsLoggedIn() {
            if(this.isAuth) {
                this.$router.replace({ name: 'CustomerIndex' })
            }
        }
    }
};
</script>

<style scoped>
.container-login-actions {
    display: grid;
    grid-template-columns: 3fr 7fr;
}
.container-register-text {
    position: relative;
}
span {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
}
</style>
