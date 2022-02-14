<template>
    <button @click="$emit('buttonClicked')" type="button" class="btn btn-success">
        <i :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: String
    },
    emits: [ 'buttonClicked' ]
};
</script>

<style scoped>
button {
    position: fixed;
    right: 2%;
    bottom: 6%;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    font-size: 24px;
}
</style>
