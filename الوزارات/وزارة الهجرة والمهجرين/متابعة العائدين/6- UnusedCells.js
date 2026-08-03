if (this.tab_click == "form") {
  let Values = [
    {
      Field_Prog: "namez",
      Field_ID: "92480",
    }, //ماهو البرنامج
    {
      Field_Prog: "namen",
      Field_ID: "92481",
    }, //كم مرة شاركت في البرامج
    {
      Field_Prog: "namem",
      Field_ID: "93061",
    }, //نوع العمل
    {
      Field_Prog: "namerwqxc",
      Field_ID: "92493",
    }, //نوع الدعم الأخر
    {
      Field_Prog: "namw",
      Field_ID: "92484",
    }, //هل لديك أولاد
    {
      Field_Prog: "namewaos",
      Field_ID: "92489",
    }, //نوع التسجيل في الوزارة
    {
      Field_Prog: "nameh",
      Field_ID: "92490",
    }, //اسم المنظمة التي أستلمت المنحة منها
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
