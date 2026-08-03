{
  let Selected_Value = [
    "البكالوريوس",
    "ماجستير",
    "دكتوراة",
    "الاعداديات المهنية",
    "المعاهد",
  ];

  if (Selected_Value.includes(this.inputFormField.Acachie)) {
    if (
      this.inputFormField["Specialization"] == null ||
      this.inputFormField["Specialization"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  //---------------------------------------------------------------------------
  if (this.inputFormField.PhoneNumbers) {
    const phoneNo = this.inputFormField.PhoneNumbers;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الثاني بالرقم 07.");
    }
  }
}
