Vue.component('alerta', {
    props: [
        'tipo',
        'posicion'
    ],
    template: `
                <section class="alerta" :class="[tipo, posicion]">
                    <header class="alerta__header">                        
                        <slot name="header">
                            Hola
                        </slot>
                    </header>
                    <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies tempor augue, faucibus dapibus nisl dapibus ut. Praesent varius tortor ac mi laoreet, et eleifend justo sagittis. Vestibulum feugiat neque risus, a dictum orci hendrerit vitae. Ut gravida, nunc sed sodales vehicula, nibh justo efficitur risus, ac rhoncus ligula est eu dui. Nulla condimentum volutpat pharetra. In luctus ullamcorper porttitor. Sed dapibus sit amet turpis et venenatis. Proin ut enim sed mi condimentum dignissim. Sed nec justo ipsum.
                        </slot>
                    </div>
                    <footer class="alerta__footer">
                        <slot name="footer">
                        Este es el texto del footer
                        </slot>                        
                    </footer>
                </section>`
});

new Vue({
    el: 'main'
});