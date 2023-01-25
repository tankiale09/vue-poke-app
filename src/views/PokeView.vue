<script setup>
import { ref ,computed ,reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const pokes = ref({});
const route = useRoute();

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


</script>

<template>
    <div v-if="pokes != null">
  <img v-bind:src="pokes?.sprites?.front_default"/>
  <h1>Pokemon: {{ route.params.poke }}</h1>
  <button @click="back">Volver</button>
    </div>
    <div v-else>
    <h1>NO EXISTE ESE POKEMON</h1>
    <button @click="back">Volver</button>
    </div>
</template>
