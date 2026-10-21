{
  /*
  * هذا الملف خاص بحالات بجعل الملفات مطلوبة عندما تظهر في صفحة المرفقات
  ! documentfeapplyService هو "Code snippet type" لاضافة الكود البرمجي بعد اكماله يجب ان يكون نوع ملف الشفرة البرمجية
  ! before هو "Run Time" ووقت العمل
  
  * المقصود بهذه الاكواد او الفائدة منها هو جعل الملفات مطلوبة عندما تظهر في صفحة الملفات وغير مطلوبة عندما تختفي
  * وسبب عدم جعلها مطلوبة من خلال اعدادات الحقل لكون الاستمارة ستتوقف عن العمل والسبب بذلك هو
  * ان الملفات دائما ستكون مطلوبة حتى وان كان الملف مخفي من الاستمارة فلن يستطيع المواطن ان يملئ هذا الملف لكونه مخفي

  ! {} لكتابة الكود البرمجي يحتاج ان يتم كتابته بين اقواس من نوع
  * form_data ونضع الاسم البرمجي للحقل الذي يحتوي على الخيار الخاص بالشرط بعد النقطة في ايعاز
  * لا يمكن جعل المجموعة مطلوبة عندما تظهر ولهذا يجب ان نجعل المرفقات التي بداخل المجموعة مطلوبة عندما تظهر مجموعتهم
  */

  //--------------------------------------------------------------------------------------------------------------------------//
  //!---------------------------------------------------First_Case------------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل حقل واحد مطلوب
  var Docs1 = ["DocsProgName"]; //* الاسم البرمجي الخاص بالمرفق

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  if (this.form_data.ProgName == "قيمة الشرط") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!---------------------------------------------------Second_Case-----------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل عدة حقول مطلوبة
  //* مصفوفة خاصة بالاسماء البرمجية الخاصة بالمرفقات Docs_Prog
  var Docs_Prog = [
    ["FirstProg"], //* الاسم البرمجي للمرفق الاول
    ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
    ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
  ];

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  if (this.form_data.ProgName == "قيمة الشرط") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    Docs_Prog.forEach((Checking) =>
      validateDocuments.call(this, Checking, numbers[0]),
    );
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!----------------------------------------------------Third_Case-----------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل عدة حقول مطلوبة وكل حقل مع شرط مختلف
  //* مصفوفة خاصة بالاسماء البرمجية الخاصة بالمرفقات Docs_Prog
  var Docs_Prog = [
    ["FirstProg"], //* الاسم البرمجي للمرفق الاول
    ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
    ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
  ];

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  //* هو الاسم البرمجي للحقل الاول FirstProg
  if (this.form_data.FirstProg == "قيمة الشرط") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    //* Docs_Prog تمثل القيمة الاولى في المصفوفة Docs_Prog القيمة 0 في المصفوفة
    validateDocuments.call(this, Docs_Prog[0], numbers[0]);
  }

  //* هو الاسم البرمجي للحقل الثاني SecondProg
  if (this.form_data.SecondProg == "قيمة الشرط") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    //* Docs_Prog تمثل القيمة الاولى في المصفوفة Docs_Prog القيمة 1 و2 في المصفوفة
    validateDocuments.call(this, Docs_Prog[1], numbers[0]);
    validateDocuments.call(this, Docs_Prog[2], numbers[0]);
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!----------------------------------------------------Fourth_Case----------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل مرفقات من عدة مجاميع مطلوبة
  //* مصفوفة خاصة بالاسماء البرمجية الخاصة بمرفقات المجموعة الاولى First_Docs_Group
  var First_Docs_Group = [
      ["FirstProg"], //* الاسم البرمجي للمرفق الاول
      ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
      ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
    ],
    //* مصفوفة خاصة بالاسماء البرمجية الخاصة بمرفقات المجموعة الثانية Second_Docs_Group
    Second_Docs_Group = [
      ["FirstProg"], //* الاسم البرمجي للمرفق الاول
      ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
      ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
    ];

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
    1, //* تسلسل المجموعة الثانية
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  //* هو الاسم البرمجي للحقل الاول FirstProg
  if (this.form_data.FirstProg == "قيمة الشرط الاول") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    First_Docs_Group.forEach((Checking) =>
      validateDocuments.call(this, Checking, numbers[0]),
    );
  }

  //* هو الاسم البرمجي للحقل الثاني SecondProg
  if (this.form_data.SecondProg == "قيمة الشرط الاول") {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 1 في المصفوفة
    Second_Docs_Group.forEach((Checking) =>
      validateDocuments.call(this, Checking, numbers[1]),
    );
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!-----------------------------------------------------Fifth_Case----------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل مرفق واحد مطلوب على اساس عدة شروط
  var Docs1 = ["DocsProgName"]; //* الاسم البرمجي الخاص بالمرفق

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* القيم التي اذا تم اختيار قيمة منها يصبح المرفق مطلوب
  var Selected_Values = [
    "قيمة الشرط الاولى",
    "قيمة الشرط الثانية",
    "قيمة الشرط الثالث",
  ];

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  if (Selected_Values.includes(this.form_data.ProgName)) {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!-----------------------------------------------------Sixth_Case----------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل عدة مرفقات مطلوبة على اساس عدة شروط
  //* مصفوفة خاصة بالاسماء البرمجية الخاصة بالمرفقات Docs_Prog
  var Docs_Prog = [
    ["FirstProg"], //* الاسم البرمجي للمرفق الاول
    ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
    ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
  ];

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* القيم التي اذا تم اختيار قيمة منها يصبح المرفق مطلوب
  var Selected_Values = [
    "قيمة الشرط الاولى",
    "قيمة الشرط الثانية",
    "قيمة الشرط الثالث",
  ];

  //* form_data نضع الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل المرفق يظهر من ضمن المرفقات بعد النقطة الخاصة بايعاز
  if (Selected_Values.includes(this.form_data.ProgName)) {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    Docs_Prog.forEach((Checking) =>
      validateDocuments.call(this, Checking, numbers[0]),
    );
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!----------------------------------------------------Sevethn_Case---------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل مرفق واحد مطلوب على اساس عدة حقول
  var Docs1 = ["DocsProgName"]; //* الاسم البرمجي الخاص بالمرفق

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* هو الاسم البرمجي للحقل الاول FirstProg
  //* هو الاسم البرمجي للحقل الثاني SecondProg
  if (
    this.form_data.FirstProg == "قيمة شرط الحقل الاول" &&
    this.form_data.SecondProg == "قيمة شرط الحقل الثاني"
  ) {
    //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  //!-----------------------------------------------------Eighth_Case---------------------------------------------------------//
  //--------------------------------------------------------------------------------------------------------------------------//
  //! لجعل عدة مرفقات مطلوبة على اساس عدة حقول
  //* مصفوفة خاصة بالاسماء البرمجية الخاصة بالمرفقات Docs_Prog
  var Docs_Prog = [
    ["FirstProg"], //* الاسم البرمجي للمرفق الاول
    ["SecondProg"], //* الاسم البرمجي للمرفق الثاني
    ["ThirdProg"], //* الاسم البرمجي للمرفق الثالث
  ];

  //* هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [
    0, //* تسلسل المجموعة الاولى
  ];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  //* هو الاسم البرمجي للحقل الاول FirstProg
  //* هو الاسم البرمجي للحقل الثاني SecondProg
  if (
    this.form_data.FirstProg == "قيمة شرط الحقل الاول" &&
    this.form_data.SecondProg == "قيمة شرط الحقل الثاني"
  ) {
    for (var i = 0; i < Docs_Prog.length; i++) {
      //* numbers تمثل القيمة الاولى في المصفوفة numbers القيمة 0 في المصفوفة
      validateDocuments.call(this, Docs_Prog[i], numbers[0]);
    }
  }
}
