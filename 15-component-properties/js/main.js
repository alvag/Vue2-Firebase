Vue.component('autor', {
    props: ['nombre'],
    template: `<div><h1>{{ nombre }}</h1><button @click="cambiarProp">Enviar Prop</button></div>`,
    mounted() {
        // las props son accesibls desde this (proxy)
    },
    methods: {
        cambiarProp() {
            this.nombre = this.nombre.toUpperCase();
        }
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'Max Alva'
    }
});