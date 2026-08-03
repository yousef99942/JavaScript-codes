{
  if (this.inputFormField.Requesttypeone == "طلب استعلام") {
    if (
      this.inputFormField["arwatwoo"] == "" ||
      this.inputFormField["arwatwoo"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.Requesttypeone == "طلب شكوى") {
    let Values = [
      { Field_Prog: "name", Field_Location: 1 },
      { Field_Prog: "nametwo", Field_Location: 2 },
      { Field_Prog: "nameth", Field_Location: 3 },
      { Field_Prog: "governorate", Field_Location: 7 },
      { Field_Prog: "compsubj", Field_Location: 9 },
      { Field_Prog: "compcomp", Field_Location: 10 },
      { Field_Prog: "compimpact", Field_Location: 11 },
      { Field_Prog: "compapply", Field_Location: 12 },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Checking.Field_Location].label} مطلوب`,
        );
      }
    });
  }

  if (this.inputFormField.compapply == "نعم") {
    if (
      this.inputFormField["compproce"] == "" ||
      this.inputFormField["compproce"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[13].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.governorate) {
    if (
      this.inputFormField["district"] == "" ||
      this.inputFormField["district"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }
  }
}
