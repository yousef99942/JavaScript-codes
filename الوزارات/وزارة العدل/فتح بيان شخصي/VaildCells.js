{
  if (this.inputFormField.kamel == "كلا ، بمقدار اسهم") {
    if (
      this.inputFormField["housech"] == null ||
      this.inputFormField["housech"] == ""
    ) {
      this.evalErr.push(
        `الحقل مقدار السهام
                                } مطلوب`
      );
    }
  }

  if (this.inputFormField.kamel == "كلا ، بمقدار حصة") {
    if (
      this.inputFormField["hasa"] == null ||
      this.inputFormField["hasa"] == ""
    ) {
      this.evalErr.push(
        `الحقل حصتك في العقار
                                  } مطلوب`
      );
    }
  }

  var r = ["haidersa", "data", "wrttin"];
  var FieldsCardObjIDxx = ["14", "15", "16", "17"];
  if (this.inputFormField.haiderdida == "وكيله") {
    for (var i = 0; i < r.length; i++) {
      if (
        this.inputFormField[r[i]] == null ||
        this.inputFormField[r[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[FieldsCardObjIDxx[i]].label
          } مطلوب`
        );
      }
    }
  }
}
