{
  //this get the date form the field in the form
  var FormDate = new Date(this.inputFormField.LicenseDate);
  var TheYear = FormDate.getFullYear();
  var TheMonth = FormDate.getMonth() + 1;

  //this get the real date from the computer
  var RealDate = new Date();
  var JustYear = RealDate.getFullYear();
  var JustMonth = RealDate.getMonth() + 1;

  //var total = (JustYear - TheYear) * 12 - JustMonth + TheMonth;
  var total = (JustYear - TheYear) * 12 - TheMonth + JustMonth;

  if (total > 21) {
    this.evalErr.push(
      "تاريخ اجازة التصدير تجاوز مدة سنة و9 اشهر من تاريخ تقديمك للاستمارة"
    );
  } else if (total < 0) {
    this.evalErr.push(
      "لا يمكنك اختيار تاريخ اجازة التصدير بعد تاريخ تقديم الاستمارة"
    );
  }
}
