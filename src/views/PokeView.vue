<script setup>
import { ref, computed, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useFavoritosStore } from '@/store/favoritos.js'
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritosStore();


const { add } = useFavoritos;
const pokes = ref([]);
const route = useRoute();
const { buscar} = useFavoritos;

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.poke}`
    );
    pokes.value = data;
  } catch (error) {
    console.log(error);
    pokes.value = null;
  }
};
getData();

const router = useRouter();

const back = () => {
  router.push("/pokemons");
};

console.log(buscar(pokes.name));
</script>

<template>
  <div v-if="pokes != null">
    <img :src="pokes?.sprites?.front_default" />
    <h1>Pokemon: {{ route.params.poke }}</h1>
    <button @click="back" class="btn btn-outline-secondary">Volver</button>
    <button class="btn btn-outline-success ms-3" @click="add(pokes)" :disabled="buscar(pokes.name)">Favorito</button>
  </div>
  <div v-else>
    <h1>NO EXISTE ESE POKEMON</h1>
    <button @click="back">Volver</button>
  </div>
</template>
