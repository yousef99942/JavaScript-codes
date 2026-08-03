{
  this.inputFormField.txtphone = this.user.phone_num;
  document.getElementsByName("txtphone")[0].disabled = true; //رقم الهاتف

  //استمارة المهام الاستشارية السلتر مال نوع المهمة الاستشارية
  this.group_of_form[1].fields[0].properties[0].values = [
    "اعداد وتحديث الوصف الوظيفين للعناوين الوظيفية",
    "الوصف الوظيفي للمناصب الادارية",
    "اعداد الهياكل التنظيمية",
    "اعداد هياكل وظيفية",
    "اعداد النظام الداخلي",
    "اعداد دليل اجراءات العمل",
    "ISO 9001:2015 تأهيل المؤسسات وفق المواصفة القياسية الدولية",
    "تبسيط الاجراءات الحكومية",
    "استشارات التدريب",
    "استشارات تقنية المعلومات",
    "استشارات البحث والتطوير",
  ];

  //استمارة المهام الاستشارية لاخفاء النقاط الموجودة
  var Labels_IDs = [
    "64483",
    "64484",
    "64485",
    "64486",
    "64487",
    "64488",
    "64489",
    "64567",
    "64571",
  ];
  Labels_IDs.forEach(function (id) {
    document.getElementById(id).style.display = "none";
  });

  var Job_Title_Label = "68800"; //العنوان الوظيفي
  var Labels_IDs2 = [
      "68576",
      "68577",
      "68579",
      "68580",
      "68582",
      "68584",
      "68585",
      "68586",
      "68587",
      "68590",
      "68591",
      "68592",
      "68594",
      "68595",
      "68596",
      "68597",
      "68598",
      "68599",
      "68600",
      "68615",
      "68616",
      "68617",
      "68619",
      "68620",
      "68621",
      "68624",
      "68625",
      "68622",
      "68643",
      "68648",
    ],
    Notes_ID = ["68626", "68649"],
    Text_values = [
      "20px", //حجم الخط
      "bold", //نمط الخط
      "5px", //المسافه من اسفل واعلى
      "center", //مكان النص
    ];

  document.getElementById(Job_Title_Label).style.fontSize = Text_values[0];
  document.getElementById(Job_Title_Label).style.fontWeight = Text_values[1];
  document.getElementById(Job_Title_Label).style.color = "#ff0303ff";
  document.getElementById(Job_Title_Label).style.paddingBottom = Text_values[2];
  document.getElementById(Job_Title_Label).style.paddingTop = "10px";
  document.getElementById(Job_Title_Label).style.textAlign = Text_values[3];

  for (var i = 0; i < Labels_IDs2.length; i++) {
    document.getElementById(Labels_IDs2[i]).style.display = "none";
    document.getElementById(Labels_IDs2[i]).style.fontSize = Text_values[0];
    document.getElementById(Labels_IDs2[i]).style.fontWeight = Text_values[1];
    document.getElementById(Labels_IDs2[i]).style.paddingBottom =
      Text_values[2];
    document.getElementById(Labels_IDs2[i]).style.paddingTop = Text_values[2];
    document.getElementById(Labels_IDs2[i]).style.textAlign = Text_values[3];
  }
  for (var j = 0; j < Notes_ID.length; j++) {
    document.getElementById(Notes_ID[j]).style.display = "none";
    document.getElementById(Notes_ID[j]).style.fontSize = Text_values[0];
    document.getElementById(Notes_ID[j]).style.fontWeight = Text_values[1];
    document.getElementById(Notes_ID[j]).style.paddingBottom = Text_values[2];
    document.getElementById(Notes_ID[j]).style.paddingTop = Text_values[2];
    document.getElementById(Notes_ID[j]).style.textAlign = Text_values[3];
  }

  document.getElementById("33662_group").style.display = "none";
  document.getElementById("33664_group").style.display = "none";
  this.inputFormField["txtother"] = null;
  this.inputFormField["Subspecialty"] = null;
  this.inputFormField["txtcons"] = null;
  this.inputFormField["ddlservices"] = null;

  /////////////////////////////////////////////////////////////////////////////////////////////////
  //منع الانكليزي والارقام والرموز
  function Arabic_Only(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأحرف العربية + الهمزة + المسافة
      if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير عربي
      }
    });
  }

  Arabic_Only("64261"); //اسم الدائرة

  //الاسم الثلاثي
  Arabic_Only("64263");
  Arabic_Only("64264");
  Arabic_Only("64267");
}
