var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    numbers: [3,6,7],
    sumOfNumbers: 0,
    newNumber: 3
  },
  methods: {
    findSumOfNumbers: function() {
      console.log('finding sum of numbers');
      var sum = 0;
      this.numbers.forEach(function(number) {
        sum += number;
      })
      this.sumOfNumbers = sum;
    },
    addNumber: function() {
      this.numbers.push(this.newNumber);
    }
  },
  computed: {
    computedNumbers: function() {
      console.log('running the computed property')
      var sum = 0;
      this.numbers.forEach(function(number) {
        sum += number;
      })
      return sum;
    }
  }
});
