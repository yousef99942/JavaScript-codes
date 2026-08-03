{
  //مال المنح
  var Docs1 = [
      ["certificate"], //عدم محكومية
      ["drawings"], //المخططات الهندسية
    ],
    //مال التجديد
    Docs2 = [
      ["accept"], //الضمان الاجتماعي
      ["poscontrac"], //عقد الدفع الالكتروني (POS)
      //["retirdocu"], //وصل سلامة الموقف
    ],
    Docs4 = [
      ["lastlinc"], //امر التأسيس
      ["lastcer"], //اخر امر تجديد
    ],
    Docs5 = [
      ["nationalidf"], //البطاقة الوطنية للمدير المفوض -الوجه الامامي
      ["natuonaidb"], //"البطاقة الوطنية للمدير المفوض-الوجه الخلفي"
      ["residenceidf"], //بطاقة السكن للمدير المفوض-الوجه الامامي
      ["resdenceidb"], //بطاقة السكن للمدير المفوض-الوجه الخلفي
    ],
    Docs6 = [
      ["documents"], //مستمسكات جميع المستثمرين
      ["resdential"], //تاييد سكن لجميع المستثمرين
      ["gradudocuments"], //الوثائق الدراسية لجميع المستثمرين
    ],
    Docs7 = [
      ["reglicense"], //شهادة تأسيس المؤسسة
      ["regcoontract"], //عقد تأسيس المؤسسة
      ["internalsys"], //النظام الداخلي للمؤسسة
      ["mom"], //محضر اجتماع الهيئة الادارية
    ],
    Docs8 = [
      ["rentcontract"], //عقد ايجار ساري المفعول
      ["ownercon"], //سند عقار 25
    ];

  // Function to handle document validation
  function validateDocuments(docsArray) {
    // Loop through each document key in the docsArray
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find the corresponding one and validate it
        this.group_of_docs[0].fields.forEach((field) => {
          if (field.name == docKey) {
            // If no files uploaded and document_id is null, add an error
            if (
              this.inputDocsField[docKey].files.length === 0 &&
              field.document_id == null
            ) {
              this.evalErr.push(`الحقل ${field.label} مطلوب`);
            }
          }
        });
      } else {
        // If the document key doesn't exist in inputDocsField, mark as required
        this.group_of_docs[0].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  var First_Selected_Values = [
      "مدرسة ثنائية اللغة",
      "مدرسة اعدادية",
      "مدرسة متوسطة",
      "مدرسة ثانوية",
      "مدرسة ابتدائية",
      "مدرسة اساسية",
    ],
    Second_Selected_Values = [
      "مدرسة ثنائية",
      "مدرسة اساسية",
      "مدرسة ابتدائية",
      "مدرسة متوسطة",
      "مدرسة ثانوية",
      "مدرسة اعدادية",
    ];

  // Validate based on the form conditions
  if (this.form_data.select == "منح اجازة جديدة") {
    if (First_Selected_Values.includes(this.form_data.instype)) {
      validateDocuments.call(this, ["drawings"]); //المخططات الهندسية
      //validateDocuments.call(this, ["approval"]); //الموافقة على منح الاجازة
    }

    if (this.form_data.ReqTypee == "مؤسسة") {
      for (var i = 0; i < Docs7.length; i++) {
        validateDocuments.call(this, Docs7[i]);
      }
    }

    if (
      this.form_data.ReqTypee == "مستثمرين" ||
      (this.form_data.ReqTypee == "مؤسسة" &&
        this.form_data.typeofapply == "المدير المفوض")
    ) {
      validateDocuments.call(this, ["certificate"]); //عدم محكومية
    }
  }

  if (this.form_data.select == "تجديد اجازة") {
    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i]);
    }

    if (this.form_data.firstrenewal != "نعم") {
      validateDocuments.call(this, Docs4[0]);
    }

    if (this.form_data.firstrenewal != "كلا") {
      for (var i = 0; i < Docs4.length; i++) {
        validateDocuments.call(this, Docs4[i]);
      }
    }

    if (this.form_data.FoundationClosing == "نعم") {
      validateDocuments.call(this, ["FoundationClosingDocs"]);
    }
  }

  if (this.form_data.typeofapply == "المدير المفوض") {
    for (var i = 0; i < Docs5.length; i++) {
      validateDocuments.call(this, Docs5[i]);
    }
  }

  if (this.form_data.ReqTypee == "مستثمرين") {
    for (var i = 0; i < Docs6.length; i++) {
      validateDocuments.call(this, Docs6[i]);
    }
  }

  if (this.form_data.OwnerStat == "ملك") {
    validateDocuments.call(this, Docs8[1]);
  }

  if (this.form_data.OwnerStat == "ايجار") {
    validateDocuments.call(this, Docs8[0]);
    validateDocuments.call(this, Docs8[1]);
  }
}
