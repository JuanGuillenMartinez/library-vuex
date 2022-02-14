<template>
    <div v-if="isLoading">Cargando...</div>

    <form v-else>
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido Paterno</label>
            <input v-model="first_name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido Materno</label>
            <input v-model="last_name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Correo electrónico</label>
            <input v-model="email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
            <label class="form-label">Dirección de residencia</label>
            <input v-model="address" type="text" class="form-control" />
        </div>
        <button @click="update" type="button" class="btn btn-primary">
            Actualizar
        </button>
        <button @click="deleteCustomer" type="button" class="btn btn-danger">
            Eliminar
        </button>
    </form>
    <FloatButton @buttonClicked="addCustomer" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
export default {
    components: {
        FloatButton: defineAsyncComponent(() =>
            import("@/components/FloatButton")
        ),
    },
    props: {
        id: String,
    },
    data() {
        return {
            name: "",
            first_name: "",
            last_name: "",
            address: "",
            email: "",
        };
    },
    computed: {
        ...mapGetters("CustomerStore", ["currentCustomer", "isLoading"]),
    },
    methods: {
        ...mapActions("CustomerStore", [
            "fetchCustomerById",
            "deleteCustomerById",
            "updateCustomerById",
        ]),
        async showCurrentCustomer() {
            await this.fetchCustomerById(this.id);
            const { name, first_name, last_name, address, email } = this.currentCustomer;
            this.name = name;
            this.first_name = first_name;
            this.last_name = last_name;
            this.address = address;
            this.email = email;
        },
        async update() {
            const id = this.id;
            const customer = {
                name: this.name,
                first_name: this.first_name,
                last_name: this.last_name,
                address: this.address,
                email: this.email,
            };
            await this.updateCustomerById({ id, customer });
        },
        async deleteCustomer() {
            const success = await this.deleteCustomerById(this.id);
            if (success) {
                this.$router.push({ name: "CustomerIndex" });
            }
        },
        addCustomer() {
            console.log("hola");
        },
    },
    watch: {
        id() {
            this.showCurrentCustomer();
        },
    },
    created() {
        this.showCurrentCustomer();
    },
};
</script>

<style scoped>
form {
    margin-left: 24px;
    margin-right: 24px;
}
</style>
