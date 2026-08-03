{
  if (this.inputFormField.ddlservice == "طلب مهمة استشارية") {
    if (
      this.inputFormField["ddlservices"] == null ||
      this.inputFormField["ddlservices"] == ""
    ) {
      this.evalErr.push("نوع المهمة الأستشارية مطلوب");
    }
    if (
      this.inputFormField.ddlservices == "استشارات التدريب" ||
      this.inputFormField.ddlservices == "استشارات تقنية المعلومات" ||
      this.inputFormField.ddlservices == "استشارات البحث والتطوير"
    ) {
      if (
        this.inputFormField["txtcons"] == null ||
        this.inputFormField["txtcons"] == ""
      ) {
        this.evalErr.push("بيان نوع الاستشارة مطلوب");
      }
    }
  } else if (
    this.inputFormField.ddlservice == "بيان رأي / أستفسار / عنوان وظيفي"
  ) {
    if (
      this.inputFormField["ganeral"] == null ||
      this.inputFormField["ganeral"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[0].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.ganeral == "اعدادية" ||
    this.inputFormField.ganeral == "دبلوم" ||
    this.inputFormField.ganeral == "بكالوريوس"
  ) {
    if (
      this.inputFormField["public"] == null ||
      this.inputFormField["public"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.public == "اخرى") {
    if (
      this.inputFormField["txtother"] == null ||
      this.inputFormField["txtother"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["Subspecialty"] == null ||
      this.inputFormField["Subspecialty"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[4].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.ddlservice == "بيان رأي / أستفسار / عنوان وظيفي" &&
    this.inputFormField.public != "اخرى" &&
    this.inputFormField.public != "علوم سياسية" &&
    this.inputFormField.public != "علمي / ادبي"
  ) {
    if (
      this.inputFormField["privet"] == null ||
      this.inputFormField["privet"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[2].label} مطلوب`);
    }
  }
}
