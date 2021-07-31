import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0]
     }
    },
    mutations: {
        addToCounter(state, payload){
        state.counter = state.counter + payload;
        state.history.push(state.counter);          // --> push the counter to history
        },
        removeFromCounter(state, payload){
        state.counter = state.counter - payload;
        state.history.push(state.counter);
        }
    },
    actions: {
        async addRandomNumber(context) {      // async method because we are fetching data--->
                                            // --> we make an async request (using axios library)
        let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new');
        context.commit('addToCounter', data.data)       //-->passing in the mutation and the payload which is data 
                                                        // data.data! as data is an object and inside it it is called data that we want to extract                    
        }         
    },
    getters: {
        activeIndexes: (state) => (payload) => {    //all the indexes of the value we passed in the search area -> it will be a method that takes in the state -> we need to pass in the payload, as a second argument, -> we call another function
          let indexes = [];                         // will be an array, there can be multiple indexes with the same number we searched for
          state.history.forEach((number, index) =>{ // we go through each of them
            if(number === payload){
                indexes.push(index)
            }
          });
          return indexes                                         
                                                    }
                                                }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
