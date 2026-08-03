{
  if (this.inputFormField.haiderdida == "وكيله") {
    if (
      this.inputFormField["haidersa"] == null ||
      this.inputFormField["haidersa"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة");
    }
    if (
      this.inputFormField["data"] == null ||
      this.inputFormField["data"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
    if (
      this.inputFormField["wrttin"] == null ||
      this.inputFormField["wrttin"] == ""
    ) {
      this.evalErr.push("مطلوب جهة اصدار الوكالة");
    }
  }

  if (this.inputFormField.kamel == "كلا ، بمقدار اسهم") {
    if (
      this.inputFormField["housech"] == null ||
      this.inputFormField["housech"] == ""
    ) {
      this.evalErr.push("مطلوب مقدار السهام");
    }
  }

  if (this.inputFormField.kamel == "كلا ، بمقدار حصة") {
    if (
      this.inputFormField["hasa"] == null ||
      this.inputFormField["hasa"] == ""
    ) {
      this.evalErr.push("مطلوب حصتك في العقار");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "الرهن الحيازي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "الرهن الحيازي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "الرهن الحيازي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "الرهن الحيازي") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "تأشير حقوق الارتفاق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "تأشير حقوق الارتفاق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "تأشير حقوق الارتفاق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "تأشير حقوق الارتفاق") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "تسجيل وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "تسجيل وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "تسجيل وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "تسجيل وقف") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "استيلاء وتوزيع ومغارسة") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push(
        "مطلوب الاسم الرابع" && this.inputFormField.haidernam == "وكيله",
      );
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "استملاك اداري" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "استملاك اداري" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "استملاك اداري") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "مزايدة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "مزايدة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "مزايدة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "مزايدة") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "استملاك قضائي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "استملاك قضائي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "استملاك قضائي" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "استملاك قضائي") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
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
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "تصحيح صنف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "تصحيح صنف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "تصحيح صنف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "تصحيح صنف") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "تصفية وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "تصفية وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "تصفية وقف" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "تصفية وقف") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haidernam"] == null ||
      this.inputFormField["haidernam"] == ""
    ) {
      this.evalErr.push("مطلوب المتصرف الثاني /وكيله");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haidername"] == null ||
      this.inputFormField["haidername"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم اول");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haiderjtn"] == null ||
      this.inputFormField["haiderjtn"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثاني");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haidert"] == null ||
      this.inputFormField["haidert"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haiderlxs"] == null ||
      this.inputFormField["haiderlxs"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }

  if (
    this.inputFormField.eqar == "مبادلة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "مبادلة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "مبادلة" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["haiderasd"] == null ||
      this.inputFormField["haiderasd"] == ""
    ) {
      this.evalErr.push("مطلوب رقم البطاقةالموحداو هويةالاحوال");
    }
  }

  if (this.inputFormField.eqar == "مبادلة") {
    if (
      this.inputFormField["dataas"] == null ||
      this.inputFormField["dataas"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الاصدار");
    }
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

  if (
    this.inputFormField.eqar == "صلح" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "صلح" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "صلح" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
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

  if (
    this.inputFormField.eqar == "قسمة جمع او قسمة تفريق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["number"] == null ||
      this.inputFormField["number"] == ""
    ) {
      this.evalErr.push("مطلوب رقم الوكالة لوكيل المشتري");
    }
  }

  if (
    this.inputFormField.eqar == "قسمة جمع او قسمة تفريق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["histry"] == null ||
      this.inputFormField["histry"] == ""
    ) {
      this.evalErr.push("مطلوب تاريخ الوكالة");
    }
  }

  if (
    this.inputFormField.eqar == "قسمة جمع او قسمة تفريق" &&
    this.inputFormField.haidernam == "وكيله"
  ) {
    if (
      this.inputFormField["Issuer"] == null ||
      this.inputFormField["Issuer"] == ""
    ) {
      this.evalErr.push("مطلوب جهةاصدار الوكالة");
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
