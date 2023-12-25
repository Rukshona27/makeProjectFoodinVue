<!-- <script>
import MainItems from './MainItems.vue';

    export default{
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: 620,
                },
                {
                    id: 2,
                    name: 'Индейка',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '250 г',
                    price: 450,
                },
                {
                    id: 3,
                    name: 'Гусь',
                    description: 'Фаршированный яблоком',
                    weight: '230 г',
                    price: 7900,
                },
                {
                    id: 4,
                    name: 'Утка',
                    description: 'Фаршированная рисом, курагой и айвои',
                    weight: '230 г',
                    price: 3230,
                },
                {
                    id: 5,
                    name: 'Ягненок',
                    description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                    weight: '225 г',
                    price: 620,
                },
            ]
        };
    },
}
</script>

<template>
    <MainItems v-for="item in items"
    :id="item.id"
    :name="item.name"
    :description="item.description"
    :weight="item.weight"
    :price="item.price"
    :key="item.id"/>
</template>
<style>

</style> -->