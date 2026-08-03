{
  var kafeelThree = [
    "FirstSponsorName", //اسم الكفيل الاول
    "sponsermothername", //اسم الام للكفيل الاول
    "FirstDOB", //مواليد الكفيل الاول
    "FirstSponsorOfficeId", //دائرة الكفيل الاول
    "FirstDateSponsorLetter", //تاريخ استمارة تعهد الكفيل الاول
    "FirstNoSponsorLetter", //رقم استمارة تعهد الكفيل الاول
    "FirstHalfMonthlyWage", //الراتب الكلي للكفيل الاول
    "kafelBasicSalary1", //الراتب الاسمي للكفيل الاول
    "SecondSponsorName", //اسم الكفيل الثاني
    "SecondMotherName", //اسم الام للكفيل الثاني
    "SecondDOB", //مواليد الكفيل الثاني
    "SecondSponsorOfficeId", //دائرة الكفيل الثاني
    "SecondDateSponsorLetter", //تاريخ استمارة تعهد الكفيل الثاني
    "SecondNoSponsorLetter", //رقم استمارة تعهد الكفيل الثاني
    "SecondHalfMonthlyWage", //الراتب الكلي لللكفيل الثاني
    "kafelBasicSalary2", //الراتب الاسمي للكفيل الثاني
    "ThirdSponsorName", //اسم الكفيل الثالث
    "ThirdMotherName", //اسم الام للكفيل الثالث
    "ThirdDOB", //مواليد الكفيل الثالث
    "ThirdSponsorOfficeId", //دائرة الكفيل الثالث
    "ThirdDateSponsorLetter", //تاريخ استمارة تعهد الكفيل الثالث
    "ThirdNoSponsorLetter", //رقم استمارة تعهد الكفيل الثالث
    "ThirdHalfMonthlyWage", //الراتب الكلي للكفيل الثالث
    "kafelBasicSalary3", //الراتب الاسمي للكفيل الثالث
  ];
  var kafeelThtreeIndex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  if (this.inputFormField.kafeel === "كفيل عدد اثنين") {
    for (var i = 0; i < 16; i++) {
      if (
        this.inputFormField[kafeelThree[i]] == null ||
        this.inputFormField[kafeelThree[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[kafeelThtreeIndex[i]].label} مطلوب`,
        );
      }
    }
  } else if (this.inputFormField.kafeel === "كفيل عدد ثلاثة") {
    for (var i = 0; i < kafeelThree.length; i++) {
      if (
        this.inputFormField[kafeelThree[i]] == null ||
        this.inputFormField[kafeelThree[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[kafeelThtreeIndex[i]].label
          } مطلوب`,
        );
      }
    }
  }
}
