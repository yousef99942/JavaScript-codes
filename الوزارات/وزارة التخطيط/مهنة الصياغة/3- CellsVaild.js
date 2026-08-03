{
  var Fields_Progs = [
      "licno", //رقم الاجازة
      "licdate", //تاريخ منح الاجازة
    ],
    Fields_Location = [30, 31];

  if (this.inputFormField.RequestType == "تجديد") {
    for (var i = 0; i < Fields_Progs.length; i++) {
      if (
        this.inputFormField[Fields_Progs[i]] == null ||
        this.inputFormField[Fields_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }
}
