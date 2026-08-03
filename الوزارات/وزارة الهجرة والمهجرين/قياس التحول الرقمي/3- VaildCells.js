{
  let First_Form_Progs = [
    {
      Group_Location: 1,
      Fields_Prog: ["namejob", "namebb", "namerr"],
      Fields_Location: [3, 4, 5],
    }, //البيانات الشخصية
    { Group_Location: 2, Fields_Prog: ["namename"], Fields_Location: [0] }, //الأستعداد للتحول الرقمي
  ];

  let Sub_First_Form_Progs = [
    {
      Group_Location: 3,
      Fields_Prog: ["nem", "new", "nzq"],
      Fields_Location: [0, 1, 2],
    }, //الأستعداد النفسي والمهني للتحول الرقمي
    {
      Group_Location: 4,
      Fields_Prog: ["zeawqws", "zxcvb", "zxcdsa", "zawdftg", "zcsfgh"],
      Fields_Location: [1, 2, 3, 4, 5],
    }, //المهارات الرقمية الأساسية
    {
      Group_Location: 5,
      Fields_Prog: [
        "bnhsf",
        "qwsdcvb",
        "qwezxdsa",
        "zxasqwerdfcv",
        "kjasdgcves",
      ],
      Fields_Location: [0, 1, 2, 3, 4],
    }, //كفاءت البنية التقنية المتاحة
    {
      Group_Location: 6,
      Fields_Prog: [
        "sdsdcvdsvsd",
        "zxsadvsgre",
        "zxcvgfsdawe",
        "awsqsdewfrv",
        "lkjhgds",
        "okjhsdffggsa",
      ],
      Fields_Location: [0, 1, 2, 3, 4, 5],
    }, //الانظمة والبرامج الالكترونية
    { Group_Location: 7, Fields_Prog: ["nameawy"], Fields_Location: [0] }, //الدورات التدريبية التي تحتاجها لتكون جاهز للتحول الرقمي
    { Group_Location: 8, Fields_Prog: ["uhbname"], Fields_Location: [0] }, //مقترحاتك لتحسين التحول الرقمي
  ];

  let Second_Form_Progs = [
    {
      Group_Location: 9,
      Fields_Prog: ["bname", "number"],
      Fields_Location: [1, 2],
    }, //البيانات الأساسية للتشكيل
    {
      Group_Location: 10,
      Fields_Prog: [
        "fgfdgdfrhh",
        "jhdsvikhweif",
        "qwdfgrvds",
        "qwasezdq",
        "ajkdhjdjdxbx",
      ],
      Fields_Location: [0, 1, 2, 3, 4, 5],
    }, //أستعداد التشكيل للتحول الرقمي
    {
      Group_Location: 11,
      Fields_Prog: ["namerdsw"],
      Fields_Location: [0],
    }, //مقترحاتك لتحسين التحول الرقمي.
  ];

  if (this.inputFormField.nameselecter == "موظف") {
    First_Form_Progs.forEach((Checking) => {
      for (var i = 0; i < Checking.Fields_Prog.length; i++) {
        if (
          this.inputFormField[Checking.Fields_Prog[i]] == null ||
          this.inputFormField[Checking.Fields_Prog[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[Checking.Group_Location].fields[Checking.Fields_Location[i]].label} مطلوب`,
          );
        }
      }
    });
  }

  if (this.inputFormField.nameselecter == "مدير") {
    Second_Form_Progs.forEach((Checking) => {
      for (var i = 0; i < Checking.Fields_Prog.length; i++) {
        if (
          this.inputFormField[Checking.Fields_Prog[i]] == null ||
          this.inputFormField[Checking.Fields_Prog[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[Checking.Group_Location].fields[Checking.Fields_Location[i]].label} مطلوب`,
          );
        }
      }
    });
  }

  //الأستعداد للتحول الرقمي
  if (this.inputFormField.namename === "نعم") {
    Sub_First_Form_Progs.forEach((Checking) => {
      for (var i = 0; i < Checking.Fields_Prog.length; i++) {
        if (
          this.inputFormField[Checking.Fields_Prog[i]] == null ||
          this.inputFormField[Checking.Fields_Prog[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[Checking.Group_Location].fields[Checking.Fields_Location[i]].label} مطلوب`,
          );
        }
      }
    });
  }
}
