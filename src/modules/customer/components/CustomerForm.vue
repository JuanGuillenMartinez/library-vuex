<template>
    <form>
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
    </form>
    <FloatButton icon="fa-solid fa-check" @buttonClicked="sendCustomer" />
</template>

<script>
import FloatButton from '@/components/FloatButton'
import { mapActions } from 'vuex';
export default {
    components: {
        FloatButton,
    },
    data() {
        return {
            name: '',
            first_name: '',
            last_name: '',
            email: '',
            address: '',
        }
    },
    methods: {
        ...mapActions('CustomerStore', [ 'saveCustomer' ]),
        async sendCustomer() {
            const customer = {
                name: this.name,
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                address: this.address,
            }
            await this.saveCustomer(customer)
            this.clearInputs()
        },
        clearInputs() {
            this.name = ''
            this.first_name = ''
            this.last_name = ''
            this.email = ''
            this.address = ''
        }
    }
};
</script>

<style scoped>
form {
    margin-left: 24px;
    margin-right: 24px;
}
</style>
