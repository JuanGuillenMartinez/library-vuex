<template>
    <div class="container-searchbar">
        <SearchBar />
    </div>
    <div class="container-customers">
        <CustomerListItem @clickEvent="showInformation" v-for="customer in customers" :key="customer.id" :customer=customer />
    </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        SearchBar: defineAsyncComponent(() => import("@/components/SearchBar")),
        CustomerListItem: defineAsyncComponent(() => import("@/modules/customer/components/CustomerListItem")),
    },
    computed: {
        ...mapGetters("CustomerStore", ["customers"]),
    },
    methods: {
        ...mapActions("CustomerStore", ["fetchCustomerList"]),
        showInformation(id) {
            this.$router.push({ name: 'ShowCustomer', params: { id } })
        }
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
