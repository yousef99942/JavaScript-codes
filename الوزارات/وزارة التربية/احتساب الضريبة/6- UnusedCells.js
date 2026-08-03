{
  if (this.tab_click == "form") {
    let Fields_Prog = [
        //الحالة الاجتماعية
        "birthdayabsoiute", //تاريخ الطلاق
        "birthdaydeath", //تاريخ وفاة الزوج ( الزوجة)
        "birthdaymarried", //تاريخ الزواج
        "namespouwife", //اسم الزوج ( الزوجة)
        "cardspouwife", //رقم البطاقة الموحدة  للزوج ( الزوجة)
        "salary", //هل الزوجة ربة بيت وليس لها دخل ؟
        "associate", //هل الزوجة ( الزوج ) منتسبا :
        "combinesalary", //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ؟
      ],
      Fields_ID = [
        "87254", //تاريخ الطلاق
        "87256", //تاريخ وفاة الزوج ( الزوجة)
        "87252", //تاريخ الزواج
        "87253", //اسم الزوج ( الزوجة)
        "87255", //رقم البطاقة الموحدة  للزوج ( الزوجة)
        "87258", //هل الزوجة ربة بيت وليس لها دخل ؟
        "87260", //هل الزوجة ( الزوج ) منتسبا :
        "87322", //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ؟
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }

    if (this.form_data.maritstatus != "متزوج") {
      document.getElementById("35057_group").style.display = "none";
    }

    if (this.form_data.Typeeee == null) {
      document.getElementById("93243").style.visibility = "collapse";
    }
  }
}
