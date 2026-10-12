{
  if (this.tab_click == "form") {
    if (this.form_data.testrrr != "مواطن") {
      document.getElementById("35643_group").style.visibility = "collapse"; //مجموعة
    }

    if (this.form_data.testrrr != "مزود خارجي") {
      document.getElementById("35644_group").style.visibility = "collapse";
    }

    if (
      this.form_data.testrrr != "شريك" ||
      this.form_data.testrrr != "مزود خارجي"
    ) {
      document.getElementById("35727_group").style.visibility = "collapse";
    }

    if (this.form_data.testrrr != "شريك") {
      document.getElementById("96822").style.visibility = "collapse"; //سلكتر الشريك
    }

    if (
      this.form_data.testrrr != "مزود خارجي" &&
      this.form_data.testrrr != "شريك"
    ) {
      document.getElementById("35722_group").style.visibility = "collapse"; //سمعة المؤسسة
    }

    if (this.form_data.testrrr != "مؤسسات حكومية") {
      document.getElementById("35666_group").style.visibility = "collapse"; //مجموعة مؤسسات حكومية
    }

    if (this.form_data.testrrr != "جهات مانحة") {
      document.getElementById("35667_group").style.visibility = "collapse"; //مجموعة جهات مانحة
    }

    let Values = [
      {
        Field_Prog: "sha", //يتم مشاركتكم في تصميم الخدمات المقدمة لكم من مؤوسستنا
        Field_ID: "96335", //يتم مشاركتكم في تصميم الخدمات المقدمة لكم من مؤوسستنا
      },
      {
        Field_Prog: "advise", //تقوم مؤسستنا بتقديم المشورة والدعم للأنشطة التي تقومون بها
        Field_ID: "96337", //تقوم مؤسستنا بتقديم المشورة والدعم للأنشطة التي تقومون بها
      },
      {
        Field_Prog: "exe", //تم تنفيذ التحسينات حسب ملاحظاتكم (التغذية الراجعة ) الناتجة عن المشاركة
        Field_ID: "96344", //تم تنفيذ التحسينات حسب ملاحظاتكم (التغذية الراجعة ) الناتجة عن المشاركة
      },
      {
        Field_Prog: "culture", //لدى مؤسساتنا ثقافة مؤسسية لتعميق فاعلية التعاون
        Field_ID: "96345", //لدى مؤسساتنا ثقافة مؤسسية لتعميق فاعلية التعاون
      },
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
