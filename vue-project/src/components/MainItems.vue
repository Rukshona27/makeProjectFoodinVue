<template>
    <div class="products colorWhite">
            <img :src="img">
            <div class="doJustFlex pWeight" >
                <h4 class="elem">{{ name }}</h4>
                <p class="textSizeHalf elem">{{ weight }}</p>
            </div>
            <p class="textSizeHalf elem">{{ description }}</p>
            <p class="elem">{{price}} ₽</p>
            <div class="doJustFlex btnFlex">
                <button type="button" v-on:click="addToBasket(id)" class="plus btn colorWhite">+</button>
                <button type="button" class="minus btn colorWhite">-</button>
            </div>
    </div>
</template>

<script>
// const ruble = num => `$${num} ₽`;
// export { ruble };
    export default{
        props:['id', 'name', 'description', 'weight', 'price', 'img'],
        methods:{
            addToBasket(id){
                this.$store.dispatch('addToBasket', id);
            }
        },
        // ruble,
        emits:[]
    }
</script>
<style scoped>
    .products{
        background-color: #504B4A;
        height: 130px;
        border-radius: 10px;
        padding: 13px;
        box-sizing: border-box;
        margin-bottom: 1.5%;
    }
    @media (min-width: 1000px){
        .products{
            width:calc(100% /5 - 1.5%*4/5);
        }
        .products:not(:nth-child(5n)){
            margin-right: 1.5%;
        }
    }
    @media (min-width: 700px) and (max-width: 1000px) {
        .products{
            width: calc(100%/3 - 1.5%*2/3);
        }
        .products:not(:nth-child(3n)){
            margin-right: 1.5%;
        }
    }
    @media (min-width: 400px) and (max-width: 700px) {
        .products{
            width: calc(100%/2 - 1.5%*1/2);
        }
        .products:not(:nth-child(2n)){
            margin-right: 1.5%;
        }
    }
    @media (man-width: 400px){
        .products{
            width: 100%;
        }
    }
    .pWeight{
        justify-content: space-between;
    }
    .pWeight p{
        padding-top: 6px;
    }
    .elem{
        padding-top: 6px;
    }
    .btnFlex{
        justify-content: end;
    }
    .plus{
        margin-right: 25px;
    }
</style>