const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1'
    },

    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
            vm2.mensaje = 'Hola desde instancia 1';
        }
    },
    computed: {
        mensajeMayusculas() {
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    data: {
        mensaje: 'Instancia Vue 2'
    },
    el: '#app'
});