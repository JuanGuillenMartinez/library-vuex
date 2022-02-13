<template>
    <div class="container-searchbar">
        <SearchBar />
    </div>
    <div class="container-customers">
        <div v-for="customer in customers" :key="customer.id" class="card">
            <div class="card-body">{{ customer.name }}</div>
        </div>
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

<style>
.container-customers {
    margin-top: 12px;
}
</style>
