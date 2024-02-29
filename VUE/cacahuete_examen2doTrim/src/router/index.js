import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/Paginas/paginaInicio.vue";
import paginaListar from "@/Paginas/paginaListar.vue";
import PaginaInicioSesion from "@/Paginas/PaginaInicioSesion.vue";
import autor from "@/Paginas/autor.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: paginaInicio,
            //beforeEnter: (to, from, next) => {
          
            
            //}
        },
        {
            path: '/listado',
            name: 'listar',
            component: paginaListar,
            //beforeEnter: (to, from, next) => {
               
            //}
        },
        {
            path: '/autor',
            name: 'autor',
            component: autor,
            //beforeEnter: (to, from, next) => {
               
            //}
        },
        {
            path: '/usuario',
            name: 'inicio-sesion',
            component: PaginaInicioSesion,
            //beforeEnter: (to, from, next) => {
                
           // }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'inicio' })
        }
    ]

});

export default router;