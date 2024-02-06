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
        <hr>
        <div class="menu">
            <ul class="UlNone">
                <a href="#"><li class="menuNav">Холодные закуски</li></a>
                <a href="#"><li class="menuNav">Горячие закуски</li></a>
                <a href="#"><li class="menuNav">Супы </li></a>
                <a href="#"><li class="menuNav">Рыбные блюда</li></a>
                <a href="#"><li class="menuNav">Гриль меню</li></a>
                <a href="#"><li class="menuNav">Фирменные блюда</li></a>
                <a href="#"><li class="menuNav">Напитки</li></a>
            </ul>
        </div>
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
        flex-grow: 30%;
        border-radius:8px;
        padding: 3px;
    }
    .contacts2{
        flex-grow: auto;
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
    .UlNone{
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }
    .UlNone a{
        text-decoration-line: none;
        color: #CFCFCF;
    }
    .UlNone a :hover{
        text-decoration: underline;
        text-decoration-color: #335337;
        text-decoration-thickness: 3px;
    }
</style>