<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';




const router= useRouter()

const back = (input) => {
  router.push(`/pokemons/${input}`)
};

</script>

<template>
  <nav class="navbar bg-dark  " data-bs-theme="dark">
  
    <div class="container-fluid d-flex justify-content-end ">
    <a class="navbar-brand text-success position-absolute top-1 start-0 ms-1 pe-3" href="/">POKE API</a>
      <div class="d-inline-flex">
        <RouterLink to="/" class="btn btn-outline-primary me-2 mb-2" active-class="active">Home</RouterLink>
        <RouterLink to="/pokemons" class="btn btn-outline-primary me-2 mb-2" active-class="active">Pokemons</RouterLink>
        <RouterLink to="/aboutme" class="btn btn-outline-primary me-2 mb-2" active-class="active">About This</RouterLink>
      </div>
      <form class="d-flex" role="search" name="form" id="form" v-on:submit.prevent="onSubmit">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="buscar" name="buscar" v-model="valor">
        <button class="btn btn-outline-success me-3" type="submit" @click="back(valor)">Search</button>
      </form>
      
      
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>


