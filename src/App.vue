<template>
  <div id="app">
    <div class="container">
      <h1>{{ title }}</h1>
      <aside>
        Here you can search a country upon it's name, once you find the results
        press
        <button @click="isShow = !isShow">
          here
        </button>
        for further information.
      </aside>
      <!-- searchbar with v-model to store what is written  -->
      <input type="text" v-model="search" placeholder="Search a country" />

      <SearchbarForCall />
      <div v-for="item in filteredPosts" :key="item.id" class="search-results">
        <h3>{{ item.name }}</h3>
        <img :src="item.flag" />
        <div v-show="isShow" class="showlist">
          <ul>
            <li>name: {{ item.name }}</li>
            <li>-region: {{ item.region }}</li>
            <li>-capital: {{ item.capital }}</li>
            <li>callingCodes: {{ item.callingCodes[0] }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchbarForCall from "./components/SearchbarForCall";

import axios from "axios";
//in export we send an object with the components we want to export and props we want to use in the app and methods,functions and so on
export default {
  name: "App",
  components: {
    SearchbarForCall,
  },
  props: {
    title: {
      type: String,
      default: "Countries Directory",
    },
  },

  data() {
    return {
      search: "name a country..",
      SearchbarForCall: [],
      isShow: false,
    };
  },

  computed: {
    filteredPosts() {
      return this.SearchbarForCall.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
  mounted() {
    let flagi = `https://restcountries.com/v2/all`;
    // let flagi = `http://api.countrylayer.com/v2/all?access_key=97b6a2874bf63c7ec228607ef0a7acc6`;
    axios(flagi)
      .then((response) => {
        this.SearchbarForCall = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#app {
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: rgb(61, 56, 56);
}
ul {
  width: 20%;
  list-style: none;
  padding: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 100px;
  height: auto;
}

button {
  background-color: transparent;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #5de958;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.92em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  color: darkgreen;
  text-align: center;
  transition: all 0.2s;
}
button:hover {
  color: white;
  background-color: darkgreen;
}
input {
  overflow: hidden;
  background-color: #3deb1117;
  height: 2em;
  border-radius: 0.49em;
}

.container {
  width: 100vw;
  height: auto;
}
.search-results {
  width: 100vw;
  background-color: #d0d6ce42;
  padding: 20px;
}
.showlist {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
