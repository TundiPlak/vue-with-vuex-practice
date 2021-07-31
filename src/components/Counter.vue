<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="removeFromCounter(parseInt(value))">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(parseInt(value))">+</button>
    <!-- with parseInt we parse it to integer, avoid concatenation -->

    <div>
      <button class="btn" @click="addRandomNumber">Add A Random Number</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      value: 1, // --> this is our payload, which i pass into addToCounter() at click
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "removeFromCounter"]),
    ...mapActions(["addRandomNumber"]),
  },
};
</script>

<style>
.counter {
  font-size: 4rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
</style>
