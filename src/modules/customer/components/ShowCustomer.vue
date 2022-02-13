<template>
<div v-if="isLoading">Cargando...</div>
    <form v-else >
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input :value="currentCustomer.name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido Paterno</label>
            <input
                :value="currentCustomer.first_name"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido Materno</label>
            <input
                :value="currentCustomer.last_name"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Correo electrónico</label>
            <input :value="currentCustomer.email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Dirección de residencia</label>
            <input :value="currentCustomer.address" type="text" class="form-control" />
        </div>
        <button type="button" class="btn btn-primary">Actualizar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
    props: {
        id: String,
    },
    computed: {
      ...mapGetters('CustomerStore', [ 'currentCustomer', 'isLoading' ])
    },
    methods: {
        ...mapActions("CustomerStore", ["fetchCustomerById"]),
        async showCurrentCustomer() {
            await this.fetchCustomerById(this.id)
        },
    },
    watch: {
      id() {
        this.showCurrentCustomer()
      }
    },
    created() {
        this.showCurrentCustomer()
    },
};
</script>

<style scoped>
form {
    margin-left: 24px;
    margin-right: 24px;
}
</style>
