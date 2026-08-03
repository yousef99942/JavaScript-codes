{
  if (this.inputFormField.selectone == "اخرى") {
    if (
      this.inputFormField["teninfo"] == null ||
      this.inputFormField["teninfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[12].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.OtherVisitors == "نعم") {
    if (
      this.inputFormField["VisitorNumber"] == null ||
      this.inputFormField["VisitorNumber"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[14].label} مطلوب`
      );
    }
  }

  if (
    this.inputFormField.VisitorNumber != null ||
    this.inputFormField.VisitorNumber != ""
  ) {
    var Fields_Progs = [
        //الشخص الاول
        "FirstVisitorName", //الاسم الثلاثي للزائر الاضافي الاول
        "FirstVisitorID", //رقم البطاقة الموحدة للزائر الاضافي الاول
        //الشخص الثاني
        "SecondVisitorName", //الاسم الثلاثي للزائر الاضافي الثاني
        "SecondVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الثاني
        //الشخص الثالث
        "ThirdVisitorName", //الاسم الثلاثي للزائر الاضافي الثالث
        "ThirdVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الثالث
        //الشخص الرابع
        "FourthVisitorName", //الاسم الثلاثي للزائر الاضافي الرابع
        "FourthVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الرابع
        //الشخص الخامس
        "fifthname", //الاسم الثلاثي للزائر الاضافي الخامس
        "numberfiveid", //رقم البطاقة الوطنية للزائر الاضافي الخامس
      ],
      Fields_Locations = [16, 17, 19, 20, 22, 23, 25, 26, 28, 29];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (i < this.inputFormField.VisitorNumber * 2) {
        if (
          this.inputFormField[Fields_Progs[i]] == null ||
          this.inputFormField[Fields_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[2].fields[Fields_Locations[i]].label
            } مطلوب`
          );
        }
      }
    }
  }

  //تحديد التقديم
  var today = new Date();
  var hour_Value = today.getHours();
  var minute_Value = today.getMinutes();

  if (hour_Value >= 13 && minute_Value >= 45) {
    this.evalErr.push(
      "عزيزي المواطن التقديم يكون من الساعه 8 صباحا الى الساعه 8 مساءا"
    );
  }
}
