{
  TheHide(event){
    this.inputFormField["txtother"] = null;
    this.inputFormField["Subspecialty"] = null;
    this.inputFormField["txtcons"] = null;
    this.inputFormField["ddlservices"] = null;
    if (event == "طلب مهمة استشارية") {
      document.getElementById("33662_group").style.display = "block";
      document.getElementById("33664_group").style.display = "none";
    }else if(event=="بيان رأي / أستفسار / عنوان وظيفي"){
      document.getElementById("33664_group").style.display = "block";
      document.getElementById("33662_group").style.display = "none";
    }else{
      document.getElementById("33662_group").style.display = "none";
      document.getElementById("33664_group").style.display = "none";
    }
  },

  TheCondition(event2){
    const allIds = ["64483","64484","64485","64486","64487","64488","64489","64567","64571"];

    // اخفاء الكل
    allIds.forEach(id => document.getElementById(id).style.display = "none");

    let toShow = [];

    if (event2 === "اعداد وتحديث الوصف الوظيفين للعناوين الوظيفية")
      toShow = ["64483"];
    else if (event2 === "الوصف الوظيفي للمناصب الادارية")
      toShow = ["64484"];
    else if (event2 === "اعداد الهياكل التنظيمية")
      toShow = ["64485"];
    else if (event2 === "اعداد هياكل وظيفية")
      toShow = ["64486"];
    else if (event2 === "اعداد النظام الداخلي")
      toShow = ["64487"];
    else if (event2 == "اعداد دليل اجراءات العمل" || event2 === "ISO 9001:2015 تأهيل المؤسسات وفق المواصفة القياسية الدولية")
      toShow = ["64488"];
    else if (event2 === "تبسيط الاجراءات الحكومية")
      toShow = ["64489"];
    else if (["استشارات التدريب","استشارات تقنية المعلومات","استشارات البحث والتطوير"].includes(event2))
      toShow = ["64567","64571"];
    else
      allIds.forEach(id => document.getElementById(id).style.display = "none");

    // اظهار العناصر المحددة
    toShow.forEach(id => document.getElementById(id).style.display = "block");
  },

  FirstHide(event){
    this.inputFormField["public"] = null;
    if(event == "اعدادية"){
      document.getElementById("68556").style.display = "block";
      this.group_of_form[2].fields[1].properties[0].values = ["علمي / ادبي", "التجارة", "الاعدادية المهنية", "مهني", "اخرى",];
    }else if(event == "دبلوم"){
      document.getElementById("68556").style.display = "block";
      this.group_of_form[2].fields[1].properties[0].values = ["معهد ادارة", "المعهد التقني الإداري", "دبلوم التقني", "المعهد التقني",
        "معهد الفنون الجميلة", "اخرى",];
    }else if(event == "بكالوريوس"){
      document.getElementById("68556").style.display = "block";
      this.group_of_form[2].fields[1].properties[0].values = ["علوم", "ادارة واقتصاد", "هندسة", "اداب", "علوم سياسية", "تربية", "علوم اسلامية",
        "كلية الفنون الجميلة", "اخرى",];
    }else{
      document.getElementById("68556").style.display = "none";
      this.group_of_form[2].fields[1].properties[0].values = [];
    }
  },

  SecondHide(event) {
    const selectedValues = [
      "علوم", "ادارة واقتصاد", "هندسة", "اداب", "تربية", "علوم اسلامية", "كلية الفنون الجميلة", "معهد ادارة", "المعهد التقني الإداري", 
      "دبلوم التقني", "المعهد التقني", "معهد الفنون الجميلة", "التجارة", "الاعدادية المهنية", "مهني",
    ];

    const values = [
      ["علوم الفيزياء", "علوم الكيمياء", "علوم الحياة", "علوم الارض", "علوم الحاسبات"],
      ["ادارة اعمال", "ادارة عامة ادارة واقتصاد", "احصاء", "اقتصاد"],
      ["هندسة ميكانيك","هندسة كهرباء","هندسة مدني","هندسة حاسبات","هندسة الليزر والالكترونيات البصرية","هندسة مساحة","هندسة طرق وجسور","هندسة معماري"],
      ["لغات","اداب معلومات ومكتبات","اداب فلسفة","اداب علم النفس","اداب جغرافية","اداب تاريخ","اداب اللغة العربية","اداب اجتماع"],
      ["تربية اللغة الانكليزية","تربية جغرافية","تربية تاريخ","تربية لغة عربية","تربية علوم فيزياء","تربية علوم كيمياء","تربية رياضيات","تربية علوم حاسبات","تربية اسلامية","تربية علوم الحياة","تربية فنية","تربية بنات علوم حياة","التربية البدنية وعلوم الرياضة","تربية رياض الأطفال"],
      ["علوم اسلاميةالشريعة","علوم اسلامية فكر اسلامي","علوم اسلامية علوم القران والحديث","علوم اسلامية الدراسات الاسلامية وحوار الاديان","علوم اسلامية فلسفة"],
      ["المسرح","التمثيل","تصميم","سمعية ومرئية","سينما","إذاعة وتلفزيون","اخراج","قسم الخط العربي والزخرفة","فنون تشكيلية / رسم"],
      ["معهد ادارة مكتبات"],
      ["المعهد التقني الاداري إدارة المخازن"],
      ["المعهد التقني احصاء"],
      ["المعهد التقني السياحة والفندقة","المعهد التقني ادارة قانونية","المعهد التقني ادارة المواد","المعهد التقني ادارة المكتب","المعهد التقني محاسبة","المعهد التقني قسم الميكانيك","المعهد التقني التقنيات الميكانيكية","المعهد التقني ميكانيك","المعهد التقني انتاج ومعادن","المعهد التقني تقنيات الكترونية","المعهد التقني تقنيات كهربائية","المعهد التقني كهرباء","المعهد التقني الكترونيك","المعهد التقني مكائن ومعدات","المعهد التقني تبريد وتكييف"],
      ["قسم سمعية ومرئية","فرع الاخراج"],
      ["اعدادية الفرع التجاري"],
      ["الاعدادية المهنية الفنون التطبيقية"],
      ["مهني زراعة"]
    ];

    // All fields to hide by default
    const hideIds = ["68619","68591","68565","64490","64371"];
    hideIds.forEach(id => document.getElementById(id).style.display = "none");

    // Clear form fields
    this.inputFormField["txtother"] = null;
    this.inputFormField["Subspecialty"] = null;
    this.inputFormField["privet"] = null;

    if(event === "علمي / ادبي") {
      document.getElementById("68800").style.display = "block";
      document.getElementById("68619").style.display = "block"; // كاتب د 8
    } else if(event === "علوم سياسية") {
      document.getElementById("68800").style.display = "block";
      document.getElementById("68591").style.display = "block"; // معاون باحث سياسي
    } else if(event === "اخرى") {
      document.getElementById("68800").style.display = "none";
      document.getElementById("64490").style.display = "block"; // حقل التخصص العام
      document.getElementById("64371").style.display = "block"; // حقل التخصص الدقيق
    } else if(event) {
      // For all other options, populate dropdown
      document.getElementById("68800").style.display = "none";
      document.getElementById("68565").style.display = "block"; // التخصص الدقيق سلكت
      for(let i = 0; i < selectedValues.length; i++){
        if(selectedValues[i] === event){
          this.group_of_form[2].fields[2].properties[0].values = values[i];
          break;
        }
      }
    }
  },


  ThirdHide(event) {
    event = event?.trim(); // remove extra spaces
    // Grouped categories with their label index and optional notes
    const config = {
      "علوم الفيزياء": { index: 0 }, "علوم الكيمياء": { index: 1 }, "علوم الحياة": { index: 2 },
      "علوم الارض": { index: 3 }, "علوم الحاسبات": { index: 4 },
      "ادارة اعمال": { index: 5, notes: [0] }, "ادارة عامة ادارة واقتصاد": { index: 6 },
      "احصاء": { index: 7 }, "اقتصاد": { index: 8, notes: [0] },
      "هندسة ميكانيك": { index: 9 }, "هندسة كهرباء": { index: 9 }, "هندسة مدني": { index: 9 },
      "هندسة حاسبات": { index: 9 }, "هندسة الليزر والالكترونيات البصرية": { index: 9 },
      "هندسة مساحة": { index: 9 }, "هندسة طرق وجسور": { index: 9 },
      "هندسة معماري": { index: 10 },
      "لغات": { index: 11 }, "اداب معلومات ومكتبات": { index: 12 },
      "اداب فلسفة": { index: 13 }, "اداب علم النفس": { index: 13 }, "اداب جغرافية": { index: 13 }, "اداب تاريخ": { index: 13 },
      "اداب اللغة العربية": { index: 14 }, "اداب اجتماع": { index: 15 },
      "تربية اللغة الانكليزية": { index: 16 }, "تربية جغرافية": { index: 16 }, "تربية تاريخ": { index: 16 },
      "تربية لغة عربية": { index: 16 }, "تربية علوم فيزياء": { index: 16 }, "تربية علوم كيمياء": { index: 16 },
      "تربية رياضيات": { index: 16 }, "تربية علوم حاسبات": { index: 16 }, "تربية اسلامية": { index: 16 },
      "تربية علوم الحياة": { index: 16 }, "تربية فنية": { index: 16 }, "تربية بنات علوم حياة": { index: 16 },
      "التربية البدنية وعلوم الرياضة": { index: 16 }, "تربية رياض الأطفال": { index: 16 },
      "علوم اسلاميةالشريعة": { index: 17, notes: [1] }, "علوم اسلامية فكر اسلامي": { index: 17, notes: [1] },
      "علوم اسلامية علوم القران والحديث": { index: 17, notes: [1] },
      "علوم اسلامية الدراسات الاسلامية وحوار الاديان": { index: 17, notes: [1] },
      "علوم اسلامية فلسفة": { index: 17, notes: [1] },
      "المسرح": { index: 18 }, "التمثيل": { index: 18 }, "قسم الخط العربي والزخرفة": { index: 18 },
      "تصميم": { index: 19 },
      "سمعية ومرئية": { index: 20 }, "سينما": { index: 20 }, "إذاعة وتلفزيون": { index: 20 },
      "اخراج": { index: 20 }, "قسم سمعية ومرئية": { index: 26 }, "فرع الاخراج": { index: 26 },
      "فنون تشكيلية / رسم": { index: 21 },
      "معهد ادارة مكتبات": { index: 22 }, "المعهد التقني الاداري إدارة المخازن": { index: 22 },
      "المعهد التقني السياحة والفندقة": { index: 22 }, "المعهد التقني ادارة قانونية": { index: 22 },
      "المعهد التقني ادارة المواد": { index: 22 }, "المعهد التقني ادارة المكتب": { index: 22 },
      "اعدادية الفرع التجاري": { index: 22 },
      "المعهد التقني احصاء": { index: 23 }, "المعهد التقني محاسبة": { index: 24 },
      "المعهد التقني قسم الميكانيك": { index: 25 }, "المعهد التقني التقنيات الميكانيكية": { index: 25 },
      "المعهد التقني ميكانيك": { index: 25 }, "المعهد التقني انتاج ومعادن": { index: 25 },
      "المعهد التقني تقنيات الكترونية": { index: 25 }, "المعهد التقني تقنيات كهربائية": { index: 25 },
      "المعهد التقني كهرباء": { index: 25 }, "المعهد التقني الكترونيك": { index: 25 },
      "المعهد التقني مكائن ومعدات": { index: 25 }, "المعهد التقني تبريد وتكييف": { index: 25 },
      "الاعدادية المهنية الفنون التطبيقية": { index: 27 },
      "مهني زراعة": { index: 28 }
    };

    const Labels_IDs2 = [
      "68576","68577","68579","68580","68582","68625","68584","68587","68643",
      "68585","68586","68590","68594","68595","68596","68597","68592","68648",
      "68598","68599","68600","68615","68616","68617","68619","68620","68621","68622","68624"
    ];

    const Notes_ID = ["68626","68649"];

    // Hide everything first
    Labels_IDs2.forEach(id => document.getElementById(id).style.display = "none");
    Notes_ID.forEach(id => document.getElementById(id).style.display = "none");
    document.getElementById("68800").style.display = "none";

    // Show selected if exists
    const sel = config[event];
    if(sel){
      document.getElementById("68800").style.display = "block";
      document.getElementById(Labels_IDs2[sel.index]).style.display = "block";
      sel.notes?.forEach(i => document.getElementById(Notes_ID[i]).style.display = "block");
    }
  },
}