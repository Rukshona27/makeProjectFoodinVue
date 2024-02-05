import {createStore} from 'vuex';

const store = createStore({
  state: {
    items: [
        {
            id: 1,
            name: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '225 г',
            price: 930,
            img: '../components/img/imag1.png',
        },
        {
            id: 2,
            name: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '250 г',
            price: 3230,
            img: 'imag2.png',
        },
        {
            id: 3,
            name: 'Гусь',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '230 г',
            price: 3100,
            img: 'imag3.png',
        },

        {
            id: 4,
            name: 'Утка',
            description: 'ФФаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '230 г',
            price: 2030,
            img: 'imag4.png',
        },
        {
            id: 5,
            name: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '225 г',
            price: 3230,
            img: 'imag1.png',
        },
        {
            id: 6,
            name: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '225 г',
            price: 930,
            img: 'imag2.png',
        },
        {
            id: 7,
            name: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '250 г',
            price: 3230,
            img: 'imag3.png',
        },
        {
            id: 8,
            name: 'Гусь',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '230 г',
            price: 3100,
            img: 'imag4.png',
        },
        {
            id: 9,
            name: 'Утка',
            description: 'ФФаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '230 г',
            price: 2030,
            img: 'imag4.png',
        },
        {
            id: 10,
            name: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: '225 г',
            price: 3230,
            img: 'imag2.png',
        },
    ],
    basket:[],
  },
  getters: {
    items: state => state.items,
    basket: state => state.basket,
    BASKET_LENGTH: state => state.basket.length,
  },
  mutations: {
    ADD_TO_BASKET(state, id){state.basket.push(id);},
    REMOVE_FROM_BASKET(state, index){state.basket.splice(index, 1);}
  },
  actions: {
    addToBasket(context, id){context.commit('ADD_TO_BASKET', id);},
    removeFromBasket(context, index){context.commit('REMOVE_FROM_BASKET', index);},
  },
});
export default store;