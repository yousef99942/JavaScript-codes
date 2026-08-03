{
  /*
    هيكل تنظيمي
    45210
    fup
    ..............
    القانون
    45256
    fupp
    .........
    ملاك مصادق
    45257
    fuppe
    .........
    نظام داخلي
    45258
    ffup
    ........
    مهام وواجبات التشكيلات
    45259
    ffupp
    ...........
    الهيكل التنظيمي الحالي والمقترح ان وجد
    45260
    ffpp
    ...........
    الوصف الوظيفي للعناوين الوظيفية والمناصب الادارية
    45261
    ffuupp
    ...........
    اجراءات تنفيذ الخدمات
    45263
    fdpu
    ...........
    دليل اجراءات الجودة ان وجد
    45262
    fupfup
    ................
    كتاب رسمي بالخدمة الاستشارية المطلوبة
    45292
    fuppee
    */
  if (this.form_data.ddlservice == "بيان رأي / أستفسار / عنوان وظيفي") {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  }
  if (
    this.form_data.ddlservices ==
    "اعداد وتحديث الوصف الوظيفين للعناوين الوظيفية"
  ) {
    document.getElementsByClassName("45210")[0].style.display = "block";
    document.getElementsByClassName("45256")[0].style.display = "block";
    document.getElementsByClassName("45257")[0].style.display = "block";
    document.getElementsByClassName("45258")[0].style.display = "block";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (this.form_data.ddlservices == "الوصف الوظيفي للمناصب الادارية") {
    document.getElementsByClassName("45210")[0].style.display = "block";
    document.getElementsByClassName("45256")[0].style.display = "block";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "block";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (this.form_data.ddlservices == "اعداد الهياكل التنظيمية") {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "block";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "block";
    document.getElementsByClassName("45259")[0].style.display = "block";
    document.getElementsByClassName("45260")[0].style.display = "block";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (this.form_data.ddlservices == "اعداد هياكل وظيفية") {
    document.getElementsByClassName("45210")[0].style.display = "block";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "block";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (this.form_data.ddlservices == "اعداد النظام الداخلي") {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "block";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (
    this.form_data.ddlservices.includes("ISO") ||
    this.form_data.ddlservices == "اعداد دليل اجراءات العمل"
  ) {
    document.getElementsByClassName("45210")[0].style.display = "block";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "block";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "block";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "block";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else if (
    this.form_data.ddlservices == "استشارات التدريب" ||
    this.form_data.ddlservices == "استشارات تقنية المعلومات" ||
    this.form_data.ddlservices == "استشارات البحث والتطوير"
  ) {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "block";
  } else if (this.form_data.ddlservices == "تبسيط الاجراءات الحكومية") {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "block";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  } else {
    document.getElementsByClassName("45210")[0].style.display = "none";
    document.getElementsByClassName("45256")[0].style.display = "none";
    document.getElementsByClassName("45257")[0].style.display = "none";
    document.getElementsByClassName("45258")[0].style.display = "none";
    document.getElementsByClassName("45259")[0].style.display = "none";
    document.getElementsByClassName("45260")[0].style.display = "none";
    document.getElementsByClassName("45261")[0].style.display = "none";
    document.getElementsByClassName("45263")[0].style.display = "none";
    document.getElementsByClassName("45262")[0].style.display = "none";
    document.getElementsByClassName("45292")[0].style.display = "none";
  }
}
