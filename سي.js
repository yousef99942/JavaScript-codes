{
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الهمزة + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي
        }
      });
    }
  }

  //* الخاص بالحقول داخل المصفوفة IDيتم اضافة الـ
  //* التي يتم اضافتها داخل المصفوفة يعتمد على عدد الحقول المطلوب اخفائها IDعدد الـ
  var Fields_ID = [
    "94546", //* الحقل الاسم الاول ID
    "94547", //* الحقل الاسم الثاني ID
    "94548", //* الاسم الثالثالثالث ID
    "94549", //* الحقل الاسم الرابع ID
    "94577", //* الحقل اللقب ID
    "94578", //* الحقل محل ولادة المتقدم ID
    "94699", //* الحقل اسم الام ID
    "95453", //* الحقل اسم اب الام ID
    "95454", //* الحقل اسم جد الام ID
    "94701", //* الحقل الاسم الثلاثي للزوجة ID
    "94704", //* الحقل الحي - المنطقة ID
    "94705", //* الحقل محل اصدار بطاقة السكن ID
  ];

  //! لا يحتاج تغيير في ما يخص استدعاء الدالة التي سوف تقوم بغلق الحقل على الاحرف المطلوبة
  Arabic_Only(Fields_ID);

  function English_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;

        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الحروف الإنكليزية + الأرقام
        if (!/^[a-zA-Z0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = ["94711"];

  English_Numbers_Only(Fields_ID);
}
