{
  if (this.inputFormField.DisablesInfo == "نعم") {
    if (
      this.inputFormField["TheirNum"] == null ||
      this.inputFormField["TheirNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[12].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.PrimaryServices == "كلا") {
    if (
      this.inputFormField["MissingServices"] == null ||
      this.inputFormField["MissingServices"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.RationCard == "كلا") {
    if (
      this.inputFormField["ReasonOfNotGet"] == null ||
      this.inputFormField["ReasonOfNotGet"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[6].label} مطلوب`);
    }
  }

  if (this.inputFormField.OilDerivatives == "كلا") {
    if (
      this.inputFormField["SecondReasonOfNotGet"] == null ||
      this.inputFormField["SecondReasonOfNotGet"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[8].label} مطلوب`);
    }
  }

  if (this.inputFormField.HealthProblems == "نعم") {
    if (
      this.inputFormField["HealthProblemExplain"] == null ||
      this.inputFormField["HealthProblemExplain"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.LivingDifficlts == "اخرى") {
    if (
      this.inputFormField["OtherDiffcults"] == null ||
      this.inputFormField["OtherDiffcults"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[5].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.LifeNeeds == "اخرى") {
    if (
      this.inputFormField["OtherNeeds"] == null ||
      this.inputFormField["OtherNeeds"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[5].fields[3].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.PrimaryIncome == "عمل حر" ||
    this.inputFormField.PrimaryIncome == "راتب رعاية اجتماعية" ||
    this.inputFormField.PrimaryIncome == "مساعدات" ||
    this.inputFormField.PrimaryIncome == "دعم الأقارب"
  ) {
    if (
      this.inputFormField["IncomeLevel"] == null ||
      this.inputFormField["IncomeLevel"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[1].label} مطلوب`);
    }
  }
}
