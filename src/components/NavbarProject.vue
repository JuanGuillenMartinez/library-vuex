<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" height="50" />
                Library
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/"
                            >Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/customer">Clientes</router-link>
                    </li>
                </ul>
                <!-- <form class="d-flex">
                    <SearchBar />
                </form> -->
                <div>
                    <button v-if="isAuth"
                        @click="logout"
                        type="button"
                        class="btn btn-danger btn-logout"
                    >
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                    <button v-else
                        @click="login"
                        type="button"
                        class="btn btn-success btn-logout"
                    >
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        SearchBar: defineAsyncComponent(() => import("@/components/SearchBar")),
    },
    computed: {
        ...mapGetters("AuthStore", ["isAuth"]),
    },
    methods: {
        ...mapActions("AuthStore", ["fetchLogoutUser"]),
        async logout() {
            await this.fetchLogoutUser()
            this.userIsLoggedOut()
        },
        userIsLoggedOut() {
            if (this.isAuth === false) {
                this.$router.push({ name: "Home" });
            }
        },
        login() {
            this.$router.push({ name: "login"})
        }
    },
};
</script>

<style>
.btn-logout {
    margin-left: 24px;
}
</style>
