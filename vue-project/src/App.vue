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
    <header-comp></header-comp>
    <div class="titleApp doJustFlex">
      <span class="lineVertical"></span>
      <h1 class="titleName colorWhite" >ХОЛОДНЫЕ ЗАКУСКИ</h1>
    </div>
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
    <div class="aboutUs doJustFlex">
      <section class="abUs1">
        <h3>НАШЕ КАФЕ</h3>
        <p>Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
        <button type="button">ПОСМОТРЕТЬ МЕНЮ</button>
      </section>
      <section class="abUs2 doJustFlex">
        <aside>
          <div class="block">
            <a href="">Свежайшие продукты</a>
          </div>
          <div class="block">
            <a href="">Лучшие повора</a>
          </div>
        </aside>
        <aside>
          <div class="block">
            <a href="">Быстрая доставка</a>
          </div>
          <div class="block">
            <a href="">Свежайшие продукты</a>
          </div>
        </aside>
      </section>
    </div>
    <hr>
    <basket-items></basket-items>
  </div>
</template>

<style scoped>
.aboutUs{
  flex-direction: row;
}
.abUs1{
  padding-left: 6%;
}
.block{
  width: 220px;
  height: 220px;
  background-color: #504B4A;
}
.block a{
  text-decoration-line: none;
  color: white;
}
</style>
