<template>
    <div id="app">
        <Book msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import Book from './components/Book.vue'

export default {
    name: 'app',
    components: {
        Book
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*
  text-align: center;
  */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
