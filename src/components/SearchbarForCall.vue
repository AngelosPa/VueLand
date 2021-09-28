<template>
  <div class="number-searchbar">
    <aside>Here you can search a country upon the Calling Code</aside>
    <input
      type="number"
      v-model="search"
      placeholder="type only the calling num"
    />

    <div v-for="item in filteredNums" :key="item.id" class="search-results">
      <h3>{{ item.name }}</h3>
      <img :src="item.flag" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchbarForCall",
  data() {
    return {
      search: "",
      numberlist: [],
    };
  },
  computed: {
    filteredNums() {
      return this.numberlist.filter(
        (item) => item.callingCodes[0] == this.search
      );
    },
  },
  mounted() {
    let callNum = `https://restcountries.com/v2/all`;

    axios(callNum)
      .then((response) => {
        console.log(response.data);
        this.numberlist = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<!-- scoped means that everything there is for this component-->

<style scoped>
.number-searchbar {
  padding: 10vh 0 10vh 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  height: 3em;
}
</style>
