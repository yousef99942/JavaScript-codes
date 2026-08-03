{
  //التاكد من التواريخ
  //تاريخ بدء انعقاد البرنامج
  var Start_Date = new Date(this.inputFormField.period);

  //تاريخ انتهاء انعقاد البرنامج
  var End_Date = new Date(this.inputFormField.pojg);

  if (End_Date < Start_Date) {
    this.evalErr.push(
      "لا يمكن ان يكون تاريخ انتهاء انعقاد البرنامج اقل من تاريخ بدء انعقاد البرنامج",
    );
  }

  //----------------------------------------------------------------------------------------------------
  //vaildation on the second group and the third group
  if (this.inputFormField.Registration == "تسجيل جديد") {
    var Progs = [
        "Sectors", //اختر نوع القطاع
        "study", //التحصيل الدراسي
        "email", //البريد الالكتروني
        "certificate", //في حال اجتيازك للدورة بنجاح هل ترغب في الحصول على شهادة جدارية ؟
        "pay", //المبلغ المدفوع غير قابل للاسترجاع ، الا في حال تعذر انعقاد الدورة
      ],
      Locations = [0, 9, 10, 16, 18];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //----------------------------------------------------------------------------------------------------
  if (
    this.inputFormField.Registration ==
    "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
  ) {
    var Progs = [
        "SectorType", //نوع القطاع
        "Trainingprogram", //اسم البرنامج التدریبي ( الدورة او الورشة ) / داخل او خارج الخطة
        "workshop", //بدء البرنامج التدریبي ( الدورة او الورشة )
        "workshopdate", //انتھاء البرنامج التدریبي ( الدورة او الورشة)
      ],
      Locations = [3, 6, 7, 8];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //----------------------------------------------------------------------------------------------------
  //مجموعة تسجيل جديد
  if (this.inputFormField.Sectors == "القطاع العام") {
    var Progs = [
        "ministryNamee", //الوزارة
        "OrgName", //اسم الدائرة
        "jobName", //العنوان الوظيفي
        "yearsNumber", //سنوات الخدمة
        "Jobgrade", //الدرجة الوظيفية
      ],
      Locations = [11, 12, 13, 14, 15];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //----------------------------------------------------------------------------------------------------
  //سلكتر مدة الدورة
  if (
    this.inputFormField.Axis &&
    this.inputFormField.Registration !=
      "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
  ) {
    if (
      this.inputFormField["courseduration"] == null ||
      this.inputFormField["courseduration"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  //----------------------------------------------------------------------------------------------------
  //سلكتر الدورات
  if (this.inputFormField.courseduration) {
    if (
      this.inputFormField["trainingcourses"] == null ||
      this.inputFormField["trainingcourses"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }
  }
}

//----------------------------------------------------------------------------------------------------
//نوع القطاع بمجموعة الحصول على الشهادة
if (this.inputFormField.SectorType == "القطاع العام") {
  if (
    //اسم الوزارة
    this.inputFormField["Ministryname"] == null ||
    this.inputFormField["Ministryname"] == ""
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[2].fields[4].label} مطلوب`);
  }

  if (
    //الدائرة
    this.inputFormField["Department"] == null ||
    this.inputFormField["Department"] == ""
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
  }

  //----------------------------------------------------------------------------------------------------
  //التاكد من التواريخ
  console.log("Second Hello");
  //تاريخ بدء انعقاد البرنامج
  var Start_Date = new Date(this.inputFormField.period);

  //تاريخ انتهاء انعقاد البرنامج
  var End_Date = new Date(this.inputFormField.pojg);

  if (End_Date < Start_Date) {
    console.log("First Hello");
    this.evalErr.push(
      "لا يمكن ان يكون تاريخ انتهاء انعقاد البرنامج اقل من تاريخ بدء انعقاد البرنامج",
    );
  }
}
