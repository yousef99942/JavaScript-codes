{
  choosingMajor(event) {
    const Values = ["إعدادية مهنية", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراة",];
    if (Values.includes(event)) {
      document.getElementById("89858").style.display = "block";
      document.getElementById("89861").style.display = "block";
    } else {
      document.getElementById("89858").style.display = "none";
      document.getElementById("89861").style.display = "none";
    }
  },

  chooseExperience(event) {
    if (event === "نعم") {
      document.getElementById("89839").style.display = "block";
    } else {
      document.getElementById("89839").style.display = "none";
    }
  },

  // chooseSkill(event) {
  //   if (event === "أخرى") {
  //     document.getElementById("89841").style.display = "block";
  //   } else {
  //     document.getElementById("89841").style.display = "none";
  //   }
  // },

  haveIncome(event) {
    if (event === "نعم") {
      document.getElementById("89849").style.display = "block";
    } else {
      document.getElementById("89849").style.display = "none";
    }
  },

  First_Hide(event){
    this.inputFormField["other"] = null;
    if(event.includes("أخرى")){
      document.getElementById("89841").style.display = "block"; //أخرى
    }else{
      document.getElementById("89841").style.display = "none";
    }
  }
}