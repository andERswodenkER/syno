import '../scss/style.scss';
import Vue from 'vue'
import VueResource from 'vue-resource'
import jQuery from 'jquery';
Vue.use(VueResource);
const http=Vue.http;

export default http

!function ($) {

}(jQuery);
var app = new Vue({
    el: '#app',
    data: {
        path: "",
        loading: false,
        show: true,
        isOpen: false,
        todoOpen: false,
        commentOpen: false,
        altOpen: false,
        errorOpen: false,
        robotOpen: false,
        imagetodoOpen: false,
    },
    methods: {
        post: function () {
            this.show = false;
            this.loading = true;
            this.$http.post("/", {
                path: this.path
            }).then(response => {
                this.loading = false;
                this.show = true;
            }, response => {

            });
        },
    }
});
