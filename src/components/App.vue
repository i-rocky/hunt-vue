<template>
    <div>
         <router-link to="/hello"><h1>Hello World</h1></router-link>
    </div>
</template>
<script>
    export default {
    name: 'App',
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted() {
            this.$store.dispatch('increment')
        }
    }
</script>
