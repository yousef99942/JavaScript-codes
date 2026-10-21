{
  if (
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية" ||
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية في نينوى"
  ) {
    if (this.inputFormField.pasText != "mpc") {
      this.evalErr.push("يرجى كتابة الرمز التعريفي");
    }
  }

  //التاكد من العمر
  var Birth_Year = new Date(this.inputFormField.agee).getFullYear();
  var Current_Year = new Date().getFullYear();

  if (this.inputFormField.chek == "اجازة سوق مركبة") {
    if (Birth_Year > Current_Year - 17) {
      this.evalErr.push("يجب أن يكون عمر المتقدم 17 سنة فما فوق");
    }
  } else if (this.inputFormField.chek == "اجازة سوق دراجة") {
    if (Birth_Year > Current_Year - 16) {
      this.evalErr.push("يجب أن يكون عمر المتقدم 16 سنة فما فوق");
    }
  }

  //التاكد من العمر
  // if (this.inputFormField.chek == "اجازة سوق مركبة") {
  //   var Person_Age = new Date(this.inputFormField.agee);
  //   var Vaild_Year = new Date();

  //   if (Person_Age.getFullYear() >= Vaild_Year.getFullYear() - 17) {
  //     this.evalErr.push("يجب ان يكون عمر المتقدم اكبر من 17 عاماً");
  //   }
  // } else if (this.inputFormField.chek == "اجازة سوق دراجة") {
  //   var Person_Age = new Date(this.inputFormField.agee);
  //   var Vaild_Year = new Date();

  //   if (Person_Age.getFullYear() >= Vaild_Year.getFullYear() - 16) {
  //     this.evalErr.push("يجب ان يكون عمر المتقدم اكبر من 16 عاماً");
  //   }
  // }
}
