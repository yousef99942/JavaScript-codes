{
  var Docs_Prog = [
      ["atach"], //وثيقة الصليب الاحمر
      ["documentt"], //وثيقة الامم المتحدة
      ["attachee"], //وثيقة العودة الطوعية ( المنفيست )
      ["attacheee"], //قرار قضائي مصادق من وزارة خارجية الدولة المحتجز لديها و مصادق و مترجم للفة العربية
      ["file"], //وثيقة الكارت الاخضر او الابيض
      ["fileattach"], //الرقم التسلسلي ( سيريل نمبر )
      ["files"], //تصريح خروج الى الدولة المحتجز لديها
      ["fileOther"], //وثيقة دولية اخرى لم تذكر
    ],
    Second_Docs_Prog = [
      ["Qassam"], //القسام الشرعي
      ["Agency"], //الوكالة
    ];

  var numbers = [
    0, //المجموعة الاولى
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

  if (this.form_data.document == "نعم") {
    var CheckList_Values = [
        "وثيقة الصليب الاحمر",
        "وثيقة الامم المتحدة",
        "وثيقة العودة الطوعية ( المنفيست )",
        "قرار قضائي مصادق من وزارة خارجية الدولة المحتجز لديها و مصادق و مترجم للفة العربية",
        "وثيقة الكارت الاخضر او الابيض",
        "الرقم التسلسلي (Serial number)",
        "تصريح خروج الى الدولة المحتجز لديها",
        "وثيقة دولية اخرى لم تذكر",
      ],
      Locations = [],
      Selected_Values = this.form_data.doc,
      index = 0;

    if (Selected_Values.length != 0) {
      for (var i = 0; i < CheckList_Values.length; i++) {
        if (Selected_Values.includes(CheckList_Values[i])) {
          Locations[index] = i;
          index += 1;
        }
      }

      for (var i = 0; i < Docs_Prog.length; i++) {
        if (Locations.includes(i)) {
          validateDocuments.call(this, Docs_Prog[i], numbers[0]);
        }
      }
    }
  }

  if (this.form_data.nameform == "وريث") {
    validateDocuments.call(this, Second_Docs_Prog[0], numbers[0]);
  }

  if (this.form_data.nameform == "وكيل") {
    validateDocuments.call(this, Second_Docs_Prog[1], numbers[0]);
  }
}
