{
  if (this.user.phone_num) {
    let Values = [
      "9647811911618", //يوسف احسان
      "9647701453332", //رفاه عبدالله
      "9647712735597", //ليث صبيح
    ];

    //كروبات الاستمارة
    let Groups_ID = [
      "25782", //المحافظة
      "25784", //نوع التشكيل الاب
      "25788", //عنوان التشكيل الاب
      "25792", // البريد الاليكتروني الرسمي *
      "25789", //عدد العاملين في مهام التشكيل التكنلوجية( 10 نقاط لكل موظف)
      "25810", //موقع التشكيل على الخارطة
      "11296_group", //سياسات امن المعلومات
      "11297_group", //نظام ادارة الوثائق الوطني الموحد Seddm
      "11298_group", //نظام صحة الصدور QR
      "11299_group", //البريد الالكتروني
      "11301_group", //البريد الحكومي الوزاري NCMS
      "11302_group", //الخدمات الرقمية
      "12320_group", //التدريب الفعال
      "12451_group", //عمليات الشبكة
    ];

    if (Values.includes(this.user.phone_num)) {
      Groups_ID.forEach(
        (Hiding) => (document.getElementById(Hiding).style.display = "block"),
      );

      document.getElementById("95571").style.display = "none"; //يرجى التاكد من معلومات الدخول
    } else {
      Groups_ID.forEach(
        (Hiding) => (document.getElementById(Hiding).style.display = "none"),
      );
      document.getElementById("95571").style.display = "block"; //يرجى التاكد من معلومات الدخول

      document.getElementById("95571").style.cssText =
        "color: #760000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
    }
  }
}
