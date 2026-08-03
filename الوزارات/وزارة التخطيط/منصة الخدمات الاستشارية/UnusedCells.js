{
  if (this.tab_click == "form") {
    if (this.form_data.ddlservice == "طلب مهمة استشارية") {
      if (this.form_data.txtother == null) {
        document.getElementById(64490).style.visibility = "collapse";
      }
      if (this.form_data.Subspecialty == null) {
        document.getElementById(64371).style.visibility = "collapse";
      }
      if (this.form_data.ddlservices == null) {
        document.getElementById(64277).style.visibility = "collapse";
      }
      if (this.form_data.txtcons == null) {
        document.getElementById(64567).style.visibility = "collapse";
      }
      document.getElementById(64483).style.visibility = "collapse";
      document.getElementById(64484).style.visibility = "collapse";
      document.getElementById(64485).style.visibility = "collapse";
      document.getElementById(64486).style.visibility = "collapse";
      document.getElementById(64487).style.visibility = "collapse";
      document.getElementById(64488).style.visibility = "collapse";
      document.getElementById(64489).style.visibility = "collapse";
      document.getElementById(64571).style.visibility = "collapse";

      document.querySelectorAll("fieldset").forEach((fieldset) => {
        const legend = fieldset.querySelector("legend");
        if (
          legend &&
          legend.textContent.trim() === "بيان الرأي والاستفسار/عنوان وظيفي"
        ) {
          fieldset.remove();
        }
      });
    }
    if (this.form_data.ddlservice == "بيان رأي / أستفسار / عنوان وظيفي") {
      if (this.form_data.txtother == null) {
        document.getElementById(64490).style.visibility = "collapse";
      }
      if (this.form_data.Subspecialty == null) {
        document.getElementById(64371).style.visibility = "collapse";
      }
      if (this.form_data.ddlservices == null) {
        document.getElementById(64277).style.visibility = "collapse";
      }
      if (this.form_data.txtcons == null) {
        document.getElementById(64567).style.visibility = "collapse";
      }
      document.getElementById(64483).style.visibility = "collapse";
      document.getElementById(64484).style.visibility = "collapse";
      document.getElementById(64485).style.visibility = "collapse";
      document.getElementById(64486).style.visibility = "collapse";
      document.getElementById(64487).style.visibility = "collapse";
      document.getElementById(64488).style.visibility = "collapse";
      document.getElementById(64489).style.visibility = "collapse";
      document.getElementById(64571).style.visibility = "collapse";
      const container = document.getElementById("33662_group");
      const legend = container?.querySelector("legend");
      if (legend && legend.textContent.trim() === "المهام الأستشارية") {
        container.remove();
      }
    }

    ///////////////////////////////////////////////////////
    var event = this.form_data.privet?.trim(); // remove extra spaces
    // Grouped categories with their label index and optional notes
    const config = {
      "علوم الفيزياء": { index: 0 },
      "علوم الكيمياء": { index: 1 },
      "علوم الحياة": { index: 2 },
      "علوم الارض": { index: 3 },
      "علوم الحاسبات": { index: 4 },
      "ادارة اعمال": { index: 5, notes: [0] },
      "ادارة عامة ادارة واقتصاد": { index: 6 },
      احصاء: { index: 7 },
      اقتصاد: { index: 8, notes: [0] },
      "هندسة ميكانيك": { index: 9 },
      "هندسة كهرباء": { index: 9 },
      "هندسة مدني": { index: 9 },
      "هندسة حاسبات": { index: 9 },
      "هندسة الليزر والالكترونيات البصرية": { index: 9 },
      "هندسة مساحة": { index: 9 },
      "هندسة طرق وجسور": { index: 9 },
      "هندسة معماري": { index: 10 },
      لغات: { index: 11 },
      "اداب معلومات ومكتبات": { index: 12 },
      "اداب فلسفة": { index: 13 },
      "اداب علم النفس": { index: 13 },
      "اداب جغرافية": { index: 13 },
      "اداب تاريخ": { index: 13 },
      "اداب اللغة العربية": { index: 14 },
      "اداب اجتماع": { index: 15 },
      "تربية اللغة الانكليزية": { index: 16 },
      "تربية جغرافية": { index: 16 },
      "تربية تاريخ": { index: 16 },
      "تربية لغة عربية": { index: 16 },
      "تربية علوم فيزياء": { index: 16 },
      "تربية علوم كيمياء": { index: 16 },
      "تربية رياضيات": { index: 16 },
      "تربية علوم حاسبات": { index: 16 },
      "تربية اسلامية": { index: 16 },
      "تربية علوم الحياة": { index: 16 },
      "تربية فنية": { index: 16 },
      "تربية بنات علوم حياة": { index: 16 },
      "التربية البدنية وعلوم الرياضة": { index: 16 },
      "تربية رياض الأطفال": { index: 16 },
      "علوم اسلاميةالشريعة": { index: 17, notes: [1] },
      "علوم اسلامية فكر اسلامي": { index: 17, notes: [1] },
      "علوم اسلامية علوم القران والحديث": { index: 17, notes: [1] },
      "علوم اسلامية الدراسات الاسلامية وحوار الاديان": {
        index: 17,
        notes: [1],
      },
      "علوم اسلامية فلسفة": { index: 17, notes: [1] },
      المسرح: { index: 18 },
      التمثيل: { index: 18 },
      "قسم الخط العربي والزخرفة": { index: 18 },
      تصميم: { index: 19 },
      "سمعية ومرئية": { index: 20 },
      سينما: { index: 20 },
      "إذاعة وتلفزيون": { index: 20 },
      اخراج: { index: 20 },
      "قسم سمعية ومرئية": { index: 26 },
      "فرع الاخراج": { index: 26 },
      "فنون تشكيلية / رسم": { index: 21 },
      "معهد ادارة مكتبات": { index: 22 },
      "المعهد التقني الاداري إدارة المخازن": { index: 22 },
      "المعهد التقني السياحة والفندقة": { index: 22 },
      "المعهد التقني ادارة قانونية": { index: 22 },
      "المعهد التقني ادارة المواد": { index: 22 },
      "المعهد التقني ادارة المكتب": { index: 22 },
      "اعدادية الفرع التجاري": { index: 22 },
      "المعهد التقني احصاء": { index: 23 },
      "المعهد التقني محاسبة": { index: 24 },
      "المعهد التقني قسم الميكانيك": { index: 25 },
      "المعهد التقني التقنيات الميكانيكية": { index: 25 },
      "المعهد التقني ميكانيك": { index: 25 },
      "المعهد التقني انتاج ومعادن": { index: 25 },
      "المعهد التقني تقنيات الكترونية": { index: 25 },
      "المعهد التقني تقنيات كهربائية": { index: 25 },
      "المعهد التقني كهرباء": { index: 25 },
      "المعهد التقني الكترونيك": { index: 25 },
      "المعهد التقني مكائن ومعدات": { index: 25 },
      "المعهد التقني تبريد وتكييف": { index: 25 },
      "الاعدادية المهنية الفنون التطبيقية": { index: 27 },
      "مهني زراعة": { index: 28 },
    };

    const Labels_IDs2 = [
      "68576",
      "68577",
      "68579",
      "68580",
      "68582",
      "68625",
      "68584",
      "68587",
      "68643",
      "68585",
      "68586",
      "68590",
      "68594",
      "68595",
      "68596",
      "68597",
      "68592",
      "68648",
      "68598",
      "68599",
      "68600",
      "68615",
      "68616",
      "68617",
      "68619",
      "68620",
      "68621",
      "68622",
      "68624",
    ];

    const Notes_ID = ["68626", "68649"];

    // Show selected if exists
    const sel = config[event];

    if (sel) {
      for (var i = 0; i < Labels_IDs2.length; i++) {
        if (i != sel.index) {
          document.getElementById(Labels_IDs2[i]).style.visibility = "collapse";
        }
      }
    }

    if (event != "ادارة اعمال" || event != "اقتصاد") {
      document.getElementById("68626").style.visibility = "collapse";
    }

    if (
      event != "علوم اسلاميةالشريعة" ||
      event != "علوم اسلامية فكر اسلامي" ||
      event != "علوم اسلامية علوم القران والحديث" ||
      event != "علوم اسلامية الدراسات الاسلامية وحوار الاديان" ||
      event != "علوم اسلامية فلسفة"
    ) {
      document.getElementById("68649").style.visibility = "collapse";
    }

    if (this.form_data.public != "علوم سياسية") {
      document.getElementById("68591").style.visibility = "collapse";
    }

    if (this.form_data.public == "اخرى") {
      for (var i = 0; i < Labels_IDs2.length; i++) {
        document.getElementById(Labels_IDs2[i]).style.visibility = "collapse";
      }

      for (var i = 0; i < Notes_ID.length; i++) {
        document.getElementById(Notes_ID[i]).style.visibility = "collapse";
      }

      document.getElementById("68800").style.visibility = "collapse";
      document.getElementById("68565").style.visibility = "collapse";
    }
  }
}
