<template>
    <div class="wrapperBasket">
        <p>сделать ссылку на главную страницу</p>
        <div class="lineTitle doJustFlex">
            <span class="lineVertical"></span>
            <h1 class="colorWhite titleName">КОРЗИНА <span class="numBasket">(в корзине {{basketLength}} товара )</span></h1>
        </div>
        <div class="wrapperBasket" >
            <div class="wrapperBasketItem" v-for='(item, index) in itemInB' :key="item.id">
                <h3 class="colorWhite">{{item.name}}</h3>
                <p class="colorWhite">{{item.description}}</p>
                <p class="colorWhite">{{item.price}}</p>
                <button @click="removeFromBasket(index)" type="button" class="btnMain colorWhite"><span class="material-symbols-outlined">close</span></button>
                <hr class="lineHorizantal">
            </div>
            <div class="total">
                <hr>
                    <p>Общая сумма: {{total}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        items(){return this.$store.getters.items},
        basket(){return this.$store.getters.basket},
        itemInB(){
            return this.$store.getters.basket.map((itemInBasket)=>{
                return this.$store.getters.items.find((itemInItems)=>{
                    return itemInBasket === itemInItems.id;
                });
            });
        },
        basketLength(){return this.$store.getters.BASKET_LENGTH},
        total(){
            return this.itemInB.reduce((sum, num)=>sum + num.price, 0)
        },
    },
    methods:{
        removeFromBasket(index){
            this.$store.dispatch('removeFromBasket', index)
        }
    },
    components:{

    }
}
</script>

<style scoped>
.lineTitle{
    padding: 1%;
}
.numBasket{
    color: #416346;
    font-size: 1rem;
}
/* .wrapperBasket{
    background-color: #504B4A
} */
/* fallback */
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v161/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 0.7rem;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
}
</style>