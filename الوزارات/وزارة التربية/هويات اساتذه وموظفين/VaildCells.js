{
  //First Choice
  if (this.inputFormField.qdtmhgljr == "تدريسي") {
    var First_Choice = [
        //First Choise
        "hghsl", //الاسم الاول
        "hghsljhdusi", //الاسم الثاني
        "bvcdsretun", //الاسم الثالث
        "hghslkoim", //اللقب العلمي
        "hgfredj", //الصفة
        "hgfderyh", //المركز الدارسي
        "hgfdsru", //الاسم الاول
        "Fathername", //اسم  الاب
        "Grandfathersname", //اسم الجد
        "attribute", //Attribute
        "Center", //Study  Center
      ],
      Locations = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];

    for (var i = 0; i < First_Choice.length; i++) {
      if (
        this.inputFormField[First_Choice[i]] == null ||
        this.inputFormField[First_Choice[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  //Second Choice
  if (this.inputFormField.qdtmhgljr == "موظف") {
    var First_Choice = [
        //Second Choice
        "HGHHGGT", //الاسم الاول للموظف
        "JHGCY", //الاسم الثاني للموظف
        "JGYG", //الاسم الثالث للموظف
        "lkehfgijehi", //الصفة للموظف
        "HUWOEFJ", //مكان العمل
        "HUWDH", //Employee First Name
        "Father", //Employee Second Name
        "Grandfathe", //Employee Third Name
        "hghghgjg", //The attribute
        "workplace", //Workplace
      ],
      Locations = [18, 19, 20, 22, 23, 25, 26, 27, 29, 30];

    for (var i = 0; i < First_Choice.length; i++) {
      if (
        this.inputFormField[First_Choice[i]] == null ||
        this.inputFormField[First_Choice[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.typey == "تجديد") {
    if (
      this.inputFormField["nameint"] == null ||
      this.inputFormField["nameint"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }
}
