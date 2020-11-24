<template>
    <div class="alert alert-primary" role="alert">
        <router-link :to="`/peliculas/${id}`"> <!--mover entre rutas-->
            {{titulo}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Tarjeta',
    props: {
        titulo: String,
        id: String
    }
}
</script>

<style>

</style>