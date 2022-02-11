<template>
    <div class="container-customers">
        <div class="container-list">
            <customer-list />
        </div>
        <div class="container-router-view">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        CustomerList: defineAsyncComponent(() =>
            import("@/modules/customer/components/CustomerList.vue")
        ),
    },
};
</script>

<style scoped>
.container-customers {
    display: grid;
    grid-template-columns: 3fr 7fr;
    padding: 12px;
}
</style>
