import { defineStore } from 'pinia';
import { ref , computed} from 'vue';

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([]);

    if (localStorage.getItem('favoritos')) {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'));
    }

    const add = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    }

    const buscar = (id) => {
        console.log(favoritos.value.find((found) => found.id == id));
    }; 

    return {
        favoritos ,
        add,
        remove,
        buscar,

    }


});
