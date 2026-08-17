{
  document.getElementById("34600_group").style.display = "none";
  document.getElementById("34656_group").style.display = "none";
  document.getElementById("34655_group").style.display = "none";

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

  let Fields_ID = [
    //معلومات الشركة
    "73028", //اسم صاحب الشركة
    //عنوان الشركة
    "73038", //الاسم الاول للوكيل
    "93901", //الاسم الثاني للوكيل
    "93902", //الاسم الثالث للوكيل
    "73033", //الحي
    //المعلومات الاساسية
    "72622", //اسم الشركة
    "72624", //اسم مقدم الطلب / المخول
  ];

  Arabic_Only(["73028", "73038", "73033", "72622", "72624"]);
}
