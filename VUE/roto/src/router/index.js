import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        //Públicas
        {   path: '/', 
            name:'Login',
            component: login
        },  
        {   path: '/listado', 
            name:'Listar',
            component: paginaListar,
            beforEnter: (to, from, next) => {
                let usuario = localStorage.getItem('usuario')             
                if (usuario!==null) {
                    next()
                } else {
                    Swal.fire({
                        title: "¡Debes iniciar sesión!",
                        text: "Debes iniciar sesión para acceder a esta página.",
                        icon: "warning"
                    }).then(() => {
                        next('/');
                    });
                }
            }
        }, 
        
        //Si se produce un error
        // {
        //     path: '/:pathMatch(.*)*',
        //     redirect:() => ({ name:'login'})
        // }
    ]

});

export default router;