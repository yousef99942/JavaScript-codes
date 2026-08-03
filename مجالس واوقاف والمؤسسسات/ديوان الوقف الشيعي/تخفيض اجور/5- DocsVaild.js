{
  const Values = [
    {
      Selected_Value: "الرعاية الاجتماعية",
      Fields_Progs: [
        ["nationid"], //البطاقة الوطنية لصاحب تأييد الرعاية (وجه)
        ["nationidd"], //البطاقة الوطنية لصاحب تأييد الرعاية (ظهر)
        ["sponsorship"], //تأييد الرعاية بتأريخ جديد
        ["sponsorshipfat"], //استمارة الرعاية التي تحتوي اسم الطالب ضمن افراد الاسرة
      ],
      Group_Location: 1,
    },
    {
      Selected_Value: "الاقارب",
      Fields_Progs: [["request"]], //تأييد من قسم الطرف الثاني يثبت ان الطالب لم يقدم طلب تخفيض باسمه
      Group_Location: 2,
    },
    {
      Selected_Value: "ذوي الاعاقة (العجز) بنسبة 70%",
      Fields_Progs: [["report"]], //تقرير طبي من اللجان الطبية الرسمية (حصراً) تثبت نسبة العجز
      Group_Location: 3,
    },
    {
      Selected_Value: "المكفوفين",
      Fields_Progs: [["reportt"]], //تقرير طبي من اللجان الطبية الرسمية (حصراً)
      Group_Location: 4,
    },
    {
      Selected_Value: "ممن ذويهم لديهم عجز بنسبة 70%",
      Fields_Progs: [
        ["nationlidoth"], //البطاقة الوطنية الموحدة للمعاق (وجه)
        ["nationaliddoth"], //البطاقة الوطنية الموحدة للمعاق (ظهر)
        ["requestoth"], //تأييد من وزارة العمل والشؤون الاجتماعية يوضح بأن ذويهم مسجلون من ذوي الاعاقة يبين فيه نسبة العجز
      ],
      Group_Location: 5,
    },
    {
      Selected_Value: "حافظي القرآن 5 اجزاء",
      Fields_Progs: [["requestothe"]], //تأييد من المؤسسات او المدارس الدينية او تأييد من القسم يثبت حفظ الطالب 5 اجزاء من القران الكريم فأكثر
      Group_Location: 6,
    },
    {
      Selected_Value: "مؤسسة العين",
      Fields_Progs: [["reqother"]], //تأييد من مؤسسة العين
      Group_Location: 7,
    },
    {
      Selected_Value: "ابناء الاساتذة والموظفين وابناؤهم",
      Fields_Progs: [
        ["nationaloth"], //البطاقة الوطنية الموحدة للتدريسي او الموظف من والدي الطالب (وجه)
        ["nationalothe"], //البطاقة الوطنية الموحدة للتدريسي او الموظف من والدي الطالب (ظهر)
        ["requetother"], //تأييد حديث لاستمرارية بالخدمة للتدريسي او الموظف
      ],
      Group_Location: 8,
    },
    {
      Selected_Value: "منتسبي الحشد الشعبي ورجال الدين في الحوزة العلمية",
      Fields_Progs: [["otherrequset"]], //تأييد استمرارية بالخدمة للطالب من دائرته ان كان منتسب في الحشد او رجل دين
      Group_Location: 9,
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

  const Result = Values.find(
    (Finding) => this.form_data.requesttype === Finding.Selected_Value,
  );

  if (Result) {
    Result.Fields_Progs.forEach((Checking) =>
      validateDocuments.call(this, Checking, Result.Group_Location),
    );
  }
}
