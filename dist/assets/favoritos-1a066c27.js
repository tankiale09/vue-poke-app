import{j as a,e as r}from"./index-acc66e52.js";const f=a("favoritos",()=>{const o=r([]);return localStorage.getItem("favoritos")&&(o.value=JSON.parse(localStorage.getItem("favoritos"))),{favoritos:o,add:e=>{o.value.push(e),localStorage.setItem("favoritos",JSON.stringify(o.value))},remove:e=>{o.value=o.value.filter(t=>t.id!==e),localStorage.setItem("favoritos",JSON.stringify(o.value))},buscar:e=>{console.log(o.value.find(t=>t.id==e))}}});export{f as u};
