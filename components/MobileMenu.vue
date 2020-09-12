<template>
    <div class="mobile-menu">
        <nuxt-link to='`/${item}`' v-for="(item, i) in menu" :key="i"><p>{{ item }}</p></nuxt-link>
    </div>
</template>
<script lang="ts">
export default {
    data(){
        return{
           menu:['Home', 'What We Do', 'Who We Are', 'Gallery', 'Quick Links', 'Insights', 'Contact us']
        }
    }
}
</script>
<style lang="scss" scoped>
.mobile-menu{
    background: #205373;
    a{
        text-align: center;
        p{
            padding: 10px 0;
            color: #fff;
            border-bottom: 1px solid #fff;
        }
    }
}
</style>