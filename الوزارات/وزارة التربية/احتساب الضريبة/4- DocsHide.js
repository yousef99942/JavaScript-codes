{
  document.getElementsByClassName("47904")[0].style.display = "none"; // البطاقة الموحدة ( الوطنية ) للزوج / الزوجة الوجه الخلفي
  document.getElementsByClassName("47247")[0].style.display = "none"; //كتاب تاييد للموظفة الارملة

  //ذكر ومتزوج وزوجته ربة بيت
  //ذكر او انثى ومتقاعد
  let First_Case = [
      "47903", //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
    ],
    //ذكر او انثى ومتزوج والزوج او الزوجة منتسب (موظف)
    Second_Case = [
      "47903", //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
      //"47244", //كتاب تأييد من دائرة الزوج الموظف ( الزوجة الموظفة )
    ],
    //ذكر او انثى ومتزوج والزوج او الزوجة كاسب
    Third_Case = [
      "47903", //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
      "47246", //كتاب تأييد للزوجة التي زوجها كاسب ( تعهد خطي من القانونية )
    ],
    //ذكر او انثى ومطلق
    Fourth_Case = [
      "47249", //صورة قيد للزوجه او الزوج المطلق / المطلقة ( قرار طلاق مصدق )
    ],
    //ذكر او انثى وارمل
    Fifth_Case = [
      "47982", //شهادة الوفاة الزوج للارملة
    ];

  //ذكر ومتزوج وزوجته ربة بيت
  if (
    this.form_data.gender === "ذكر" && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.salary === "نعم" //هل زوجة المتقدم ربة بيت
  ) {
    First_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    ["47246", "47249", "47944", "47465", "47466", "47982"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else if (
    //ذكر او انثى ومتزوج والزوج او الزوجة منتسب (موظف)
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "منتسب (موظف / موظفة)" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    Second_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    ["47246", "47982", "47249", "47944", "47465", "47466"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else if (
    //ذكر او انثى ومتزوج والزوج او الزوجة كاسب
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "كاسب" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    Third_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    if (this.form_data.gender === "انثى") {
      document.getElementsByClassName("47944")[0].style.display = "block"; //كتاب تاييد من هيأة العامة للضرائب يؤيد فيه عدم وجود دخل للزوج
    } else {
      document.getElementsByClassName("47944")[0].style.display = "none"; //كتاب تاييد من هيأة العامة للضرائب يؤيد فيه عدم وجود دخل للزوج
    }

    ["47249", "47465", "47466", "47982"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else if (
    //ذكر او انثى ومطلق
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "مطلق" //الحالة الاجتماعية
  ) {
    Fourth_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    ["47903", "47246", "47944", "47465", "47466", "47982"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else if (
    //ذكر او انثى وارمل
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "أرمل" //الحالة الاجتماعية
  ) {
    Fifth_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    ["47903", "47246", "47249", "47944", "47465", "47466"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else if (
    //ذكر او انثى ومتقاعد
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "متقاعد" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    First_Case.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "block"),
    );

    if (this.form_data.gender === "انثى") {
      document.getElementsByClassName("47944")[0].style.display = "block"; //كتاب تاييد من هيأة العامة للضرائب يؤيد فيه عدم وجود دخل للزوج
    } else {
      document.getElementsByClassName("47944")[0].style.display = "none"; //كتاب تاييد من هيأة العامة للضرائب يؤيد فيه عدم وجود دخل للزوج
    }

    ["47246", "47249", "47465", "47466", "47982"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  } else {
    ["47903", "47246", "47249", "47982", "47944", "47465", "47466"].forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  }

  if (this.form_data.ChildStat === "نعم") {
    document.getElementsByClassName("47905")[0].style.display = "block"; //البطاقة الموحدة ( الوطنية ) للاولاد

    if (
      this.form_data.maritstatus === "أرمل" &&
      this.form_data.gender === "انثى"
    ) {
      document.getElementsByClassName("47466")[0].style.display = "block"; //كتاب تاييد بالنسبة للزوجة الارملة ولديها تقاعد للاولادها
    } else {
      document.getElementsByClassName("47466")[0].style.display = "none";
    }

    if (this.form_data.maritstatus === "مطلق") {
      document.getElementsByClassName("47465")[0].style.display = "block"; //كتاب تاييد قرار حضانة بالنسبة للمطلق / مطلقة
    } else {
      document.getElementsByClassName("47465")[0].style.display = "none";
    }
  } else {
    document.getElementsByClassName("47905")[0].style.display = "none";
  }

  if (this.form_data.GildAge === "نعم") {
    document.getElementsByClassName("47943")[0].style.display = "block"; //كتاب تأييد من الجامعة او المدرسة فيما يخص الاولاد فوق سن 18 سنة
  } else {
    document.getElementsByClassName("47943")[0].style.display = "none";
  }

  if (this.form_data.GettingSpousalAllowances === "كلا") {
    if (this.form_data.PartnerJobType === "متقاعد") {
      document.getElementsByClassName("48042")[0].style.display = "block"; //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
      document.getElementsByClassName("47244")[0].style.display = "none"; //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
    } else if (this.form_data.PartnerJobType === "منتسب (موظف / موظفة)") {
      document.getElementsByClassName("48042")[0].style.display = "none"; //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
      document.getElementsByClassName("47244")[0].style.display = "block"; //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
    } else {
      document.getElementsByClassName("48042")[0].style.display = "none"; //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
      document.getElementsByClassName("47244")[0].style.display = "none"; //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
    }
  } else if (
    this.form_data.maritstatus === "أرمل" &&
    this.form_data.gender === "انثى"
  ) {
    document.getElementsByClassName("48042")[0].style.display = "block"; //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
    document.getElementsByClassName("47244")[0].style.display = "none"; //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
  } else {
    document.getElementsByClassName("48042")[0].style.display = "none"; //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
    document.getElementsByClassName("47244")[0].style.display = "none"; //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
  }

  if (this.form_data.WorkingChildren === "نعم") {
    document.getElementsByClassName("47250")[0].style.display = "block"; //كتاب ابلاغ بالنسبة من لديه اولاد تم تعينهم
  } else {
    document.getElementsByClassName("47250")[0].style.display = "none";
  }
}
