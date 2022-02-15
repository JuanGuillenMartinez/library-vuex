<template>
    <div class="container-searchbar">
        <SearchBar v-model="inputSearch"/>
    </div>
    <div class="container-customers">
        <BookListItem v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        SearchBar: defineAsyncComponent(() => import("@/components/SearchBar")),
        BookListItem: defineAsyncComponent(() => import("@/modules/book/components/BookListItem")),
    },
    data() {
        return {
            inputSearch: '',
        }
    },
    computed: {
        ...mapGetters('BookStore', [ 'books' ]),
    },
    methods: {
        ...mapActions('BookStore', [ 'fetchBookList' ])
    },
    created() {
        this.fetchBookList()
    }
}
</script>

<style scoped>
.card {
    margin-top: 12px;
}
</style>