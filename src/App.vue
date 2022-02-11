<template>
    <NavbarProject />
    <router-view />
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
    components: {
        NavbarProject: defineAsyncComponent(() =>
            import("@/components/NavbarProject.vue")
        ),
    },
};
</script>
<style></style>
