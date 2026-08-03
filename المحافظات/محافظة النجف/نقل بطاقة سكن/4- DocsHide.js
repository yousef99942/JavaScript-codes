{
  //مرفقات نقل بطاقة سكن
  let Showed_Docs = [
    "35042", //صورة شخصية لصاحب الطلب
    "35040", //تاييد المختار يؤيد السكن لاكثر من سنة
    "35041", //البطاقة الوطنية للزوجة والاطفال
    "47447", //ارفاق احد الضوابط قرار 40 المعدل ب 100 (تأييد حوزة , تأييد كفاءات علمية , سند بيت ... الخ)
    "47696", //تأييد مضبطة سكن للعنوان السابق في المحافظة السابقة
  ];

  if (
    this.form_data.selecter ==
    "نقل بطاقة السكن من المحافظات الى محافظة النجف الاشرف"
  ) {
    Showed_Docs.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );
  }

  //تأييد سكن معنون لقسم شؤون المواطنين ومصدق من الوحدة الإدارية ومسؤول الاستخبارات.
  if (this.form_data.governor != "النجف الاشرف") {
    document.getElementsByClassName("47782")[0].style.display = "block";
  }

  //كتاب عدم ممانعة من المحافظة المعنية .
  if (this.form_data.governor == "النجف الاشرف") {
    document.getElementsByClassName("47809")[0].style.display = "block";
  }
}
