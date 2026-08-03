{
  var SelectorValues = this.form_data.acticictyynames;

  var FirstRightValues = [
      "فروج لحم",
      "دجاج بياض",
      "مفاقس",
      "امهات بيض تفقيس",
      "مجازر الدواجن",
      "اجداد امهات اللاحم",
      "معامل علف",
      "تربية اسماك بالنظام المغلق",
      "تربية اسماك بالبحيرات الطينية",
      "تربية اسماك بالاقفاص العائمة",
    ],
    SecondRightValues = [
      "تربية الابقار والجاموس",
      "الاغنام والماعز",
      "الابل والخيول",
    ];

    var FirstSum = 0, SecondSum = 0;

  for (var i = 0; i < SelectorValues.length; i++) {
    if (FirstRightValues.includes(SelectorValues[i])) {
      FirstSum += 1;
    }

    if (SecondRightValues.includes(SelectorValues[i])) {
      SecondSum += 1;
    }
  }

  if (FirstSum > 0 && SecondSum == 0) {
    document.getElementById("23293_group").style.display = "none";
  } else if (SecondSum > 0 && FirstSum == 0) {
    document.getElementById("33805_group").style.display = "none";
  }
}
