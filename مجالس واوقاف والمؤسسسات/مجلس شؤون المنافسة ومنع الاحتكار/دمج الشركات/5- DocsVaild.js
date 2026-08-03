{
  //الشركة الاولى
  var Docs1 = [
      ["hhhhh"],
      ["cch"],
      ["sss"],
      ["ssh"],
      ["ww"],
      ["hhh"],
      ["ttt"],
      ["conf"],
      ["deal"],
      ["uuu"],
      ["fff"],
      ["bbb"],
    ],
    //الشركة الثانية
    Docs2 = [
      ["DOCAONE"],
      ["DOCATWO"],
      ["DOCATHREE"],
      ["DOCAFOUR"],
      ["DOCAFIVE"],
      ["DOCASIX"],
      ["DOCASEVEN"],
      ["DOCAEIGHT"],
      ["DOCANINE"],
      ["DOCATEN"],
      ["DOCAELEVEN"],
      ["DOCATWE"],
    ],
    //الشركة الثالثة
    Docs3 = [
      ["DOCBONE"],
      ["DOCBTWO"],
      ["DOCBTHREE"],
      ["DOCBFOUR"],
      ["DOCBFIVE"],
      ["DOCBSIX"],
      ["DOCBSEVEN"],
      ["DOCBEIGHT"],
      ["DOCBNINE"],
      ["DOCBTEN"],
      ["DOCBELEVEN"],
      ["DOCBTWE"],
    ],
    //الشركة الرابعه
    Docs4 = [
      ["DOCCONE"],
      ["DOCCTWO"],
      ["DOCATHREE"],
      ["DOCCFOUR"],
      ["DOCCFIVE"],
      ["DOCCSIX"],
      ["DOCCSEVEN"],
      ["DOCCEIGHT"],
      ["DOCCNINE"],
      ["DOCCTEN"],
      ["DOCCELEVEN"],
      ["DOCCTWE"],
    ],
    //الشركة الخامسة
    Docs5 = [
      ["DOCDONE"],
      ["DOCDTWO"],
      ["DOCDTHREE"],
      ["DOCDFOUR"],
      ["DOCDFIVE"],
      ["DOCDSIX"],
      ["DOCDSEVEN"],
      ["DOCDEIGHT"],
      ["DOCDNINE"],
      ["DOCDTEN"],
      ["DOCDELEVEN"],
      ["DOCDTWE"],
    ],
    //الشركة السادسة
    Docs6 = [
      ["DOCEONE"],
      ["DOCETWO"],
      ["DOCETHREE"],
      ["DOCEFOUR"],
      ["DOCEFIVE"],
      ["DOCESIX"],
      ["DOCESEVEN"],
      ["DOCEEIGHT"],
      ["DOCENINE"],
      ["DOCETEN"],
      ["DOCEELEVEN"],
      ["DOCETWE"],
    ];
  var numbers = [0, 1, 2, 3, 4, 5];

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
  if (this.form_data.front == "1") {
    console.log("1");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }
  }

  if (this.form_data.front == "2") {
    console.log("2");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], numbers[1]);
    }
  }

  if (this.form_data.front == "3") {
    console.log("3");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], numbers[1]);
    }

    for (var i = 0; i < Docs3.length; i++) {
      validateDocuments.call(this, Docs3[i], numbers[2]);
    }
  }

  if (this.form_data.front == "4") {
    console.log("4");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], numbers[1]);
    }

    for (var i = 0; i < Docs3.length; i++) {
      validateDocuments.call(this, Docs3[i], numbers[2]);
    }

    for (var i = 0; i < Docs4.length; i++) {
      validateDocuments.call(this, Docs4[i], numbers[3]);
    }
  }

  if (this.form_data.front == "5") {
    console.log("5");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], numbers[1]);
    }

    for (var i = 0; i < Docs3.length; i++) {
      validateDocuments.call(this, Docs3[i], numbers[2]);
    }

    for (var i = 0; i < Docs4.length; i++) {
      validateDocuments.call(this, Docs4[i], numbers[3]);
    }

    for (var i = 0; i < Docs5.length; i++) {
      validateDocuments.call(this, Docs5[i], numbers[4]);
    }
  }

  if (this.form_data.front == "6") {
    console.log("6");
    for (var i = 0; i < Docs1.length; i++) {
      validateDocuments.call(this, Docs1[i], numbers[0]);
    }

    for (var i = 0; i < Docs2.length; i++) {
      validateDocuments.call(this, Docs2[i], numbers[1]);
    }

    for (var i = 0; i < Docs3.length; i++) {
      validateDocuments.call(this, Docs3[i], numbers[2]);
    }

    for (var i = 0; i < Docs4.length; i++) {
      validateDocuments.call(this, Docs4[i], numbers[3]);
    }

    for (var i = 0; i < Docs5.length; i++) {
      validateDocuments.call(this, Docs5[i], numbers[4]);
    }

    for (var i = 0; i < Docs6.length; i++) {
      validateDocuments.call(this, Docs6[i], numbers[5]);
    }
  }
}
