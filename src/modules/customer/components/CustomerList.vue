<template>
    <ol>
        <li v-for="customer in customers" :key="customer.id">{{ customer.name }}</li>
    </ol>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('CustomerStore', ['customers'])
    },
    methods: {
        ...mapActions('CustomerStore', [ 'fetchCustomerList' ]),
    },
    created() {
        this.fetchCustomerList()
    }
};
</script>

<style></style>
