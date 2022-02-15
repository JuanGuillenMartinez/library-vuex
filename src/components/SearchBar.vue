<template>
    <div>
        <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <button class="btn btn-outline-success" type="button">Buscar</button>
    </div>
</template>

<script>
export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
};
</script>

<style scoped>
div {
    display: grid;
    grid-template-columns: 8fr 2fr;
}
button {
    margin-left: 4px;
}
</style>
