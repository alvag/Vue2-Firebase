const vm = new Vue({
    el: 'main',
    data: { 
        nuevaTarea : null,       
        tareas : ['Aprender Vue', 'Aprender ES6', 'Publicar algo todos los días']
    },
    methods: {
        agregarTarea(){            
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});