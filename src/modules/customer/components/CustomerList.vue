<template>
    <SearchBar />
    <div v-for="customer in customers" :key="customer.id" class="card">
        <div class="card-body">{{ customer.name }}</div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        SearchBar: defineAsyncComponent(() => import("@/components/SearchBar")),
    },
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
