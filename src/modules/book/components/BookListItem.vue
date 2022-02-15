<template>
    <div @click="emitEvent" class="card">
        <div class="card-body">
            <h6>{{ title }}</h6>
            <span>{{ description }}</span>
            <span class="author-label">{{ author }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
    },
    computed: {
        title() {
            return this.book.title                                
        },
        description() {
            return this.book.description                                
        },
        author() {
            return `Escrito por ${this.book.author}`
        }
    }
};
</script>

<style scoped>
.author-label {
    float: right;
}
</style>
