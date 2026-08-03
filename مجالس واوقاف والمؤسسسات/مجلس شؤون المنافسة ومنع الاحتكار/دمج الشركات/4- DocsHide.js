{
  var GroupsID = [
    "33388_group", //اول شركة
    "33873_group", //ثاني شركة
    "33874_group", //ثالث شركة
    "33875_group", //رابع شركة
    "33876_group", //خامس شركة
    "33878_group", //سادس شركة
  ];

  if (this.form_data.front == 1) {
    for (var i = 1; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "none";
      //document.getElementsByClassName(GroupsID[i])[0].style.display = "none";
    }
  } else if (this.form_data.front == 2) {
    for (var i = 2; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "none";
    }
  } else if (this.form_data.front == 3) {
    for (var i = 3; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "none";
    }
  } else if (this.form_data.front == 4) {
    for (var i = 4; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "none";
    }
  } else if (this.form_data.front == 5) {
    for (var i = 5; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "none";
    }
  } else {
    for (var i = 0; i < GroupsID.length; i++) {
      document.getElementById(GroupsID[i]).style.display = "block";
    }
  }
}
