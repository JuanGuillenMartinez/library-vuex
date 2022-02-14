<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Correo electrónico</label>
            <input v-model="email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input v-model="password" type="password" class="form-control" />
        </div>
        <button @click="register" type="button" class="btn btn-primary">Registrarse</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions('AuthStore', [ 'registerUser' ]),
        register() {
            const user = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            const success = this.registerUser(user)
            if(success) this.$router.push({ name: 'login' })
        },
    },
};
</script>

<style scoped></style>
