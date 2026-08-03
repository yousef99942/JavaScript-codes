{
  if (this.tab_click == "form") {
    var GroupsID = [
      "33368_group", //اول شركة
      "33386_group", //ثاني شركة
      "33807_group", //ثالث شركة
      "33808_group", //رابع شركة
      "33809_group", //خامس شركة
      "33811_group", //سادس شركة
    ];

    if (this.form_data.front == 1) {
      for (var i = 1; i < GroupsID.length; i++) {
        document.getElementById(GroupsID[i]).style.visibility = "none";
      }
    }

    if (this.form_data.front == 2) {
      for (var i = 2; i < GroupsID.length; i++) {
        document.getElementById(GroupsID[i]).style.visibility = "none";
      }
    }

    if (this.form_data.front == 3) {
      for (var i = 3; i < GroupsID.length; i++) {
        document.getElementById(GroupsID[i]).style.visibility = "none";
      }
    }

    if (this.form_data.front == 4) {
      for (var i = 4; i < GroupsID.length; i++) {
        document.getElementById(GroupsID[i]).style.visibility = "none";
      }
    }

    if (this.form_data.front == 5) {
      for (var i = 5; i < GroupsID.length; i++) {
        document.getElementById(GroupsID[i]).style.visibility = "none";
      }
    }
  }
}
