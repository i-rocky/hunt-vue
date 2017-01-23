import Vue from 'vue'
import Hunt from './Hunt'

Vue.mixin({
    methods: {
        /**
         * Overrides get method
         *
         * callback[0] = success
         * callback[1] = error
         *
         * this.get('url', [success=>{}, error=>{}]);
         *
         * @param url
         * @param callback
         */
        get(url, callback) {
            this.$http.get(Hunt.BASE_URL + url).then(
                success => {
                    callback[0](success)
                },
                error => {
                    callback[1](error)
                }
            );
        },
        /**
         * Overrides post method
         *
         * callback[0] = success
         * callback[1] = error
         *
         * this.post('url', {foo: bar}, [success=>{}, error=>{}]);
         *
         * @param url
         * @param data
         * @param callback
         */
        post(url, data, callback) {
            this.$http.post(Hunt.BASE_URL + url, data).then(
                success => {
                    callback[0](success)
                },
                error => {
                    callback[1](error)
                }
            );
        },
        /**
         * Overrides delete method
         *
         * callback[0] = success
         * callback[1] = error
         *
         * this.delete('url', [success=>{}, error=>{}]);
         *
         * @param url
         * @param callback
         */
        delete(url, callback) {
            this.$http.delete(Hunt.BASE_URL + url).then(
                success => {
                    callback[0](success)
                },
                error => {
                    callback[1](error)
                }
            );
        }
    }
});