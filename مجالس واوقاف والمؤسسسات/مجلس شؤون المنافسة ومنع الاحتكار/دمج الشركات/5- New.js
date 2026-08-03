{
  const Docs = [
    // الشركة الأولى
    [
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

    // الشركة الثانية
    [
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

    // الشركة الثالثة
    [
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

    // الشركة الرابعة
    [
      ["DOCCONE"],
      ["DOCCTWO"],
      ["DOCATHREE"], // إذا كان الاسم الصحيح DOCCTHREE فغيّره هنا
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

    // الشركة الخامسة
    [
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

    // الشركة السادسة
    [
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
    ],
  ];

  function validateDocuments(docsArray, placeNum) {
    docsArray.forEach((docKey) => {
      const input = this.inputDocsField?.[docKey];

      const field = this.group_of_docs[placeNum].fields.find(
        (f) => f.name === docKey,
      );

      if (!field) return;

      if (input) {
        if (input.files.length === 0 && field.document_id == null) {
          this.evalErr.push(`الحقل ${field.label} مطلوب`);
        }
      } else {
        if (field.document_id == null) {
          this.evalErr.push(`الحقل ${field.label} مطلوب`);
        }
      }
    });
  }

  const companiesCount = Number(this.form_data.front);

  for (let company = 0; company < companiesCount; company++) {
    Docs[company].forEach((doc) => {
      validateDocuments.call(this, doc, company);
    });
  }

  // إذا كانت هناك أخطاء فلا تكمل
  //   if (this.evalErr.length > 0) {
  //     return;
  //   }
}
