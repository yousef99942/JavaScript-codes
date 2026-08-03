{
  if (this.inputFormField.EProject == "نعم") {
    if (
      this.inputFormField["ProjectAdds"] == null ||
      this.inputFormField["ProjectAdds"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.PojectCreateTime == "اكثر من 6 شهور") {
    if (
      this.inputFormField["TimeDuration"] == null ||
      this.inputFormField["TimeDuration"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }
  }

  if (this.inputFormField.ImproveOpinions == "نعم") {
    if (
      this.inputFormField["WriteOpinions"] == null ||
      this.inputFormField["WriteOpinions"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[11].label} مطلوب`);
    }
  }
}
