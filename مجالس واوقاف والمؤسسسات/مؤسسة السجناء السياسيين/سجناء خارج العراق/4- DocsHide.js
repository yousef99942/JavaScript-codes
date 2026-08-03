{
  var Docs_ID = [
    "46846", //وثيقة الصليب الاحمر
    "46847", //وثيقة الامم المتحدة
    "46848", //وثيقة العودة الطوعية ( المنفيست )
    "46849", //قرار قضائي مصادق من وزارة خارجية الدولة المحتجز لديها و مصادق و مترجم للفة العربية
    "47046", //وثيقة الكارت الاخضر او الابيض
    "47047", //الرقم التسلسلي ( سيريل نمبر )
    "47048", //تصريح خروج الى الدولة المحتجز لديها
    "47049", //وثيقة دولية اخرى لم تذكر
  ];

  if (this.form_data.document == "نعم") {
    var CheckList_Values = [
      "وثيقة الصليب الاحمر",
      "وثيقة الامم المتحدة",
      "وثيقة العودة الطوعية ( المنفيست )",
      "قرار قضائي مصادق من وزارة خارجية الدولة المحتجز لديها و مصادق و مترجم للفة العربية",
      "وثيقة الكارت الاخضر او الابيض",
      "الرقم التسلسلي (Serial number)",
      "تصريح خروج الى الدولة المحتجز لديها",
      "وثيقة دولية اخرى لم تذكر",
    ];
    var Locations = [];
    var Selected_Values = this.form_data.doc;
    var index = 0;

    if (Selected_Values.length != 0) {
      for (var i = 0; i < CheckList_Values.length; i++) {
        if (Selected_Values.includes(CheckList_Values[i])) {
          Locations[index] = i;
          index += 1;
        }
      }

      for (var i = 0; i < Docs_ID.length; i++) {
        if (!Locations.includes(i)) {
          console.log("It worked");
          document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
        }
      }
    }
  } else {
    for (var i = 0; i < Docs_ID.length; i++) {
      document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
    }
  }

  if (this.form_data.nameform == "اصيل") {
    document.getElementsByClassName("47057")[0].style.display = "none"; //القسام الشرعي
    document.getElementsByClassName("47056")[0].style.display = "none"; //الوكالة
  }

  if (this.form_data.nameform == "وريث") {
    document.getElementsByClassName("47056")[0].style.display = "none"; //الوكالة
  }

  if (this.form_data.nameform == "وكيل") {
    document.getElementsByClassName("47057")[0].style.display = "none"; //القسام الشرعي
  }
}
