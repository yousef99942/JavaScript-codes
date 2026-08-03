{
  if (this.inputFormField.Branch == "علمي") {
    if (this.inputFormField["Ave"] < 95) {
      this.evalErr.push("المعدل المطلوب للفرع العلمي 95 فما فوق");
    } else if (this.inputFormField["Ave"] > 100) {
      this.evalErr.push("المعدل لا يمكن ان يكون اكبر من 100");
    }
  }

  if (this.inputFormField.Branch == "ادبي") {
    if (this.inputFormField["Ave"] < 85) {
      this.evalErr.push("المعدل المطلوب للفرع الادبي 85 فما فوق");
    } else if (this.inputFormField["Ave"] > 100) {
      this.evalErr.push("المعدل لا يمكن ان يكون اكبر من 100");
    }
  }

  var Date_of_Birth = new Date(this.inputFormField["Birth"]);
  if (Date_of_Birth.getFullYear() < 2005) {
    this.evalErr.push("يجب ان تكون سنة الميلاد من 2005 فما بعد");
  }
}
