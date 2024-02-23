import { createRouter, createWebHistory } from "vue-router";
import paginaInicio from "@/paginas/PaginaInicio.vue";
import paginaListar from "@/paginas/PaginaListar.vue";
import paginaSobreMi from "@/paginas/PaginaSobreMi.vue";
import inicioSesion from "@/paginas/InicioSesion.vue";
import Swal from "sweetalert2";

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
            component: paginaListar,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')   
                //console.log(usuario)             
                if (usuario!==null) {
                    next()
                } else {
                    Swal.fire({
                        title: "¡Debes iniciar sesión!",
                        text: "Debes iniciar sesión para acceder a esta página.",
                        icon: "warning"
                    }).then(() => {
                        next('/iniciosesion');
                    });
                }
            }
        }, 
        {   path: '/sobremi', 
            name:'sobreMi',
            component: paginaSobreMi,
            beforeEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')   
                //console.log(usuario)             
                if (usuario!==null) {
                    next()
                } else {
                    next('/usuario')
                }
            }
        }, 
        {   path: '/iniciosesion', 
            name:'inicioSesion',
            component: inicioSesion           
        }, 
        //Si se produce un error
        {
            path: '/:pathMatch(.*)*',
            redirect:() => ({ name:'inicio'})
        }       
    ]    
});

export default router;