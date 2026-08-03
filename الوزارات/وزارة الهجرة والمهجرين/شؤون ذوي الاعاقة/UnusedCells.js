{
  if (this.tab_click == "form") {
    var GroupsID = [
        //group Num 2
        "33984_group", //معلومات الفرد الاول
        //group Num 3
        "33985_group", //معلومات الفرد الثاني
        //group Num 4
        "33986_group", //معلومات الفرد الثالث
        //group Num 5
        "33987_group", //معلومات الفرد الرابع
        //group Num 6
        "33988_group", //معلومات الفرد الخامس
        //group Num 7
        "33989_group", //معلومات الفرد السادس
        //group Num 8
        "33990_group", //معلومات الفرد السابع
        //group Num 9
        "33991_group", //معلومات الفرد الثامن
        //group Num 10
        "33992_group", //معلومات الفرد التاسع
        //group Num 11
        "33993_group", //معلومات الفرد العاشر
        //group Num 12
        "33994_group", //معلومات الفرد الحادي عشر
        //group Num 13
        "33995_group", //معلومات الفرد الثاني عشر
        //group Num 14
        "33996_group", //معلومات الفرد الثالث عشر
        //group Num 15
        "33997_group", //معلومات الفرد الرابع عشر
        //group Num 16
        "33998_group", //معلومات الفرد الخامس عشر
      ],
      Children_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (var i = 0; i < GroupsID.length; i++) {
      if (this.form_data.DisibiltyChildrenNum == Children_Numbers[i]) {
        var Number_Found = i;
        break;
      }
    }

    for (var i = Number_Found + 1; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.visibility = "collapse";
    }
  }
}
