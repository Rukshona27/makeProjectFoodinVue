<template>
    <button type="button" class="btn colorWhite">Корзина ({{BASKET_LENGTH}})</button>
</template>
<script>
    export default{
       name: 'shopping Basket',
       computed:{
        BASKET_LENGTH(){return this.$store.getters.BASKET_LENGTH;}
       }
    }

</script>

<style scoped>
.btn{
    background: none;
    border: none;
    font-weight: 500;
}
</style>