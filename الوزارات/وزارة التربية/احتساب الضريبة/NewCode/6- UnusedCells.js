{
  if (this.tab_click == "form") {
    let Values = [
      //المعلومات الشخصية
      //هل المنتسب مستمر بالعمل داخل المديرية ؟
      { Field_Prog: "Typeeee", Field_ID: "93243" }, //يرجى تحديد سبب عدم الاستمرار داخل المديرية
      { Field_Prog: "birthdaymarried", Field_ID: "87252" }, // تاريخ الزواج
      { Field_Prog: "namespouwife", Field_ID: "87253" }, // اسم الزوج ( الزوجة)
      { Field_Prog: "cardspouwife", Field_ID: "87255" }, // رقم البطاقة الوطنية للزوج ( الزوجة)
      { Field_Prog: "birthdayabsoiute", Field_ID: "87254" }, // تاريخ الطلاق
      { Field_Prog: "birthdaydeath", Field_ID: "87256" }, // تاريخ وفاة الزوج ( الزوجة)
      { Field_Prog: "salary", Field_ID: "87258" }, //هل الزوجة ربة بيت وليس لها دخل ؟
      { Field_Prog: "associate", Field_ID: "87260" }, //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
      { Field_Prog: "combinesalary", Field_ID: "87322" }, //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
      { Field_Prog: "HusbandEarner", Field_ID: "94045" }, //هل ( الزوج / الزوجة) كاسب ؟
      { Field_Prog: "ReturmintType", Field_ID: "94128" }, //هل (الزوج / الزوجة) متقاعد؟
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
