{
  if (
    this.inputFormField.Categories == "ضباط الداخلية" ||
    this.inputFormField.Categories == "منتسبي الداخلية"
  ) {
    if (
      this.inputFormField["job"] == null ||
      this.inputFormField["job"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["work"] == null ||
      this.inputFormField["work"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Categories == "شهداء الداخلية") {
    if (
      this.inputFormField["job"] == null ||
      this.inputFormField["job"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["work"] == null ||
      this.inputFormField["work"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`
      );
    }

    if (
      this.inputFormField["ShiedFirstName"] == null ||
      this.inputFormField["ShiedFirstName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }

    if (
      this.inputFormField["ShiedSecondName"] == null ||
      this.inputFormField["ShiedSecondName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`
      );
    }

    if (
      this.inputFormField["ShiedThirdName"] == null ||
      this.inputFormField["ShiedThirdName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`
      );
    }

    if (
      this.inputFormField["ShiedFourthName"] == null ||
      this.inputFormField["ShiedFourthName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`
      );
    }

    if (
      this.inputFormField["relation"] == null ||
      this.inputFormField["relation"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Categories == "ذوي متوفين الداخلية") {
    if (
      this.inputFormField["job"] == null ||
      this.inputFormField["job"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["work"] == null ||
      this.inputFormField["work"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`
      );
    }

    if (
      this.inputFormField["DeadFirstName"] == null ||
      this.inputFormField["DeadFirstName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`
      );
    }

    if (
      this.inputFormField["DeadSecondName"] == null ||
      this.inputFormField["DeadSecondName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[22].label} مطلوب`
      );
    }

    if (
      this.inputFormField["DeadThirdName"] == null ||
      this.inputFormField["DeadThirdName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[23].label} مطلوب`
      );
    }

    if (
      this.inputFormField["DeadFourthName"] == null ||
      this.inputFormField["DeadFourthName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[24].label} مطلوب`
      );
    }

    if (
      this.inputFormField["relation"] == null ||
      this.inputFormField["relation"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.mireed == "متزوج/ة") {
    if (
      this.inputFormField["namewif"] == null ||
      this.inputFormField["namewif"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[16].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Categories == "VIP") {
    if (
      this.inputFormField["PrivateCode"] == null ||
      this.inputFormField["PrivateCode"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.PrivateCode == "A0728") {
    if (
      this.inputFormField["VIPsource"] == null ||
      this.inputFormField["VIPsource"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
