<template>
    <div v-for="customer in customers" :key="customer.id" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="@/assets/logo.png" class="rounded me-2" alt="..." />
            <strong class="me-auto">{{ customer.name }}</strong>
            <small>{{ customer.created_at }}</small>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
            ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
    <h1>hola</h1>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("CustomerStore", ["customers"]),
    },
    methods: {
        ...mapActions("CustomerStore", ["fetchCustomerList"]),
    },
    created() {
        this.fetchCustomerList();
    },
};
</script>

<style></style>
