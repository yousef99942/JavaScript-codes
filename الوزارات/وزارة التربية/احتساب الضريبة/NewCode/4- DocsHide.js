{
  const Fields_IDs = [
    "47899", // البطاقة الموحدة (الوطنية) الوجه الامامي
    "47900", // البطاقة الموحدة ( الوطنية ) الوجه الخلفي
    "47244", // كتاب تأييد من دائرة الزوج الموظف ( الزوجة الموظفة )
    "47246", // كتاب تأييد للزوجة التي زوجها كاسب
    "47247", // كتاب تاييد للموظفة الارملة
    "47248", // كتاب تاييد للموظفة التي زوجها متقاعد
    "47249", // كتاب صورة قيد للزوجة المطلقة
    "47250", // كتاب ابلاغ بالنسبة من لدية اولاد تم تعينهم
    "47465", // كتاب تاييد قرار حضانة بالنسبة للمطلقة
    "47466", // كتاب تاييد بالنسبة للزوجة الارملة ولديها تقاعد للاولادها
    "47905", // البطاقة الموحدة ( الوطنية ) للاولاد
    "47923", // كتاب تاييد من الجامعة او المدرسة فيما يخص اللاولاد فوق سن 18 سنة
  ];

  if (this.form_data.maritstatus === "متزوج") {
    const First_Values = [
      "47903", // البطاقة الموحدة ( الوطنية ) للزوج / الزوجة الوجه الامامي
      "47904", // البطاقة الموحدة ( الوطنية ) للزوج / الزوجة الوجه الخلفي
      "47250", // كتاب ابلاغ بالنسبة من لدية اولاد تم تعينهم
      "47905", // البطاقة الموحدة ( الوطنية ) للاولاد
    ];

    First_Values.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    if (this.form_data.associate === "نعم") {
      document.getElementsByClassName("47244")[0].style.display = "block"; // كتاب تأييد من دائرة الزوج الموظف ( الزوجة الموظفة )
    }

    if (this.form_data.HusbandEarner === "نعم") {
      document.getElementsByClassName("47246")[0].style.display = "block"; // كتاب تأييد للزوجة التي زوجها كاسب
    }

    if (this.form_data.ReturmintType === "نعم") {
      document.getElementsByClassName("47248")[0].style.display = "block"; // كتاب تاييد للموظفة التي زوجها متقاعد
    }
  }

  if (this.form_data.maritstatus === "أرمل") {
    const Second_Values = [
      "47905", // البطاقة الموحدة ( الوطنية ) للاولاد
      "47466", // كتاب تاييد بالنسبة للزوجة الارملة ولديها تقاعد للاولادها
    ];

    Second_Values.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    document.getElementsByClassName("47254")[0].style.display = "none"; //كتاب تأييد من الجامعة او المدرسة فيما يخص الاولاد فوق سن 18 سنة
  }

  if (this.form_data.maritstatus === "مطلق") {
    const Third_Values = [
      "47905", // البطاقة الموحدة ( الوطنية ) للاولاد
      "47249", // كتاب صورة قيد للزوجة المطلقة
      "47465", // كتاب تاييد قرار حضانة بالنسبة للمطلقة
    ];

    Third_Values.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    document.getElementsByClassName("47254")[0].style.display = "none"; //كتاب تأييد من الجامعة او المدرسة فيما يخص الاولاد فوق سن 18 سنة
  }

  if (this.form_data.maritstatus === "أعزب") {
    document.getElementById("35050_group").style.display = "none";
  }
}
