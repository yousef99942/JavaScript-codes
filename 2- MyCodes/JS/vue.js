const { createApp } = Vue;

//First Div
createApp({
  data() {
    return {
      message: "Hello, Vue 3!",
      Name: "Yousif",
      Age: 27,
      Link: "https://www.google.com/",
      Image: "https://vuejs.org/images/logo.png",
    };
  },

  methods: {
    greet() {
      alert(`Hello, ${this.Name}! You are ${this.Age} years old.`);
    },
    changeName() {
      this.Name = "Ahmed";
    },
    Print(Time) {
      return `The time is: ${Time}`;
    },
    SecondPrint() {
      console.log("This is the second print function.");
    },
  },
}).mount("#app");

//Second Div
createApp({
  data() {
    return {
      MyNumber: 0,
    };
  },

  methods: {
    IncraseNumber() {
      this.MyNumber++;
    },
    DecraseNumber() {
      this.MyNumber--;
    },
  },
}).mount("#SecondApp");
