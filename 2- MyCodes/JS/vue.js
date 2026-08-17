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
      name: "Yousif",
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

//Third Div
createApp({
  //هذي طريقة اولى لترتيب بيانات الحساب
  // data() {
  //   return {
  //     Username: "",
  //     Email: "",
  //     Password: "",
  //   };
  // },
  // methods: {
  //   CreateAccount() {
  //     const accountData = {
  //       Username: this.Username,
  //       Email: this.Email,
  //       Password: this.Password,
  //     };
  //     console.log("Account Created:", accountData);
  //   },
  // },
  //وهذي طريقة ثانية لترتيب بيانات الحساب
  data() {
    return {
      AccountData: {
        Username: "",
        Email: "",
        Password: "",
      },
    };
  },

  methods: {
    CreateAccount() {
      console.log("Account Created:", this.AccountData);
    },
  },
}).mount("#ThirdApp");

//Fourth Div
createApp({
  data() {
    return {
      NumberOne: 0,
      NumberTwo: 0,
    };
  },

  methods: {},

  computed: {
    ChangingFirst() {
      console.log("First Function");
      return this.NumberOne * 2;
    },
    ChangingSecond() {
      console.log("Second Function");
      return this.NumberTwo * 10;
    },
  },
}).mount("#FourthApp");
