{
  if (this.tab_click == "form") {
    let First_Groups_ID = [
        "35320_group", //البيانات الاساسية للتشكيل
        "35321_group", //استعداد التشكيل للتحول الرقمي
        "35322_group", //مقترحاتك لتحسين التحول الرقمي
      ], //في حال اختيار موظف
      Second_Groups_ID = [
        "35312_group", //الاستعداد النفسي والمهني للتحول الرقمي
        "35313_group", //المهارات الرقمية الاساسية
        "35314_group", //كفاءة البنية التقنية المتاحة
        "35315_group", //الانظمة والبرامج الالكترونية
        "35316_group", //الدورات التدريبية
        "35317_group", //المقترحات
      ], //في حال اختيار موظف وكلا
      Third_Groups_ID = [
        "35309_group", //البيانات الشخصية
        "35311_group", //الاستعداد للتحول الرقمي
        "35312_group", //الاستعداد النفسي والمهني للتحول الرقمي
        "35313_group", //المهارات الرقمية الاساسية
        "35314_group", //كفاءة البنية التقنية المتاحة
        "35315_group", //الانظمة والبرامج الالكترونية
        "35316_group", //الدورات التدريبية
        "35317_group", //المقترحات
      ]; //في حال اختيار مدير

    if (this.form_data.nameselecter == "موظف") {
      First_Groups_ID.forEach(
        (Hiding) => (document.getElementById(Hiding).style.display = "none"),
      );
    }

    if (
      this.form_data.nameselecter == "موظف" &&
      this.form_data.namename == "كلا"
    ) {
      Second_Groups_ID.forEach(
        (Hiding) => (document.getElementById(Hiding).style.display = "none"),
      );
    }

    if (this.form_data.nameselecter == "مدير") {
      Third_Groups_ID.forEach(
        (Hiding) => (document.getElementById(Hiding).style.display = "none"),
      );
    }
  }
}
