<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" height="50" />
                Navbar
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
                        <a class="nav-link active" aria-current="page" href="#"
                            >Inicio</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/customer">Clientes</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <SearchBar />
                </form>
                <div>
                    <button type="button" class="btn btn-danger btn-logout">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        SearchBar: defineAsyncComponent(() => import("@/components/SearchBar")),
    },
};
</script>

<style>
.btn-logout {
    margin-left: 24px;
}
</style>
