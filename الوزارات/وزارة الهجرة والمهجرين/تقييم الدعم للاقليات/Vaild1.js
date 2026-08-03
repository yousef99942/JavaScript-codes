{
  if (
    this.inputFormField.SocialState == "متزوج / متزوجة" ||
    this.inputFormField.SocialState == "ارمل / ارملة" ||
    this.inputFormField.SocialState == "مطلق / مطلقة"
  ) {
    if (
      this.inputFormField["BoysNum"] == null ||
      this.inputFormField["BoysNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["3"].label} مطلوب`
      );
    }

    if (
      this.inputFormField["GirlNum"] == null ||
      this.inputFormField["GirlNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["4"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformation == "نعم") {
    if (
      this.inputFormField["persontypeinfo"] == null ||
      this.inputFormField["persontypeinfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["8"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.persontypeinfo == "هل انت من النازحين؟") {
    if (
      this.inputFormField["hejrareson"] == null ||
      this.inputFormField["hejrareson"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["9"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformationfive == "نعم") {
    if (
      this.inputFormField["areyouinformationsix"] == null ||
      this.inputFormField["areyouinformationsix"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["14"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformationsix == "اخرى") {
    if (
      this.inputFormField["customertypinginfo"] == null ||
      this.inputFormField["customertypinginfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["15"].label} مطلوب`
      );
    }
  }
}
