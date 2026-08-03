{
  //بالطلب الطبيعي والجمعية
  //الطلب الطبيعي والجمعية
  var Docs1 = ["nonSyndicateAffidavit"], //تعهد  خطي بعدم الانتماء الى نقابة مختصة
    Docs2 = [
      ["ownershipOrRent"], //سند ملكية او عقد ايجار
      ["founderResearch"], //بحوث ودراسات علمية وتطبيقية للمؤسس
      ["noCriminalAffidavit"], //تعهد خطي مؤسس غير محكوم عليه
      ["inspectionReport"], //تقرير الكشف
    ],
    //الطلب الطبيعي والجمعية
    //الوكالة اجبارية في حالة تجديد الاجازة
    Docs3 = ["taxId"], //وكالة خاصة بالوكيل
    //مال النقابة
    Docs4 = ["nonGovtEmployeeAffidavit"],
    //مال الجمعية
    Docs5 = ["syndicateNonMembership"], //تاييد من النقابة تدل على عدم انتماء
    Docs6 = [
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
    Docs7 = [
      ["coloredLeaveDoc"], //صورة ملونة للاجازة الممنوحة (كلا الوجهين)
      ["lvapproval"], //كتاب الموافقة على منح الاجازة
    ],
    //تجميد المكتب
    Docs8 = [
      ["personalDocuments"], //المستمسكات الشخصية
      ["founderPhoto"], //صورة شخصية للمؤسس
      ["coloredLeaveDoc"], //صورة ملونة للاجازة الممنوحة (كلا الوجهين)
      ["OfficeCheck"], //تعهد بعدم وجود اي التزام لدى المكتب
      ["OfficeClosing"], //طلب خطي لتجميد المكتب مع بيان اسباب التجميد
    ];

  var numbers = [0];

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
  if (this.form_data.requset == "شخص طبيعي ( لا ينتمي الى نقابة او جمعية )") {
    if (this.form_data.Procedure == "تجديد اجازة المكتب") {
      validateDocuments.call(this, Docs3, 0);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], 0);
    }

    validateDocuments.call(this, Docs1, 0);
    validateDocuments.call(this, Docs5, 0);
  }

  if (this.form_data.requset == "جمعية") {
    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], 0);
    }
  }

  if (this.form_data.requset == "نقابة") {
    validateDocuments.call(this, Docs4, 0);
  }

  var Selected_Values = ["تأسيس مكتب", "تجديد اجازة المكتب", "بدل تالف"];
  if (Selected_Values.includes(this.form_data.Procedure)) {
    for (var i = 0; i < Docs6.length; i++) {
      validateDocuments.call(this, Docs6[i], 0);
    }
  }

  if (this.form_data.Procedure == "طلب شهادة جدارية") {
    for (var i = 0; i < Docs7.length; i++) {
      validateDocuments.call(this, Docs7[i], 0);
    }
  }

  if (this.form_data.Procedure == "تجميد مكتب") {
    for (var i = 0; i < Docs8.length; i++) {
      validateDocuments.call(this, Docs8[i], 0);
    }
  }
}
