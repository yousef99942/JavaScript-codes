{
  if (this.inputFormField.ser == "بري") {
    if (
      this.inputFormField["tran"] == null ||
      this.inputFormField["tran"] == ""
    ) {
      this.evalErr.push(" مطلوب في حالة النقل البري");
    }
  }

  if (this.inputFormField.IDType == "البطاقة الوطنية") {
    if (
      this.inputFormField["IDNum"] == null ||
      this.inputFormField["IDNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["VBG"] == null ||
      this.inputFormField["VBG"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`,
      );
    }
  }

  var Progs = [
      "mnnb", //شركة الحماية الامنية المرافقة للشحنة
      "dtt", //تاريخ العقد:
      "der", //صالح لغاية:
      "mnn", //عدد افراد الحماية الامنية المرافقين للشحنة
      "noc", //عدد المركبات المخصصة للحماية:
      "pax", //هل توجد اجهزة تعقب لسيارة نقل المصادر المشعة؟
      "isof", //هل تتوفر وسائل اتصال مناسبة بين مسؤولي الحماية والجهة المرخصة؟
      "isota", //هل تم التنسيق بين الجهة المرخصة بالنقل والحماية الامنية على موعد تحريك الشحنة؟
      "proct", //اجراءات الحماية الامنية اثناء عملية النقل:
    ],
    Fields = [0, 1, 2, 3, 4, 5, 6, 8, 9];

  if (
    this.inputFormField.SourceType == "الفئة 1" ||
    this.inputFormField.SourceType == "الفئة 2"
  ) {
    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Fields[i]].label} مطلوب`,
        );
      }
    }
  }

  var Values = [
      "الانبار",
      "بابل",
      "بغداد",
      "البصرة",
      "ديالى",
      "ذي قار",
      "صلاح الدين",
      "القادسية",
      "كركوك",
      "كربلاء المقدسة",
      "المثنى",
      "ميسان",
      "النجف الاشرف",
      "نينوى",
      "واسط",
    ],
    Second_Values = ["اربيل", "السليمانية", "دهوك", "حلبجة"];

  if (Values.includes(this.inputFormField.place)) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }
  }

  if (Second_Values.includes(this.inputFormField.place)) {
    if (
      this.inputFormField["FirstDist"] == null ||
      this.inputFormField["FirstDist"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }
  }
}
