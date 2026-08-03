{
  //رقم هاتف الشركة
  if (this.inputFormField.mob) {
    const phoneNo = this.inputFormField.mob;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف الشركة بالرقم 07.");
    }
  }

  //رقم الهاتف لمدير المرفق
  if (this.inputFormField.mobi) {
    const phoneNo = this.inputFormField.mobi;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف لمدير المرفق بالرقم 07.");
    }
  }

  //-----------------------------------------------------------------------------
  //هل يتم استخدام اوساط زرعية في المختبر؟
  if (this.inputFormField.ewd == "نعم") {
    if (
      this.inputFormField["iok"] == null ||
      this.inputFormField["iok"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[40].label} مطلوب`,
      );
    }

    if (
      this.inputFormField["qax"] == null ||
      this.inputFormField["qax"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[41].label} مطلوب`,
      );
    }
  }

  //مسببات ممرضة تصيب الانسان او مسببات مرضية مشتركة (zoonotic)
  var Selected_Values = ["بكتـــريا", "فايروســـات", "فطريــات"];

  var Values_Array = this.inputFormField.mosb;
  if (Values_Array.length != 0) {
    for (var i = 0; i < Values_Array.length; i++) {
      if (Selected_Values.includes(Values_Array[i])) {
        if (
          this.inputFormField["boyy"] != null ||
          this.inputFormField["boyy"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[35].label} مطلوب`,
          );
        }
      }
    }
  }

  //مسببات مرضية تصيب الحيوان (فيما عدا المسببات المرضية المشتركة)
  var Selected_Values = ["بكتريا", "فايروسات", "فطريات"];
  var Values_Array = this.inputFormField.mer;
  if (Values_Array.length != 0) {
    for (var i = 0; i < Values_Array.length; i++) {
      if (Selected_Values.includes(Values_Array[i])) {
        if (
          this.inputFormField["xsw"] != null ||
          this.inputFormField["xsw"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[37].label} مطلوب`,
          );
        }
      }
    }
  }

  //مسببات مرضية تصيب النبات
  var Selected_Values = ["بكتريا", "فايروسات", "فطريات"];
  var Values_Array = this.inputFormField.tes;
  if (Values_Array.length != 0) {
    for (var i = 0; i < Values_Array.length; i++) {
      if (Selected_Values.includes(Values_Array[i])) {
        if (
          this.inputFormField["byu"] != null ||
          this.inputFormField["byu"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[39].label} مطلوب`,
          );
        }
      }
    }
  }

  //السموم : اسم السم المستخدم ومصدره
  var Selected_Values = ["بكتريا", "فايروسات", "فطريات"];
  var Values_Array = this.inputFormField.selectone;
  if (Values_Array.length != 0) {
    for (var i = 0; i < Values_Array.length; i++) {
      if (Selected_Values.includes(Values_Array[i])) {
        if (
          this.inputFormField["erty"] != null ||
          this.inputFormField["erty"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[31].label} مطلوب`,
          );
        }
      }
    }
  }
}
