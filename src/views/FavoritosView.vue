<script setup>
import { useFavoritosStore } from '@/store/favoritos.js'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
    <h1 class="text-center text-success mt-4">FAVORITOS: </h1>
    <div class="container"> 
    <ul class="list-group">

    <li v-for="data in favoritos" :key="data.id" class="list-group-item active mt-3">Pokemon Number: {{ data.id }} - {{ data?.name }} - <img :src="data?.sprites?.front_default"> <button class="btn btn-outline-danger" @click="remove(data.id)">Delete</button><RouterLink class="btn btn-outline-light ms-4" :to="`/pokemons/${data.name}`">More Info</RouterLink></li>

    </ul>
    </div>
</template>