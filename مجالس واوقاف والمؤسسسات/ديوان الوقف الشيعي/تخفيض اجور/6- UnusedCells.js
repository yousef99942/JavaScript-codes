{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "relation", Field_ID: "93392" }, //صلة قرابة قناة الرعاية
      { Field_Prog: "topranking", Field_ID: "93450" }, //تسلسل الطالب من الثلاثة الاوائل (قناة الاوائل)
      { Field_Prog: "rate", Field_ID: "93453" }, //نسبة عجز الطالب % (قناة ذوي الاعاقة)
      { Field_Prog: "partnum", Field_ID: "93465" }, //عدد الاجزاء المحفوظة
      { Field_Prog: "exception", Field_ID: "93391" }, //الاقسام المشمولة بالتخفيض لقناة منتسبي الحشد ورجال الدين
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });

    if (this.form_data.requesttype != "الاقارب") {
      document.getElementById("35511_group").style.display = "none";
    }

    if (this.form_data.requesttype != "ممن ذويهم لديهم عجز بنسبة 70%") {
      document.getElementById("35513_group").style.display = "none";
    }

    if (this.form_data.requesttype != "ابناء الاساتذة والموظفين وابناؤهم") {
      document.getElementById("35514_group").style.display = "none";
    }
  }
}
