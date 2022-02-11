<template>
    <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">Search</button>
    <div v-for="customer in customers" :key="customer.id" class="card">
        <div class="card-body">{{ customer.name }}</div>
    </div>
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
