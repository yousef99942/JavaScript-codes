{
  let Values = [
    {
      Selected_Values: ["شخص طبيعي ( لا ينتمي الى نقابة او جمعية )"],
      Fields_Prog: [
        ["nonSyndicateAffidavit"], //تعهد  خطي بعدم الانتماء الى نقابة مختصة
        ["ownershipOrRent"], //سند ملكية او عقد ايجار
        ["founderResearch"], //بحوث ودراسات علمية وتطبيقية للمؤسس
        ["noCriminalAffidavit"], //تعهد خطي مؤسس غير محكوم عليه
        ["inspectionReport"], //تقرير الكشف
        ["syndicateNonMembership"], //تاييد من النقابة تدل على عدم انتماء
      ],
      Father_Field: this.form_data.requset,
    },
    {
      Selected_Values: ["جمعية"],
      Fields_Prog: [
        ["ownershipOrRent"], //سند ملكية او عقد ايجار
        ["founderResearch"], //بحوث ودراسات علمية وتطبيقية للمؤسس
        ["noCriminalAffidavit"], //تعهد خطي مؤسس غير محكوم عليه
        ["inspectionReport"], //تقرير الكشف
      ],
      Father_Field: this.form_data.requset,
    },
    {
      Selected_Values: ["نقابة"],
      Fields_Prog: [["nonGovtEmployeeAffidavit"]],
      Father_Field: this.form_data.requset,
    },
    {
      Selected_Values: ["تأسيس مكتب", "تجديد اجازة المكتب", "بدل تالف"],
      Fields_Prog: [
        ["officeBylaws"], //النظام الداخلي للمكتب
        ["ownershipOrRent"], //سند ملكية او عقد ايجار
        ["graduationOrEndorsement"], //وثيقة تخرج او كتاب تأييد (مع الباركود) لمؤسس المكتب
        ["personalDocuments"], //المستمسكات الشخصية
        ["founderPhoto"], //صورة شخصية للمؤسس
        ["cv"], //السيرة الذاتية
        ["founderResearch"], //بحوث ودراسات علمية وتطبيقية للمؤسس
        ["noCriminalAffidavit"], //تعهد خطي من المؤسس /غير محكوم عليه مسبقا
        ["nonGovtEmployeeAffidavit"], //تعهد خطي ليس موظف في دائرة حكومية
      ],
      Father_Field: this.form_data.Procedure,
    },
    {
      Selected_Values: ["طلب شهادة جدارية"],
      Fields_Prog: [
        ["coloredLeaveDoc"], //صورة ملونة للاجازة الممنوحة (كلا الوجهين)
        ["lvapproval"], //كتاب الموافقة على منح الاجازة
      ],
      Father_Field: this.form_data.Procedure,
    },
    {
      Selected_Values: ["تجميد مكتب"],
      Fields_Prog: [
        ["personalDocuments"], //المستمسكات الشخصية
        ["founderPhoto"], //صورة شخصية للمؤسس
        ["coloredLeaveDoc"], //صورة ملونة للاجازة الممنوحة (كلا الوجهين)
        ["OfficeCheck"], //تعهد بعدم وجود اي التزام لدى المكتب
        ["OfficeClosing"], //طلب خطي لتجميد المكتب مع بيان اسباب التجميد
      ],
      Father_Field: this.form_data.Procedure,
    },
  ];

  // Function to handle document validation
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

  // Validate based on customer type or form type
  if (
    this.form_data.requset == "شخص طبيعي ( لا ينتمي الى نقابة او جمعية )" &&
    this.form_data.Procedure == "تجديد اجازة المكتب"
  ) {
    validateDocuments.call(this, Docs3, 0);
  }

  const Result = 
}
