<template>
  <div class="container">
    <h1>History</h1>
    <div class="flex">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        <!--activeIndexes(parseInt(value)) gives us the whole array, and if this array includes this particular index-->
        {{ number }}
      </p>
    </div>
    <!-- {{ activeIndexes(value) }} this shows the array, in which it shows the indexes where the number is, multiple-->
    <input placeholder="Search by Index" type="number" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<style>
.container {
  margin-top: 7rem;
}

.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
}

.flex p {
  margin: 1rem;
}

.bold {
  font-weight: 900;
}
</style>
