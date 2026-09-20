//Write your code here
{
  //قكشن للتحقق من محتوى الحقول
  function useRegex(input, regex) {
    return regex.test(input);
  }
  //فكشن للتحقق اذا كانت الحقول المطلوبة فارغة
  function emptyFields(groupID) {
    for (let field of this.group_of_form[groupID].fields) {
      if (
        this.inputFormField[field.name] == null ||
        this.inputFormField[field.name] == ""
      ) {
        if (field.type.name != "label") {
          this.evalErr.push(`الحقل (${field.label}) مطلوب.`);
        }
      }
    }
  }

  const arabNameRegex =
    /\s.*\s|[a-zA-Z]|[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/;
  const arabNames = [
    "nam",
    "namet",
    "nameth",
    "namefo",
    "namefi",
    "namon",
    "namt",
    "nammth",
  ];

  for (let i = 0; i < arabNames.length; i++) {
    const content = this.inputFormField[arabNames[i]];
    if (useRegex.call(this, content, arabNameRegex)) {
      this.evalErr.push(
        `في حقل (${this.group_of_form[0].fields[i + 1].label}) يرجى ادخال الحروف العربية فقط`,
      );
    }
  }

  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo = this.inputFormField.hoo;
  let startNo = phoneNo.substring(0, 2);
  if (startNo != "07") {
    this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
  }

  // التحقق من العمر يجب ان يكون من 18 واكبر
  const birthDate = new Date(this.inputFormField.date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) {
    age--;
  }
  if (age < 18) {
    this.evalErr.push("العمر غير مسموح به");
  }
  const houseNoRegex = /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\?؟\{\}\$%\[\]\?\.-]/;
  //حقل رقم الدار
  if (useRegex.call(this, this.inputFormField.dddd, houseNoRegex)) {
    this.evalErr.push(
      `في حقل (${this.group_of_form[0].fields[15].label}) يرجى ادخال الحروف والارقام فقط`,
    );
  }
  const IssuingAuthRegex =
    /[a-zA-Z]|[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/;
  //التحقق من حقل مكتب المعلومات
  const infoOffice = this.inputFormField.hoj;
  if (useRegex.call(this, infoOffice, IssuingAuthRegex)) {
    this.evalErr.push(`في حقل (مكتب المعلومات) يرجى ادخال الحروف العربية فقط`);
  }

  const nearestPointRegex =
    /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]/;

  const loanType = this.inputFormField.loantype;
  if (loanType == "قرض تجاري (للمشاريع الصغيرة)") {
    emptyFields.call(this, 1);
    //التحقق من حقل اقرب نقطة دالة في حال لم يكن فارغا
    const nearestPoint = this.inputFormField.point;
    if (nearestPoint != null) {
      if (useRegex.call(this, nearestPoint, nearestPointRegex)) {
        this.evalErr.push(`في حقل (اقرب نقطة دالة) قيمة غير مسموح بها`);
      }
    }
    //التحقق من حقل جهة الاصدار في حال لم يكن فارغا
    const IssuingAuth = this.inputFormField.issuingauthority;
    if (IssuingAuth != null) {
      if (useRegex.call(this, IssuingAuth, IssuingAuthRegex)) {
        this.evalErr.push(`في حقل (جهة الاصدار) يرجى ادخال الحروف العربية فقط`);
      }
    }
    //  التحقق اذا كان تاريخ اصدار الهوية اقدم من 1926
    const releaseDateStr = this.inputFormField.releasedate;
    if (releaseDateStr != "") {
      const releaseDate = new Date(releaseDateStr);
      const releaseYear = releaseDate.getFullYear();
      console.log(this.inputFormField.releasedate);
      if (releaseYear < 1926) {
        this.evalErr.push("تاريخ اصدار هوية التجارة غير مسموح به");
      }
    }
  } else if (loanType == "قرض زراعي (للأفراد)") {
    emptyFields.call(this, 2);
    //التحقق من حقل اقرب نقطة دالة في حال لم يكن فارغا
    const nearestPoint2 = this.inputFormField.poooint;
    if (nearestPoint2 != null) {
      if (useRegex.call(this, nearestPoint2, nearestPointRegex)) {
        this.evalErr.push(`في حقل (اقرب نقطة دالة) قيمة غير مسموح بها`);
      }
    }
  } else if (loanType == "قرض لشراء منظومة طاقة متجددة") {
    emptyFields.call(this, 3);

    const countyRegex =
      /[a-zA-Z]|[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]/;
    //التحقق من حقل قطعة / محلة في حال لم يكن فارغا
    const segment = this.inputFormField.Segment;
    if (segment != null) {
      if (useRegex.call(this, segment, countyRegex)) {
        this.evalErr.push(`في حقل (قطعة / محلة) قيمة غير مسموح بها`);
      }
    }
    //التحقق من حقل مقاطعة / زقاق في حال لم يكن فارغا
    const district = this.inputFormField.District;
    if (district != null) {
      if (useRegex.call(this, district, countyRegex)) {
        this.evalErr.push(`في حقل (مقاطعة / زقاق) قيمة غير مسموح بها`);
      }
    }
    //التحقق من حقل اقرب نقطة دالة في حال لم يكن فارغا
    const nearestPoint3 = this.inputFormField.NearestPoint;
    if (nearestPoint3 != null) {
      if (useRegex.call(this, nearestPoint3, nearestPointRegex)) {
        this.evalErr.push(`في حقل (اقرب نقطة دالة) قيمة غير مسموح بها`);
      }
    }
  } else if (loanType == "قرض لشراء السيارات (للمواطنين والموظفين)") {
    emptyFields.call(this, 4);
  }
}
