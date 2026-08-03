{
  //الوكيل
  let Selected_Values = [
    "الرهن الحيازي",
    "تأشير حقوق الارتفاق",
    "تسجيل وقف",
    "استيلاء وتوزيع ومغارسة",
    "استملاك اداري",
    "مزايدة",
    "استملاك قضائي",
    "قسمة جمع او قسمة تفريق",
    "تصحيح صنف",
    "تصفية وقف",
    "مبادلة",
    "صلح",
  ];
  if (this.inputFormField.haiderdida == "وكيله") {
    let Values = [
      { Field_Prog: "haidersa", Field_Msg: "مطلوب رقم الوكالة" },
      { Field_Prog: "data", Field_Msg: "مطلوب تاريخ الوكالة" },
      { Field_Prog: "wrttin", Field_Msg: "مطلوب جهة اصدار الوكالة" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });

    if (Selected_Values.includes(this.inputFormField.eqar)) {
      let Values = [
        { Field_Prog: "number", Field_Msg: "مطلوب رقم الوكالة لوكيل المشتري" },
        { Field_Prog: "histry", Field_Msg: "مطلوب تاريخ الوكالة" },
        { Field_Prog: "Issuer", Field_Msg: "مطلوب جهةاصدار الوكالة" },
      ];

      Values.forEach((Checking) => {
        if (
          this.inputFormField[Checking.Field_Prog] == null ||
          this.inputFormField[Checking.Field_Prog] == ""
        ) {
          this.evalErr.push(Checking.Field_Msg);
        }
      });
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  if (this.inputFormField.kamel == "كلا ، بمقدار اسهم") {
    let Values = [
      { Field_Prog: "housech", Field_Msg: "مطلوب مقدار السهام" },
      { Field_Prog: "hasa", Field_Msg: "مطلوب حصتك في العقار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحد او هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "مزايدة") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني / وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    let Values = [
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "مبادلة") {
    let Values = [
      { Field_Prog: "haidernam", Field_Msg: "مطلوب المتصرف الثاني /وكيله" },
      { Field_Prog: "haidername", Field_Msg: "مطلوب الاسم اول" },
      { Field_Prog: "haiderjtn", Field_Msg: "مطلوب الاسم الثاني" },
      { Field_Prog: "haidert", Field_Msg: "مطلوب الاسم الثالث" },
      { Field_Prog: "haiderlxs", Field_Msg: "مطلوب الاسم الرابع" },
      {
        Field_Prog: "haiderasd",
        Field_Msg: "مطلوب رقم البطاقةالموحداو هويةالاحوال",
      },
      { Field_Prog: "dataas", Field_Msg: "مطلوب تاريخ الاصدار" },
    ];

    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(Checking.Field_Msg);
      }
    });
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "صلح") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "قسمة جمع او قسمة تفريق") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }
}
