{
  //checkbox ترتيب حقول
  //بيئة العمل ( يمكن التأشير على اكثر من اختيار )
  this.group_of_form[0].fields[11].properties[0].values = [
    "ميداني",
    "مكتبي",
    "كلاهما (ميداني / مكتبي)",
    "أمني",
    "عسكري",
  ];

  //اخفاء الكروبات
  var Groups_ID = [
    "12698_group",
    "12699_group",
    "12700_group",
    "12703_group",
    "12706_group",
    "12704_group",
    "12708_group",
  ];

  Groups_ID.forEach(
    (Hiding) => (document.getElementById(Hiding).style.display = "none"),
  );

  //Labels modification
  var Labels_ID = [
    //البيانات التعريفية
    "35677",
    "73710",
    //اولا/ القيادة والادارة
    "35679",
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #041f5cff; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px";
  }
}
