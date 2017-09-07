Vue.component('candidato', {
    /* props: [
        'nombre',
        'correo',
        'imagen'
    ], */
    props: {
        nombre: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            default: 'micorreo@gmail.com'
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: 'Lima'
                };
            }
        }
    },
    template: '#candidato-template'
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then(respuesta => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});