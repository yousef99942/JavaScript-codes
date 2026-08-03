{
  //هل أشتركت في برامج المنظمات؟
  if (this.inputFormField.namesel == "نعم") {
    //ماهو البرنامج
    if (
      this.inputFormField["namez"] == null ||
      this.inputFormField["namez"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }

    //كم مرة شاركت في البرامج
    if (
      this.inputFormField["namez"] == null ||
      this.inputFormField["namez"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }

  //هل لديك عمل
  if (this.inputFormField.namec == "نعم") {
    //نوع العمل
    if (
      this.inputFormField["namem"] == null ||
      this.inputFormField["namem"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }

  //ماهو نوع الدعم الذي ترغب به؟
  if (this.inputFormField.namepo == "أخرى") {
    //نوع الدعم الأخر
    if (
      this.inputFormField["namerwqxc"] == null ||
      this.inputFormField["namerwqxc"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  //هل انت متزوج؟
  if (this.inputFormField.namepqz == "نعم") {
    //هل لديك أولاد
    if (
      this.inputFormField["namw"] == null ||
      this.inputFormField["namw"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`,
      );
    }
  }

  //هل تم التسجيل في وزارة الهجرة والمهجرين
  if (this.inputFormField.namme == "نعم") {
    //نوع التسجيل في الوزارة
    if (
      this.inputFormField["namewaos"] == null ||
      this.inputFormField["namewaos"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[16].label} مطلوب`,
      );
    }
  }

  //هل أستلمت منحة مالية
  if (this.inputFormField.nameysq == "نعم") {
    //اسم المنظمة التي أستلمت المنحة منها
    if (
      this.inputFormField["nameh"] == null ||
      this.inputFormField["nameh"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }
}
