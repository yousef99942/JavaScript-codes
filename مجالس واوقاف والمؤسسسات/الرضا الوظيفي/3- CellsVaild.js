{
  if (this.inputFormField.circle) {
    //نوع التشكيل
    if (
      this.inputFormField["DeptType"] == "" ||
      this.inputFormField["DeptType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.DeptType) {
    //اسم التشكيل
    if (
      this.inputFormField["amannadep"] == "" ||
      this.inputFormField["amannadep"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.amannadep == "فروع الهيئة في المحافظات" ||
    this.inputFormField.amannadep == "المكاتب الانتخابية في المحافظات"
  ) {
    //اختر المحافظة
    if (
      this.inputFormField["governorate"] == "" ||
      this.inputFormField["governorate"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.circle === "وزارة الداخلية" &&
    this.inputFormField.amannadep
  ) {
    //التشكيل الفرعي
    if (
      this.inputFormField["SubDeptName"] == "" ||
      this.inputFormField["SubDeptName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }

  if (this.inputFormField.SubDeptName) {
    //نوع التشكيل الفرعي
    if (
      this.inputFormField["SubDeptType"] == "" ||
      this.inputFormField["SubDeptType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.SubDeptType) {
    //التشكيل
    if (
      this.inputFormField["FinalDeptName"] == "" ||
      this.inputFormField["FinalDeptName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }

  //اوزان التقييم
  let Values = [
    { Selected_Value: "0", Result_Value: 25 },
    { Selected_Value: "1", Result_Value: 50 },
    { Selected_Value: "3", Result_Value: 75 },
    { Selected_Value: "4", Result_Value: 100 },
  ];

  let Fields_Progs = [
    {
      Result_Field: this.inputFormField.FirstResult, //معدل القيادة والادارة
      Fields_Prog: [
        this.inputFormField.optionone, //السؤال الاول
        this.inputFormField.optionthree, //السؤال الثاني
        this.inputFormField.optionfour, //السؤال الثالث
        this.inputFormField.optionfive, //السؤال الرابع
      ],
      Result: 0,
    }, //معدل القيادة والادارة
    {
      Result_Field: this.inputFormField.SecondResult, //معدل التخطيط الستراتيجي
      Fields_Prog: [
        this.inputFormField.optionsix, //السؤال الاول
        this.inputFormField.optrionsiven, //السؤال الثاني
        this.inputFormField.optioneigth, //السؤال الثالث
        this.inputFormField.optionnigth, //السؤال الرابع
        this.inputFormField.optionten, //السؤال الخامس
      ],
      Result: 0,
    }, //معدل التخطيط الستراتيجي
    {
      Result_Field: this.inputFormField.ThirdResult, //التمكين و الولاء الوظيفي
      Fields_Prog: [
        this.inputFormField.optioneleven, //السؤال الاول
        this.inputFormField.optiontwelve, //السؤال الثاني
        this.inputFormField.appstba, //السؤال الثالث
        this.inputFormField.appstbanaa, //السؤال الرابع
        this.inputFormField.optionsixteen, //السؤال الخامس
      ],
      Result: 0,
    }, //التمكين و الولاء الوظيفي
    {
      Result_Field: this.inputFormField.FourthResult, //السلوك و الاستحقاق الوظيفي
      Fields_Prog: [
        this.inputFormField.astbanathana, //السؤال الاول
        this.inputFormField.optionsevin, //السؤال الثاني
        this.inputFormField.optionegith, //السؤال الثالث
        this.inputFormField.benjining, //السؤال الرابع
        this.inputFormField.astbanaamal, //السؤال الخامس
      ],
      Result: 0,
    }, //السلوك و الاستحقاق الوظيفي
    {
      Result_Field: this.inputFormField.FifthResult, //السلامة والصحة المهنية والبيئة
      Fields_Prog: [
        this.inputFormField.selectonetwo, //السؤال الاول
        this.inputFormField.selectthre, //السؤال الثاني
        this.inputFormField.selectfivesevin, //السؤال الثالث
        this.inputFormField.selectsevien, //السؤال الرابع
        this.inputFormField.selecting, //السؤال الخامس
      ],
      Result: 0,
    }, //السلامة والصحة المهنية والبيئة
    {
      Result_Field: this.inputFormField.SixthResult, //الدعم و التواصل
      Fields_Prog: [
        this.inputFormField.instrasbana, //السؤال الاول
        this.inputFormField.theerfaiv, //السؤال الثاني
        this.inputFormField.theryeight, //السؤال الثالث
        this.inputFormField.thertynin, //السؤال الرابع
        this.inputFormField.tatasmmmm, //السؤال الخامس
      ],
      Result: 0,
    }, //الدعم و التواصل
  ];
}
