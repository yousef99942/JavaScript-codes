{
  if (this.tab_click == "form") {
    var Progs = [
        "oname", //اسم صاحب الاشتراك الحالي
        "nosub", //رقم الاشتراك
      ],
      IDs = [
        "74363", //اسم صاحب الاشتراك الحالي
        "86212", //رقم الاشتراك
      ];

    for (var i = 0; i < Progs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }

    let Groups_ID = [
      "35833_group", //نوع الملك
      "35834_group", //معلومات الملك الحكومي
    ];

    Groups_ID.forEach((groupId) => {
      document.getElementById(groupId).style.display = "none";
    });
  }
}
