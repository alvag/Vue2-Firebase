const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Mundo!',
        nuevaTarea: null,
        tareas: [
            {
                titulo: 'Aprender Vue',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo: 'Publicar todos los días',
                prioridad: true,
                antiguedad: 378
            }
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});
