<template>
    <div class="wrapper">
        <nav>
            <a href="#" class="colorWhite logo"><p>LOGOS</p></a>
            <div class="doJustFlex divHead">
                <span class="material-symbols-outlined colorWhite locationOnIcon">location_on</span>
                <input class="inputHead" type="text" placeholder="Введите адрес доставки">
                <span class="material-symbols-outlined colorWhite searchIcon">search</span>
            </div>
            <div class="contacts doJustFlex">
                <span class="material-symbols-outlined colorWhite phoneIcon">phone_in_talk</span>
                <div class="contacts2">
                    <p class="contactTitle">Контакты</p>
                    <p class="colorWhite contactTel">+7(916)510-57-59</p>
                </div>
            </div>
            <button class="btnHead">
                <RouterLink class="colorWhite linkBtn" to="/basket">Корзина | <span class="colorBlack">{{basketLength}}</span></RouterLink>
            </button>
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
    },
    computed:{
        basketLength(){return this.$store.getters.BASKET_LENGTH},
    }
}
</script>

<style scoped>
    .logo{
        letter-spacing: 3px;
        text-decoration-line: none;
        margin-top: 5px;
    }
    nav{
        display: flex;
        justify-content: space-around;
        padding: 15px;
    }
    .divHead{
        background-color: #504B4A;
        border-radius: 10px;
    }
    .searchIcon, .locationOnIcon{
      font-size: 1.2rem;  
      margin-bottom: 6px;
      margin-right: 8px;
    }
    .phoneIcon{
        background-color: #618967;
        font-size: 1rem;
        flex-grow: 1;
        border-radius:8px;
        padding: 3px;
    }
    .contacts2{
        flex-grow: 2;
    }
    .contacts{
        flex-direction: row;
    }
    .contactTitle{
        color: #CFCFCF;
    }
    .linkBtn{
        text-decoration-line: none;
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
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  padding-top: 3px;
}
</style>