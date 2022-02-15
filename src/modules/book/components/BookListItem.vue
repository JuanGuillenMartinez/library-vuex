<template>
    <div @click="emitEvent" class="card">
        <div class="card-body">
            <h6>{{ fullname }}</h6>
            <span>{{ email }}</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        fullname() {
            return `${this.customer.name} ${this.customer.first_name} ${this.customer.last_name}`;
        },
        email() {
            return `Correo: ${this.customer.email}`
        }
    },
    methods: {
        emitEvent() {
            this.$emit('clickEvent', this.customer.id)
        }
    },
    props: {
        customer: Object,
    },
    emits: [ 'clickEvent' ]
};
</script>

<style scoped>
.card {
    cursor: pointer;
    margin-bottom: 6px;
}
</style>
