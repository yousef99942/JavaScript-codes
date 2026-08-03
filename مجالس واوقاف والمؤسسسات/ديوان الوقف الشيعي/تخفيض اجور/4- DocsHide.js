{
  const Groups_ID = [
    "35499_group", //ملفات قناة ذوي الرعاية الاجتماعية
    "35502_group", //ملفات قناة الاقارب
    "35504_group", //ملفات قناة ذوي الاعاقة
    "35505_group", //ملفات قناة المكفوفين
    "35506_group", //ملفات قناة ممن ذويهم لديهم عجز
    "35507_group", //ملفات قناة حافظي القران 5 اجزاء
    "35508_group", //ملفات قناة مؤسسة العين
    "35509_group", //ملفات قناة ابناء الاساتذة
    "35510_group", //ملفات قناة منتسبي الحشد الشعبي ورجال الدين
  ];

  //اخفاء جميع المجاميع
  Groups_ID.forEach(
    (Hiding) => (document.getElementById(Hiding).style.display = "none"),
  );

  const Values = [
    {
      Selected_Value: "الرعاية الاجتماعية",
      Show_Group: "35499_group", //ملفات قناة ذوي الرعاية الاجتماعية
    },
    {
      Selected_Value: "الاقارب",
      Show_Group: "35502_group", //ملفات قناة الاقارب
    },
    {
      Selected_Value: "ذوي الاعاقة (العجز) بنسبة 70%",
      Show_Group: "35504_group", //ملفات قناة ذوي الاعاقة
    },
    {
      Selected_Value: "المكفوفين",
      Show_Group: "35505_group", //ملفات قناة المكفوفين
    },
    {
      Selected_Value: "ممن ذويهم لديهم عجز بنسبة 70%",
      Show_Group: "35506_group", //ملفات قناة ممن ذويهم لديهم عجز
    },
    {
      Selected_Value: "حافظي القرآن 5 اجزاء",
      Show_Group: "35507_group", //ملفات قناة حافظي القران 5 اجزاء
    },
    {
      Selected_Value: "مؤسسة العين",
      Show_Group: "35508_group", //ملفات قناة مؤسسة العين
    },
    {
      Selected_Value: "ابناء الاساتذة والموظفين وابناؤهم",
      Show_Group: "35509_group", //ملفات قناة ابناء الاساتذة
    },
    {
      Selected_Value: "منتسبي الحشد الشعبي ورجال الدين في الحوزة العلمية",
      Show_Group: "35510_group", //ملفات قناة منتسبي الحشد الشعبي ورجال الدين
    },
  ];

  const Result = Values.find(
    (Finding) => this.form_data.requesttype === Finding.Selected_Value,
  );

  if (Result) {
    document.getElementById(Result.Show_Group).style.display = "block";
  }
}
