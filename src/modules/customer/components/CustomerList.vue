<template>
    <div class="container-searchbar">
        <SearchBar v-model="inputSearch"/>
    </div>
    <div v-if="!isSearching" class="container-customers">
        <CustomerListItem @clickEvent="showInformation" v-for="customer in customers" :key="customer.id" :customer=customer />
    </div>
    <div v-else class="container-customers">
        <CustomerListItem @clickEvent="showInformation" v-for="item in listFiltered" :key="item.id" :customer=item />
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
    data() {
        return {
            inputSearch: '',
            isSearching: false,
            listFiltered: []
        }
    },
    computed: {
        ...mapGetters("CustomerStore", ["customers", "searchCustomerByName"]),
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
    watch: {
        inputSearch(newValue) {
            if(newValue) {
                this.isSearching = true
                this.listFiltered = this.searchCustomerByName(newValue)
            } else {
                this.isSearching = false
            }
        }
    }
};
</script>

<style>
.container-customers {
    margin-top: 12px;
}
</style>
