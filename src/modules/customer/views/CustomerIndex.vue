<template>
    <h1>este es el index de customers</h1>
    <customer-list />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        CustomerList: defineAsyncComponent( () => import('@/modules/customer/components/CustomerList.vue') )
    },
};
</script>

<style></style>
