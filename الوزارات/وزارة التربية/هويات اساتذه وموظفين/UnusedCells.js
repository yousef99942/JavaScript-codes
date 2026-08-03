{
  if (this.tab_click == "form") {
    var IDs = [
        "71242", //رقم الهوية السابق
        //First Choice
        "66332", //الاسم الاول
        "66333", //الاسم الثاني
        "66334", //الاسم الثالث
        "66336", //اللقب العلمي
        "66345", //الصفة
        "66346", //المركز الدارسي
        "66341", //الاسم الاول
        "66342", //اسم  الاب
        "66343", //اسم الجد
        "66344", //Academic title
        "66347", //Attribute
        "66348", //Study  Center

        //Second Choice
        "66349", //المعلومات الشخصية للموظف
        "66350", //الاسم الاول للموظف
        "66351", //الاسم الثاني للموظف
        "66352", //الاسم الثالث للموظف
        "67767", //الصفة للموظف
        "66355", //مكان العمل
        "66356", //كتابة الاسم الكامل باللغة الانكليزية  للموظف (كما في الجواز )
        "66357", //Employee First Name
        "66412", //Employee Second Name
        "66413", //Employee Third Name
        "67768", //The attribute
        "66416", //Workplace
      ],
      Progs = [
        "nameint", //رقم الهوية السابق
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

        //Second Choice
        "TRHFO", //المعلومات الشخصية للموظف
        "HGHHGGT", //الاسم الاول للموظف
        "JHGCY", //الاسم الثاني للموظف
        "JGYG", //الاسم الثالث للموظف
        "lkehfgijehi", //الصفة للموظف
        "HUWOEFJ", //مكان العمل
        "JGUYFU", //كتابة الاسم الكامل باللغة الانكليزية  للموظف (كما في الجواز )
        "HUWDH", //Employee First Name
        "Father", //Employee Second Name
        "Grandfathe", //Employee Third Name
        "hghghgjg", //The attribute
        "workplace", //Workplace
      ];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }

    if (this.form_data.qdtmhgljr == "تدريسي") {
      document.getElementById("66353").style.visibility = "collapse";
      document.getElementById("66414").style.visibility = "collapse";
    }
  }
}
