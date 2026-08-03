{
  const date = new Date();
  const month = date.getMonth() + 1;
  switch (month) {
    case 1:
    case 2:
    case 3:
      this.inputFormField.TrainingQuarter = "الاول";
      break;
    case 4:
    case 5:
    case 6:
      this.inputFormField.TrainingQuarter = "الثاني";
      break;
    case 7:
    case 8:
    case 9:
      this.inputFormField.TrainingQuarter = "الثالث";
      break;
    case 10:
    case 11:
    case 12:
      this.inputFormField.TrainingQuarter = "الرابع";
      break;
    default:
      this.inputFormField.TrainingQuarter = "";
  }
  const yearSection = this.inputFormField.TrainingQuarter;
  document.getElementById("51726").classList.add("isDisabled");

  const courses = {
    الاول: [
      "ترقية موظفي الدولة",
      "إدارة ملف النزوح والعودة",
      "التخطيط الاستراتيجي المؤسسي",
      "آلية تسوية السنوات السابقة",
      "المهارات الرقمية والأتمتة الحكومية",
      "رفع المستوى التخطيطي للموظفين",
      "التوعية بالنزاهة ومكافحة الفساد",
      "التوعية بحقوق الإنسان في بيئة العمل",
      "التوعية بالسلامة المهنية",
      //"تبسيط الإجراءات والتحول الرقمي",
      //"إجراءات مكافحة الفساد",
      //"نشر ثقافة التعايش السلمي",
    ],
    الثاني: [
      "ترقية موظفي الدولة",
      "رفع المستوى التخطيطي للموظفين",
      "حوكمة إجراءات العودة الطوعية",
      "التخطيط المالي وإدارة الميزانيات",
      "إدارة المخاطر المؤسسية",
      "أدوات الاتصال والإعلام الرقمي",
      "إدارة الضغوط النفسية في الأزمات",
      "نظم الحوكمة والامتثال والشفافية",
      "آلية إعداد الموازنات",
      "الترجمة الفورية والتتبعية (أساسية)",
      "صياغة الكتب الرسمية",
      "التوعية بدعم الطاقة وتقليل الانبعاثات",
      "التوعية بحقوق الفئات الهشة",
      //"شرح تعليمات تنفيذ العقود الحكومية وضوابط تنفيذها",
      //"تأثير التصحر والجفاف على المجتمع",
      //"تنمية القدرات القانونية للممثلين القانونيين في الترافع أمام المحاكم",
      //"اعداد الحسابات الختامية",
    ],
    الثالث: [
      "ترقية موظفي الدولة",
      "حل النزاعات والتسوية المجتمعية",
      "الابتكار وإدارة التغيير",
      "تمكين النساء والشباب في قطاع الهجرة",
      "الأمن المعلوماتي وحماية البيانات",
      "المشتريات وإدارة العقود والمناقصات",
      "آلية الربط بين التمويل والتخصيص",
      "المهارات الشخصية في القيادة وصنع القرار",
      "التقارير الإدارية والتحليل الإحصائي",
      "رفع المستوى التخطيطي لموظفي الفروع",
      "إدارة الازمات",
      "الترجمة الفورية والتتبعية (متقدمة)",
      "التوعية بالتحول الرقمي",
      "التوعية بالتنوع الثقافي واللغوي",
      "التوعية بالهوية المؤسسية",
      //"تأثير المخدرات وسبل مكافحتها",
      //"التوعية بمخاطر الهجرة غير الشرعية",
      //"إجراءات ارشفة وإتلاف الوثائق",
      //"التعريف بحقوق الانسان وفق الاتفاقات الدولية",
    ],
    الرابع: [
      "ترقية موظفي الدولة",
      "حوكمة الهجرة عبر الحدود",
      "التسويق المؤسسي وتنمية الشراكات",
      "الصحة والسلامة المهنية لمواقع العمل",
      "المفاوضات الدولية وسياسات الهجرة",
      "التدريب على البحث والإحصاء وسياسات البيانات",
      "الإدارة الذكية وحلول التحول الرقمي",
      "إدارة تقييم الأثر للمشاريع الحكومية",
      "آلية العمل على التحول المالي (POS)",
      "صياغة الكتب الرسمية",
      "رفع المستوى التخطيطي لموظفي الفروع",
      "التوعية بالاستجابة الإنسانية",
      "التوعية بالخصوصية وحماية البيانات",
      "التوعية بالشفافية المؤسسية",
      "التوعية بالسلامة النفسية في بيئة العمل",
      //"طبيعة عمل لجان الفتح والتحليل وطرق الاستكمال",
      //"إدارة الازمات والكوارث",
      //"اساسيات في excel,word",
      //"تبسيط الإجراءات والتحول الرقمي",
    ],
  };

  if (courses.hasOwnProperty(yearSection)) {
    this.inputFormField["TrainingName"] = null;
    this.group_of_form[1].fields[1].properties[0].values = [];
    this.group_of_form[1].fields[1].properties[0].values = courses[yearSection];
  }

  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name;
  document.getElementsByName("ThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name;
  document.getElementsByName("FourthName")[0].disabled = true; //الاسم الرابع

  this.inputFormField.PhoneNumber = this.user.phone_num;
  document.getElementsByName("PhoneNumber")[0].disabled = true; //رقم الهاتف

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

  var Fields_IDs = [
    "51611", //اسم القسم
    "51612", //اسم الشعبة
    "51613", //العنوان الوظيفي
    "51614", //الدرجة الوظيفية
  ];

  for (var i = 0; i < Fields_IDs.length; i++) {
    Arabic_Only(Fields_IDs[i]);
  }
}
