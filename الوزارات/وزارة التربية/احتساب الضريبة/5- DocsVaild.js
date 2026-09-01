{
  function validateDocuments(docsArray, PlaceNum) {
    // Loop through the docs array and validate each document field
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find matching ones and validate
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (field.name == docKey) {
            // If no files uploaded, or document ID is null, add error
            if (
              this.inputDocsField[docKey].files.length === 0 &&
              field.document_id == null
            ) {
              this.evalErr.push(`الحقل ${field.label} مطلوب`);
            }
          }
        });
      } else {
        // If the document doesn't exist in inputDocsField, mark as required
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  let numbers = [
    0, //المستمسكات
  ];

  //ذكر ومتزوج وزوجته ربة بيت
  if (
    this.form_data.gender === "ذكر" && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.salary === "نعم" //هل زوجة المتقدم ربة بيت
  ) {
    validateDocuments.call(this, ["idnumber"], numbers[0]); //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
  }

  //ذكر او انثى ومتزوج والزوج او الزوجة منتسب (موظف)
  if (
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "منتسب (موظف / موظفة)" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    validateDocuments.call(this, ["idnumber"], numbers[0]); //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
    //validateDocuments.call(this, ["maridoc"], numbers[0]); //كتاب تأييد من دائرة الزوج الموظف ( الزوجة الموظفة )
  }

  //ذكر او انثى ومتزوج والزوج او الزوجة كاسب
  if (
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "كاسب" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    validateDocuments.call(this, ["idnumber"], numbers[0]); //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
    validateDocuments.call(this, ["worke"], numbers[0]); //كتاب تأييد للزوجة التي زوجها كاسب ( تعهد خطي من القانونية )
  }

  //ذكر او انثى ومطلق
  if (
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "مطلق" //الحالة الاجتماعية
  ) {
    validateDocuments.call(this, ["dieme"], numbers[0]); //صورة قيد للزوجه او الزوج المطلق / المطلقه ( قرار طلاق مصدق )
  }

  if (
    //ذكر او انثى وارمل
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "أرمل" //الحالة الاجتماعية
  ) {
    validateDocuments.call(this, ["DeathIssu"], numbers[0]); //شهادة الوفاة الزوج للارملة
  }

  //ذكر او انثى ومتقاعد
  if (
    ["انثى", "ذكر"].includes(this.form_data.gender) && //جنس المتقدم
    this.form_data.maritstatus === "متزوج" && //الحالة الاجتماعية
    this.form_data.PartnerJobType === "متقاعد" //اذا الزوج منتسب او متقاعد او كاسب
  ) {
    validateDocuments.call(this, ["idnumber"], numbers[0]); //البطاقة الموحدة ( الوطنية ) للزوج / الزوجة
  }

  if (this.form_data.ChildStat === "نعم") {
    validateDocuments.call(this, ["idnumchildren"], numbers[0]); //البطاقة الموحدة ( الوطنية ) للاولاد
    if (this.form_data.maritstatus === "مطلق") {
      validateDocuments.call(this, ["custodydecision"], numbers[0]); // كتاب تاييد قرار حضانة بالنسبة للمطلق / مطلقة
    }
  }

  if (this.form_data.GildAge === "نعم") {
    validateDocuments.call(this, ["CHildStatDocs"], numbers[0]); // كتاب تأييد من الجامعة او المدرسة فيما يخص الاولاد فوق سن 18 سنة
  }

  if (this.form_data.GettingSpousalAllowances === "كلا") {
    if (this.form_data.PartnerJobType === "متقاعد") {
      validateDocuments.call(this, ["SpousalAllowances"], numbers[0]); //كتاب تأييد (تعهد خطي) من المديرية العامة للشؤون القانونية يؤيد عدم تقاضي مخصصات زوجية
    }

    if (this.form_data.PartnerJobType === "منتسب (موظف / موظفة)") {
      validateDocuments.call(this, ["maridoc"], numbers[0]); //كتاب تاييد من دائرة الزوج او الزوجة بعدم تقاضي المخصصات
    }
  }

  if (this.form_data.WorkingChildren === "نعم") {
    validateDocuments.call(this, ["childrean"], numbers[0]); //كتاب ابلاغ بالنسبة من لديه اولاد تم تعينهم
  }

  if (
    this.form_data.gender === "انثى" &&
    (this.form_data.PartnerJobType === "متقاعد" ||
      this.form_data.PartnerJobType === "كاسب") &&
    this.form_data.combinesalary === "كلا"
  ) {
    validateDocuments.call(this, ["TaxStat"], numbers[0]); //كتاب تاييد من هيأة العامة للضرائب يؤيد فيه عدم وجود دخل للزوج
  }
}
