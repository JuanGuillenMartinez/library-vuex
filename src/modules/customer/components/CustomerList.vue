<template>
    <h1>Este es el customer list</h1>
    <ol>
        <li v-for="customer in customers" :key="customer.id">{{ customer.nombre }}</li>
    </ol>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('CustomerStore', ['customers'])
    }
};
</script>

<style></style>
