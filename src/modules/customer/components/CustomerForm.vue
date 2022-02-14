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
        <button @click="update" type="button" class="btn btn-primary">
            Actualizar
        </button>
        <button @click="deleteCustomer" type="button" class="btn btn-danger">
            Eliminar
        </button>
    </form>
    <FloatButton icon="fa-solid fa-check" @buttonClicked="saveCustomer" />
</template>

<script>
export default {};
</script>

<style scoped>
form {
    margin-left: 24px;
    margin-right: 24px;
}
</style>
