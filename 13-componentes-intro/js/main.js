Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`
});

const vm = new Vue({
    el: 'main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(respuesta => {
                this.tareasAjax = respuesta.data;
            });
    },
    data: {
        tareasAjax: []
    }
});