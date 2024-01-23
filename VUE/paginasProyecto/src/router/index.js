import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/PaginaInicio.vue";
import paginaListar from "@/paginas/PaginaListar.vue";
import paginaSobreMi from "@/paginas/PaginaSobreMi.vue"

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/', 
            name:'inicio',
            component: paginaInicio
        },  
        {   path: '/listado', 
            name:'listar',
            component: paginaListar
        }, 
        {   path: '/listado', 
            name:'listar',
            component: paginaSobreMi
        }, 
        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }
    ]

});

export default router;