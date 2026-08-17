{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "Date", Field_ID: "72894" }, // النفاذيه
      { Field_Prog: "ContractNumber", Field_ID: "72896" }, // رقم العقد
      { Field_Prog: "startDate", Field_ID: "73717" }, // تاريخ المباشرة
      { Field_Prog: "EndDate", Field_ID: "73718" }, // تاريخ الانجاز
      { Field_Prog: "pledgeNu", Field_ID: "73719" }, // قيمة التعهد رقما
      { Field_Prog: "pledge", Field_ID: "73721" }, // قيمة التعهد كتابه
      { Field_Prog: "receivedNu", Field_ID: "73722" }, // رقم وصل التسديد
      { Field_Prog: "receivedDate", Field_ID: "73723" }, // تاريخ الوصل
      { Field_Prog: "tabelOne", Field_ID: "73726" }, // معلومات البائع
      { Field_Prog: "tabel", Field_ID: "73727" }, // معلومات المشتري
      { Field_Prog: "Name", Field_ID: "72890" }, // اسم مقدم الطلب / المخول
      { Field_Prog: "Position", Field_ID: "72891" }, // الصفة القانونية
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
