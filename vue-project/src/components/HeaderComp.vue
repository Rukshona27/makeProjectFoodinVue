<template>
    <div class="wrapper">
        <nav>
            <a href="#" class="colorWhite logo"><p>LOGOS</p></a>
            <div>
                <input class="input" type="text" placeholder="Введите адрес доставки">
            </div>
            <div class="contacts doJustFlex">
                <span class="material-symbols-outlined colorWhite">phone_in_talk</span>
                <div><p class="colorWhite textSizeHalf">Контакты</p><p class="colorWhite textSizeHalf">+7(916)510-57-59</p></div>
            </div>
            <button class="button backgroundGreen colorWhite"><basket-button></basket-button></button>
        </nav>
        <div class="banner"></div>
        <hr>
    </div>
</template>

<script>
import BasketButton from "./BasketButton.vue";
export default{
    components:{
        BasketButton,
    }
}
</script>

<style scoped>
    .logo{
        letter-spacing: 3px;
        text-decoration-line: none;
    }
    nav{
        display: flex;
        justify-content: space-around;
        padding: 15px;
    }
    .input{
        background-color: #504B4A;
        border: none;
        border-radius: 10px;
        font-size: 1em;
        height: 30px;
    }
    /* fallback */
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v154/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: 300;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  background-color: #618967;
  border-radius: 8px;
  padding-top: 3px;
}
</style>