<template>
    <div>
        <router-link to="/">World Hello</router-link>
    </div>
</template>
<script>
    export default{
    name: 'Hello',
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted() {
            this.$store.dispatch('increment', 5)
            this.get('Hello', [
                    s=>{console.log(s);},
                    f=>{console.log(f);}
                ]);
        }
    }
</script>
