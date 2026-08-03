{
  var Values = [
    {
      Selected_Value: "1",
      Groups_Count: 1,
      Fields_Count: 10,
    },
    {
      Selected_Value: "2",
      Groups_Count: 2,
      Fields_Count: 20,
    },
    {
      Selected_Value: "3",
      Groups_Count: 3,
      Fields_Count: 30,
    },
    {
      Selected_Value: "4",
      Groups_Count: 4,
      Fields_Count: 40,
    },
    {
      Selected_Value: "5",
      Groups_Count: 5,
      Fields_Count: 50,
    },
    {
      Selected_Value: "6",
      Groups_Count: 6,
      Fields_Count: 60,
    },
  ];

  var ProgsName = [
    //اول شركة
    "compname",
    "comprec",
    "comp",
    "compmon",
    "compaddr",
    "compnum",
    "compemail",
    "compbossfirst",
    "compbosssec",
    "compbossthird",

    //ثاني شركة
    "seccompname",
    "secrec",
    "secact",
    "secmony",
    "seccompadd",
    "seccompphone",
    "seccompemail",
    "secbossname",
    "secbnsec",
    "secbthr",

    //ثالث شركة
    "companynameA",
    "companynemperA",
    "companynatherA",
    "companymoneeyA",
    "companyadrresA",
    "companyfhoneA",
    "companyemealA",
    "companyfirstnameA",
    "companysecondnameA",
    "companytherdnameA",

    //رابع شركة
    "companynameB",
    "companynemperB",
    "companynatherB",
    "companymoneeyB",
    "companyadrresB",
    "companyfhoneB",
    "companyemealB",
    "companyfirstnameB",
    "companysecondnameB",
    "companytherdnameB",

    //خامس شركة
    "companytherdnameC",
    "companynemperC",
    "companynatherC",
    "companymoneeyC",
    "companyadrresC",
    "companyfhoneC",
    "companyemealC",
    "companyfirstnameC",
    "companysecondnameC",
    "CcompanytherdnameCC",

    //سادس شركة
    "companynameD",
    "companynemperD",
    "companynatherD",
    "companymoneeyD",
    "companyadrresD",
    "companyfhoneD",
    "companyemealD",
    "companyfirstnameD",
    "companysecondnameD",
    "companytherdnameD",
  ];

  let Result = Values.find(
    (Finding) => this.inputFormField.front === Finding.Selected_Value,
  );

  if (Result) {
    let Current_Group = 1,
      Current_Field = 0;

    for (var i = 0; i < Math.min(Result.Fields_Count, ProgsName.length); i++) {
      if (i > 0 && i % 10 === 0) {
        Current_Group += 1;
        Current_Field = 0;
      }

      if (
        this.inputFormField[ProgsName[i]] == null ||
        this.inputFormField[ProgsName[i]] === ""
      ) {
        console.log(i, ProgsName[i], this.inputFormField[ProgsName[i]]);

        this.evalErr.push(
          `الحقل ${this.group_of_form[Current_Group].fields[Current_Field].label} مطلوب`,
        );
      }

      Current_Field += 1;
    }
  }

  //---------------------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  //بيانات الشركة الاولى المقدمة بطلب الاندماج او الاستحواذ
  if (this.inputFormField.compnum) {
    const phoneNo = this.inputFormField.compnum;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة الاولى بالرقم 07.");
    }
  }

  //بيانات الشركة الثانية المقدمة بطلب الاندماج والاستحواذ
  if (this.inputFormField.seccompphone) {
    const phoneNo = this.inputFormField.seccompphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة الثانية بالرقم 07.");
    }
  }

  //بيانات الشركة الثالثة المقدمة بطلب الاندماج والاستحواذ
  if (this.inputFormField.companyfhoneA) {
    const phoneNo = this.inputFormField.companyfhoneA;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة الثالثة بالرقم 07.");
    }
  }

  //بيانات الشركة الرابعة المقدمة بطلب الاندماج والاستحواذ
  if (this.inputFormField.companyfhoneB) {
    const phoneNo = this.inputFormField.companyfhoneB;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة الرابعة بالرقم 07.");
    }
  }

  //بيانات الشركة الخامسة المقدمة بطلب الاندماج والاستحواذ
  if (this.inputFormField.companyfhoneC) {
    const phoneNo = this.inputFormField.companyfhoneC;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة الخامسة بالرقم 07.");
    }
  }

  //بيانات الشركة السادسة المقدمة بطلب الاندماج والاستحواذ
  if (this.inputFormField.companyfhoneD) {
    const phoneNo = this.inputFormField.companyfhoneD;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الشركة السادسة بالرقم 07.");
    }
  }
}
