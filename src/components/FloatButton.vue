<template>
    <button @click="$emit('buttonClicked')" type="button" class="btn btn-success">
        <i class="fa-solid fa-plus"></i>
    </button>
</template>

<script>
export default {
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
}
</style>
