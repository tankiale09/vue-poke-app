<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

let pokemones = ref([]);
let next=ref([]);
let previous=ref([]);
const urls = "https://pokeapi.co/api/v2/pokemon";

const getData = async (url) => {
    try {
        const { data } = await axios.get(url);
        pokemones.value = data.results;
        next.value = data.next;
        previous.value = data.previous;

    } catch (error) {
        console.log(error);
    }
}

getData(urls);
</script>


<template>
    <div class="d-flex p-2 justify-content-center">
        <button @click="getData(previous)" type="button" class="btn btn-outline-success me-2" :disabled="!previous">Previous</button>
        <button @click="getData(next)" type="button" class="btn btn-outline-success me-2" :disabled="!next">Next</button>
    </div>
    <div class="list-group container-sm">
        <ol class="list-group list-group-numbered">
            <RouterLink :to="`/pokemons/${data?.name}`" class="text-decoration-none mb-2" v-for="data in pokemones">
                <li class="list-group-item list-group-item-info mt-2 list-group-item-action  border-success rounded-pill">
                    {{ data?.name }}
                </li>
            </RouterLink>
        </ol>
    </div>

</template>


<style>

</style>
