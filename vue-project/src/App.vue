<script>
import HeaderComp from "@/components/HeaderComp.vue"
import MainItems from './components/MainItems.vue';
import BasketProduct from './components/BasketProduct.vue';

export default{
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: '930 ₽',
                },
                {
                    id: 2,
                    name: 'Индейка',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '250 г',
                    price: '3230 ₽',
                },
                {
                    id: 3,
                    name: 'Гусь',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '230 г',
                    price: '3100 ₽',
                },
                {
                    id: 4,
                    name: 'Утка',
                    description: 'ФФаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '230 г',
                    price: '2030 ₽',
                },
                {
                    id: 5,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: '3230 ₽',
                },
                {
                    id: 6,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: '930 ₽',
                },
                {
                    id: 7,
                    name: 'Индейка',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '250 г',
                    price: '3230 ₽',
                },
                {
                    id: 8,
                    name: 'Гусь',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '230 г',
                    price: '3100 ₽',
                },
                {
                    id: 9,
                    name: 'Утка',
                    description: 'ФФаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '230 г',
                    price: '2030 ₽',
                },
                {
                    id: 10,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: '3230 ₽',
                },
            ],
            arr:[]
        };
    },
    methods:{},
    components:{ HeaderComp, MainItems, BasketProduct }
}
</script>

<template>
  <div class="wrapper">
    <HeaderComp/>
    <div class="wrapper2">
      <MainItems v-for="item in items"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :weight="item.weight"
        :price="item.price"
        :key="item.id"/>
    </div>
  </div>
  <hr>
  <BasketProduct/>
</template>

<style scoped>
</style>
