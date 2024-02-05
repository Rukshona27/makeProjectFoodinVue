<script>
import HeaderComp from "@/components/HeaderComp.vue";
import MainItems from './components/MainItems.vue';
import BasketItems from './components/BasketItems.vue';

export default{
    name:'app',
    methods:{},
    computed:{
        items(){return this.$store.getters.items;},
    },
    components:{ HeaderComp, MainItems, BasketItems, HeaderComp }
}
</script>

<template>
  <div class="wrapper">
    app
    <header-comp></header-comp>
    <div class="wrapper2">
      <MainItems v-for="item in items"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :weight="item.weight"
        :price="item.price"
        :key="item.id"
        :img="item.img"/>
    </div>
    <hr>
    <basket-items></basket-items>
  </div>
</template>

<style scoped>
</style>
