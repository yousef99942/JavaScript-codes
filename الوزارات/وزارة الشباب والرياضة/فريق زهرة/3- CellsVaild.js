{
  if (this.inputFormField.worksandservice == "نعم") {
    if (
      this.inputFormField["personalservices"] == null ||
      this.inputFormField["personalservices"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  //رقم الموبايل
  if (this.inputFormField.mobinumberper) {
    const phoneNo = this.inputFormField.mobinumberper;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الموبايل بالرقم 07.");
    }
  }
}
