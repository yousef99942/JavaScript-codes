{
  if (this.form_data.cvf == "حكومي") {
    if (
      !this.inputDocsField.rrr ||
      this.inputDocsField.rrr.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (كتاب رسمي من المؤسسة المستخدمة للمصادر المشعة موقع من مدير المؤسسة يطلب فيه اجازة حيازة واستخدام للمصادر المشعة) مطلوب"
      );
    }
    if (
      !this.inputDocsField.wer ||
      this.inputDocsField.wer.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (كتاب صادر من مدير المؤسسة او وكالة خاصة اوعامة بتخويل احد موظفيها بمراجعة الهيئة لغرض التوقيع ودفع الرسوم المطلوبة واكمال اجراءات منح التخويل) مطلوب"
      );
    }
    if (
      !this.inputDocsField.ert ||
      this.inputDocsField.ert.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (شهادة المنشأ للمصادر المشعة والاجهزة المرافقة) مطلوب"
      );
    }
    if (
      !this.inputDocsField.zsd ||
      this.inputDocsField.zsd.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (اجازة المخزن صادر عن الهيئة، قبل الشروع بتقديم الطلب ويتم الحصول على تخويل مخزن مصادر مشعة من الهيئة وفي حال ان المصدر جزء لا يتجزء من الجهاز الحاوي له فيرجى توضيح ذلك بكتاب رسمي وارفاق نسخة من الدليل الفني المتضمن توضيح ذلك) مطلوب"
      );
    }
    if (
      !this.inputDocsField.rtr ||
      this.inputDocsField.rtr.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (ملء استمارة برنامج الوقاية من الاشعاع للمؤسسة وخطة الطوارئ الاشعاعية الموقعية للمؤسسة لغرض مراجعتها والمصادقة عليها من قبل الهيئة) مطلوب"
      );
    }
    if (
      !this.inputDocsField.oiu ||
      this.inputDocsField.oiu.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (مخطط يبين مواقع استخدام المصادر المشعة في المؤسسة / البناية وما يحيط بها من بنايات) مطلوب"
      );
    }
    if (
      !this.inputDocsField.ccd ||
      this.inputDocsField.ccd.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (شهادة الترخيص لمسؤول الوقاية من الاشعاع وفي حال عدم وجودها يتم ملء الاستمارة الخاصة بمؤهلات مسؤول الوقاية ويتم مراجعة الهيئة للحصول عليها وفق ضوابط الهيئة) مطلوب"
      );
    }
    if (
      !this.inputDocsField.trg ||
      this.inputDocsField.trg.files.length === 0
    ) {
      this.evalErr.push("الحقل (التعهد القانوني) مطلوب");
    }
    if (
      !this.inputDocsField.qqq ||
      this.inputDocsField.qqq.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (شهادات معايرة الاجهزة المرافقة واجهزة المراقبة الاشعاعية) مطلوب"
      );
    }
    if (
      !this.inputDocsField.erd ||
      this.inputDocsField.erd.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (اذا كانت الممارسة الاشعاعية تحتوي على مصادر مشعة من الفئات (1،2،3) حسب تصنيفات الوكالة الدولية للطاقة الذرية فيجب توفر خبراء مؤهلين في امن وامان مصادر الاشعاع واجراء عمليات الصيانة والمعايرة الدورية للاجهزة والمعدات المستخدمة (اضافة اسماء في جدول)) مطلوب"
      );
    }
  } else {
    if (
      !this.inputDocsField.popo ||
      this.inputDocsField.popo.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (كتاب تأسيس المؤسسة صادر من الجهة الحكومية المعنية باستثناء المؤسسات الحكومية) مطلوب"
      );
    }
    if (
      !this.inputDocsField.cvd ||
      this.inputDocsField.cvd.files.length === 0
    ) {
      this.evalErr.push(
        "الحقل (كتاب رسمي يؤيد المحاسبة الضريبية لمؤسسات القطاع الخاص صادر من الهيئة العامة للضرائب لآخر تحاسب ضريبي) مطلوب"
      );
    }
  }
}
