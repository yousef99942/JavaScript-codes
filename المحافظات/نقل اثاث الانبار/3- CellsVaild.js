{
  let First_Selected_Value = [
      "بغداد",
      "بابل",
      "البصرة",
      "ذي قار",
      "المثنى",
      "كركوك",
      "واسط",
      "كربلاء المقدسة",
      "النجف الاشرف",
      "القادسية",
      "صلاح الدين",
      "ديالى",
      "نينوى",
      "ميسان",
    ],
    Second_Selected_Value = ["اربيل", "سليمانية", "دهوك"];

  //نقل داخل المحافظة
  if (this.inputFormField.ordekind == "نقل داخل المحافظة") {
    //القضاء الحالي
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }

    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["Judiciary"] == null ||
      this.inputFormField["Judiciary"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  //-------------------------------------------------------------------------------------------
  //نقل من الانبار لمحافظة اخرى
  if (this.inputFormField.ordekind == "نقل من محافظة الانبار الى محافظة اخرى") {
    //القضاء الحالي
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }

    //المحافظة التي ينقل اليها الاثاث
    if (
      this.inputFormField["Governoratet"] == null ||
      this.inputFormField["Governoratet"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`,
      );
    }
  }

  if (First_Selected_Value.includes(this.inputFormField.Governoratet)) {
    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["Judiciary"] == null ||
      this.inputFormField["Judiciary"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  if (Second_Selected_Value.includes(this.inputFormField.Governoratet)) {
    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["SecondDisct"] == null ||
      this.inputFormField["SecondDisct"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`,
      );
    }
  }

  //-------------------------------------------------------------------------------------------
  //نقل من محافظة اخرى للانبار
  if (this.inputFormField.ordekind == "نقل من محافظة اخرى الى محافظة الانبار") {
    //المحافظة الحالية
    if (
      this.inputFormField["governorate"] == null ||
      this.inputFormField["governorate"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`,
      );
    }

    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["Judiciary"] == null ||
      this.inputFormField["Judiciary"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  if (First_Selected_Value.includes(this.inputFormField.governorate)) {
    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }
  }

  if (Second_Selected_Value.includes(this.inputFormField.governorate)) {
    //القضاء الذي  ينقل الاثاث اليه
    if (
      this.inputFormField["FirstDisct"] == null ||
      this.inputFormField["FirstDisct"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[16].label} مطلوب`,
      );
    }
  }
}
