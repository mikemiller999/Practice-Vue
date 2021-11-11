/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["The Terminator", "Fight Club"],
      newMovie: "",
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
    },
  },
});
