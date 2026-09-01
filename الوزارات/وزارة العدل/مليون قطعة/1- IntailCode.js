{
  //----------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstnmae = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstnmae")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.founame = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("founame")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonnumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonnumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------
  //اخفاء مجاميع
  document.getElementById("35459_group").style.display = "none"; //ادخال قيود

  //----------------------------------------------------------------------------------------
  if (event) {
    /*
        Phone_Number رقم هاتف الموظف
        Governorate المحافظة
        Dept_Name اسم المديرية
        Sub_Dept_Name اسم الشعبه
    */
    let Values = [
      {
        Phone_Number: "9647703285050",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري العامة",
        Sub_Dept_Name: "شعبة 1",
      }, //حيدر محمد
      {
        Phone_Number: "9647748962152",
        Governorate: "بغداد",
        Dept_Name: "دائرة  التسجيل العقاري العامة",
        Sub_Dept_Name: "شعبة البرامجيات",
      }, //دعاء غازي
      {
        Phone_Number: "9647709941547",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري ",
        Sub_Dept_Name: "شعبة 1",
      }, //محمد غسان
      {
        Phone_Number: "9647811911618",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري ",
        Sub_Dept_Name: "شعبة 1",
      }, //يوسف
      {
        Phone_Number: "9647707843772",
        Governorate: "بغداد",
        Dept_Name: "التسجيل العقاري العامة",
        Sub_Dept_Name: "العامة",
      },//فاطمة سلمان
      {
        Phone_Number: "9647827339210",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 1",
      }, //رضا علي مجيد
      {
        Phone_Number: "9647772337458",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 1",
      }, //زهراء مصطفى كامل
      {
        Phone_Number: "9647831210809",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 1",
      }, //شروق طارق هادي
      {
        Phone_Number: "9647716649182",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 2",
      }, //فرات ثامر جرجيس
      {
        Phone_Number: "9647834365857",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 2",
      }, //فاطمة حيدر ناهي
      {
        Phone_Number: "9647748191372",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 2",
      }, //كوثرخضيرحمزة
      {
        Phone_Number: "9647732961211",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 3",
      }, //علي مهدي كاظم
      {
        Phone_Number: "9647721027404",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 3",
      }, //مروه جاسم عجيل
      {
        Phone_Number: "9647734221927",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 1",
      }, //زيدون خليف علي
      {
        Phone_Number: "9647724428519",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "الشعبة 3",
      }, //مصطفى محمد تايه
      {
        Phone_Number: "9647752695938",
        Governorate: "بغداد",
       Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة1",
      }, //حوراء جواد عزيز
      {
        Phone_Number: "9647730285971",
        Governorate: "بغداد",
      Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة1",
      }, //حنين علي كريم
      {
        Phone_Number: "9647768452051",
        Governorate: "بغداد",
       Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة1",
      }, //اسماء سعدون مطلك
      {
        Phone_Number: "9647829292430",
        Governorate: "بغداد",
      Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة2",
      }, //وضاح عماد كاظم
      {
        Phone_Number: "9647777528470",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة2",
      }, //رفيدة فاضل عباس
      {
        Phone_Number: "9647886624164",
        Governorate: "بغداد",
       Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة2",
      }, //هديل بهجت علي
      {
        Phone_Number: "9647736641545",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة3",
      }, //تبارك ثائر حسين
      {
        Phone_Number: "9647702661607",
        Governorate: "بغداد",
       Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة3",
      }, //امل علوان جاسم
      {
        Phone_Number: "9647702107841",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الدورة",
        Sub_Dept_Name: "شعبة3",
      }, //رقية رائد علي
  {
        Phone_Number: "9647828138453",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 1 ",
      }, //دعاء سلمان عبد زيد
      {
        Phone_Number: "9647827966350",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى ",
        Sub_Dept_Name: "الشعبة 1",
      }, //مرسل عماد نوري
      {
        Phone_Number: "9647808045672",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 2",
      }, //علي صلاح حسين
      {
        Phone_Number: "9647812161610",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 2",
      }, //حيدر سميرعبد الغني
      {
        Phone_Number: "9647829786078",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 3",
      }, //احمد فارس عبد زيد
      {
        Phone_Number: "9647863445383",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 4",
      }, //دعاء عبد الحسن حمادي
      {
        Phone_Number: "9647807814935",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في النجف الاولى",
        Sub_Dept_Name: "الشعبة 5",
      }, // هاشم حامد عبد زيد
      {
        Phone_Number: "9647802629207",
        Governorate: "النجف ",
        Dept_Name: "ملاحظية التسجيل العقاري في الحيدرية",
        Sub_Dept_Name: "الحيدرية",
      }, //حيدر يحيى عبيس
      {
        Phone_Number: "9647740559193",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 1",
      }, //رواء حكمت جاسم
      {
        Phone_Number: "9647724403824",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 2",
      }, //علياء سعد هادي
      {
        Phone_Number: "9647704124266",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة1",
      }, //زهراء كاظم نعمه
      {
        Phone_Number: "9647881825188",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة1",
      }, //شروق حاتم هادي
      {
        Phone_Number: "9647758769439",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة1",
      }, // ايات خضيرعبيد
      {
        Phone_Number: "9647742834615",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 2",
      }, //دعاء محمد روضان
      {
        Phone_Number: "9647760278500",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 2",
      }, //هدى احمد حسين
      {
        Phone_Number: "9647813122056",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة2",
      }, //ميادة شهيد محسن
      {
        Phone_Number: "9647772385464",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة2",
      }, //سجاح عبد الهادي عباس
      {
        Phone_Number: "9647706556069",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 2",
      }, //يوسف حسين يحيى
      {
        Phone_Number: "9647729887482",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 3",
      }, //احمد رسول كاظم
      {
        Phone_Number: "9647760325998",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 3",
      }, //لينا خالد مسلم
      {
        Phone_Number: "9647759859865",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة3",
      }, //اية شهاب درويش علي
      {
        Phone_Number: "9647725912026",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة3",
      }, //هبة عدنان عبد الحسين
      {
        Phone_Number: "9647764089798",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 3",
      }, //زهراء يوسف علي
      {
        Phone_Number: "9647711994072",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 4",
      }, //ابراهيم مجيد حمبد
      {
        Phone_Number: "9647704673269",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة4",
      }, //سجى علاء رشيد
      {
        Phone_Number: "9647719338951",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة4",
      }, //سارة زهير فاضل
      {
        Phone_Number: "9647700028733",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة4",
      }, //حنين نجم عبد عليوي
      {
        Phone_Number: "9647741162229",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة 5",
      }, //سناريا سلمان عبد
      {
        Phone_Number: "9647774831731",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة5",
      }, //سحر عماد هيار
      {
        Phone_Number: "9647756568066",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة5",
      }, //جنه جاسم عبد
      {
        Phone_Number: "9647773414109",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة5",
      }, //سهى كريم جار الله
      {
        Phone_Number: "9647715941227",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة4",
      }, //نور محمود عبد الله
      {
        Phone_Number: "9647716322306",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة2",
      }, //علي رحيم حمود
      {
        Phone_Number: "9647736650963",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة1",
      }, //نور عبد الجبار مصطفى
      {
        Phone_Number: "9647712807214",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الرصافة الثانية",
        Sub_Dept_Name: "الشعبة5",
      }, //مصطفى احمد علي حسين
      {
        Phone_Number: "9647752730581",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى ",
        Sub_Dept_Name: "الشعبة2",
      }, //زينة ابراهيم عبد المحسن
      {
        Phone_Number: "9647822381614",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة2",
      }, //امال هاشم قاسم
      {
        Phone_Number: "9647738354651",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة2",
      }, //رسل رعد حسن
      {
        Phone_Number: "9647748805899",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة2",
      }, //اسراء قاسم عباس
      {
        Phone_Number: "9647700679435",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة2",
      }, //علي عبد الخالق
      {
        Phone_Number: "9647782348057",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //ميثاق جبار كاظم
      {
        Phone_Number: "9647711811076",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //حسين سعد شوكة
      {
        Phone_Number: "9647730297124",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //سمية كريم غانم
      {
        Phone_Number: "9647714348449",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //لمياء حنون حسين
      {
        Phone_Number: "9647739186099",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //رشا صالح مهدي
      {
        Phone_Number: "9647704164481",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //سجاد صباح عبد القادر
      {
        Phone_Number: "9647714722487",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة2",
      }, //سيف غالب الياس
      {
        Phone_Number: "9647723534658",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //علي منير طالب
      {
        Phone_Number: "9647740585861",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //وجدان عبد الكاظم
      {
        Phone_Number: "9647724549439",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //ندى صباح هاتو
      {
        Phone_Number: "9647713274575",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //زهراء فاضل سموم
      {
        Phone_Number: "9647719965558",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //مصطفى قاسم احمد
      {
        Phone_Number: "9647721447545",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //محمد نعمان عيسى
      {
        Phone_Number: "9647715180265",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //مضر كمال حسن
      {
        Phone_Number: "9647735940473",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //ايه صباح مبارك
      {
        Phone_Number: "9647729424421",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //رؤى كريم مطشر
      {
        Phone_Number: "9647704313346",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //رغد عبد الله شناوة
      {
        Phone_Number: "9647704599351",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //اسراء عبد الكريم
      {
        Phone_Number: "9647716653606",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة3",
      }, //وديان عبد منشد
      {
        Phone_Number: "9647718200737",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
      }, //ليث حيدر نصيف
      {
        Phone_Number: "9647707736477",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //اسراء راهي حسين كاظم
      {
        Phone_Number: "9647869476986",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //سجى كريم عباس سعيد
      {
        Phone_Number: "9647737255222",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //أمنة عباس شياع
      {
        Phone_Number: "9647764050898",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //محمد احمد زبار
      {
        Phone_Number: "9647813626000",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //امجد محمد رجا
      {
        Phone_Number: "9647800535051",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة2",
      }, //مهند علاء عبد
      {
        Phone_Number: "9647825483405",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة2",
      }, //عبد الله غالي مزعل
      {
        Phone_Number: "9647815226369",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة2",
      }, //حاتم هادي فياض
      {
        Phone_Number: "9647868458353",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة2",
      }, //حيدر غضبان ابراهيم
      {
        Phone_Number: "9647875867096",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة3",
      }, //مصطفى عزيز جاسم
      {
        Phone_Number: "9647800026800",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة3",
      }, //باسم علوان حسين
      {
        Phone_Number: "9647830334432",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة3",
      }, //احمد كامل دحام
      {
        Phone_Number: "9647805541287",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة3",
      }, //مصطفى حميد عطا الله
      {
        Phone_Number: "9647826657776",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة3",
      }, //محمد محسن خلف
      {
        Phone_Number: "9647870280487",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة4",
      }, //سولاف علي ابراهيم علي
      {
        Phone_Number: "9647831776216",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة4",
      }, //مريم ثائر قاسم علي
      {
        Phone_Number: "9647712584635",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة4",
      }, //هند كريم عبد الله
      {
        Phone_Number: "9647812968576",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة4",
      }, //محمود طارق يوسف
      {
        Phone_Number: "9647818820071",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة2",
      }, //منصور حسن ابراهيم
      {
        Phone_Number: "9647872637997",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في ابي غريب",
        Sub_Dept_Name: "الشعبة1",
      }, //حارث سعد عزيز
      {
        Phone_Number: "9647762653515",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة1",
      }, //ازهار حسن علي
      {
        Phone_Number: "9647758813151",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة1",
      }, //نورالهدى نجم راضي
      {
        Phone_Number: "9647726568622",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة1",
      }, //نور محمد رزاق
      {
        Phone_Number: "9647749555396",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة1",
      }, //اسراء علي شامر
      {
        Phone_Number: "9647708368350",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة1",
      }, //نوران صادق جعفر
      {
        Phone_Number: "9647760707203",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة ",
        Sub_Dept_Name: "الشعبة2",
      }, //محمد مشتاق فهد
      {
        Phone_Number: "9647737399786",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة2",
      }, //زهور عبد الكريم حسين
      {
        Phone_Number: "9647727060831",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة2",
      }, //حسام سامي احمد
      {
        Phone_Number: "9647710739220",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة2",
      }, //محمد عوده جاسم
      {
        Phone_Number: "9647776303652",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الثالثة في البصرة",
        Sub_Dept_Name: "الشعبة2",
      }, //رسل وليد حسن
      {
        Phone_Number: "9647826925625",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في الكوفة",
        Sub_Dept_Name: "شعبة 1",
      }, //علي صادق عبد الصمد
      {
        Phone_Number: "9647800906610",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في الكوفة",
        Sub_Dept_Name: "شعبة1",
      }, //محمد علي صادق جعفر
      {
        Phone_Number: "9647721461016",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في الكوفة",
        Sub_Dept_Name: "شعبة 1",
      }, //سناء جلال موسى
      {
        Phone_Number: "9647816786416",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في الكوفة",
        Sub_Dept_Name: "شعبة 2",
      }, //علي مسلم كاظم حسين
      {
        Phone_Number: "964781282021",
        Governorate: "النجف",
        Dept_Name: "مديرية التسجيل العقاري في الكوفة",
        Sub_Dept_Name: "شعبة 2",
      }, //مصطفى محمد ناجي
      {
        Phone_Number: "9647881147262",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "شعبة 1",
      }, //غزوان لؤي خلف
      {
        Phone_Number: "9647825257371",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "شعبة الاولى",
      }, //ياسر شاكر محمد
      {
        Phone_Number: "9647724659581",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "شعبة الاولى",
      }, //نبأ جواد كاظم
      {
        Phone_Number: "9647710573009",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الاولى",
      }, //جنات مؤيد جعفر
      {
        Phone_Number: "9647710714751",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الاولى",
      }, //آيه ماجد عبدالله
      {
        Phone_Number: "9647739489061",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثانية",
      }, //الحسن مثنى هادي علوش
      {
        Phone_Number: "9647803129703",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثانية",
      }, //علي حسين علي
      {
        Phone_Number: "9647800029550",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //زينة كاظم شانع
      {
        Phone_Number: "9647707052311",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //علياء عبدالحسين مجيد
      {
        Phone_Number: "9647800737550",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //عبدالرحمن فائق عزيز حمد
      {
        Phone_Number: "9647823769579",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //متعب احمد متعب
      {
        Phone_Number: "9647702731106",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الرابعة",
      }, //مصطفى عمار كاظم عبد
      {
        Phone_Number: "9647805090283",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الرابعة",
      }, //علي زيدان خلف
      {
        Phone_Number: "9647870666156",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الرابعة",
      }, //سيف الدين رياض محمد
      {
        Phone_Number: "9647723783685",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الثانية",
        Sub_Dept_Name: "الشعبة الرابعة",
      }, //رفل عباس حسين
      {
        Phone_Number: "9647716454683",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة1",
      }, //مريم سيروان بهجة
      {
        Phone_Number: "9647705197842",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة1",
      }, //سرمد قاسم محمد نجم غريب
      {
        Phone_Number: "9647709323891",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة1",
      }, //عمر ابراهيم حسين علي
      {
        Phone_Number: "9647702371253",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة1",
      }, //مصطفى اياد كريم
      {
        Phone_Number: "9647727997942",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة1",
      }, //هيفاء علي حسين
      {
        Phone_Number: "9647700387704",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //مصطفى رفعت غيدان
      {
        Phone_Number: "9647744508889",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //جالاك محمد حسين
      {
        Phone_Number: "9647726493955",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //سعاد قادر ابراهيم
      {
        Phone_Number: "9647508175751",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //سناريا توفيق محمد
      {
        Phone_Number: "9647716455799",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //حسين يوسف حسين
      {
        Phone_Number: "9647719999629",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة3",
      }, //لؤي فوزي عبد الكريم
 {
        Phone_Number: "9647707527988",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //ازين عمر جبار
      {
        Phone_Number: "9647714605249",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة3",
      }, //هبة زكو ابراهيم زكو
      {
        Phone_Number: "9647703753980",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة3",
      }, //بتين طارق رفيق
      {
        Phone_Number: "9647723155292",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في الدبس",
        Sub_Dept_Name: "ملاحظية الدبس",
      }, //بيداء صالح عمر
      {
        Phone_Number: "9647854144260",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في الدبس",
        Sub_Dept_Name: "ملاحظية الدبس",
      }, //ايمان حكيم سعدالله
      {
        Phone_Number: "9647706849206",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في الدبس",
        Sub_Dept_Name: "ملاحظية الدبس",
      }, //هالة حميد مجيد
      {
        Phone_Number: "9647713482666",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في الدبس",
        Sub_Dept_Name: "ملاحظية الدبس",
      }, //هيثم رمضان عباس
      {
        Phone_Number: "9647702323270",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في الدبس",
        Sub_Dept_Name: "ملاحظية الدبس",
      }, //محمد طلال قادر محمد
      {
        Phone_Number: "9647764773839",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في التون كوبري",
        Sub_Dept_Name: "ملاحظية التون كوبري",
      }, //جانان جمعة عباس
      {
        Phone_Number: "9647701047375",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في التون كوبري",
        Sub_Dept_Name: "ملاحظية التون كوبري",
      }, //ايوب فارس عدنان
      {
        Phone_Number: "9647708868489",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة3",
      }, //حيدر جفات حسن
      {
        Phone_Number: "9647716575432",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة3",
      }, //حوراء يعقوب يوسف
      {
        Phone_Number: "9647706562444",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة1",
      }, //هديل مهدي لفته
      {
        Phone_Number: "9647726713793",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة4",
      }, //ايه عبد الكاظم سالم
      {
        Phone_Number: "9647728552891",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة3",
      }, //مؤمن حسين مهدي
      {
        Phone_Number: "9647717216768",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة4",
      }, //هدير عباس جاسم
      {
        Phone_Number: "9647709453793",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة2",
      }, //غزوان نبهان حرجان
      {
        Phone_Number: "9647770602235",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء صباح امانة
      {
        Phone_Number: "9647817338095",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة1",
      }, //شهد قاسم يحيى
      {
        Phone_Number: "9647832385037",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة3",
      }, //هدى رحيم جبار
      {
        Phone_Number: "9647808666748",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة4",
      }, //ابراهيم  جبار سعيد
      {
        Phone_Number: "9647822003021",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في البياع",
        Sub_Dept_Name: "شعبة2",
      }, // مازن  خضير مطر
      {
        Phone_Number: "9647712964508",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //عدي نجم عبيد
      {
        Phone_Number: "9647506342519",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //رائد نجم حسن
      {
        Phone_Number: "9647845314498",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //وليد صباح منجل
      {
        Phone_Number: "9647806297435",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //سيف سعد إبراهيم
      {
        Phone_Number: "9647516351159",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //هند فرحان احمد
      {
        Phone_Number: "9647734221927",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //زيدون خليف علي
      {
        Phone_Number: "9647827678796",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //حسن فالح عبد الله
      {
        Phone_Number: "9647843978625",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //هند كامل نعمة
      {
        Phone_Number: "9647819071391",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //نور خالد خليل
      {
        Phone_Number: "9647874589901",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //احمد عبد الوهاب احمد
      {
        Phone_Number: "9647505281452",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //بشير حسن شعلان
      {
        Phone_Number: "9647904230546",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //حاتم كريم شعيب
      {
        Phone_Number: "9647859075951",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //مروان فالح عبيد
      {
        Phone_Number: "9647819951647",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة1",
      }, //احمد كريم صخر
      {
        Phone_Number: "9647805385857",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //بثينة رعد جواد
      {
        Phone_Number: "9647802887275",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //زينب عبد الرضا كريم
      {
        Phone_Number: "9647715420034",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //مريم عامر عبد المنعم
      {
        Phone_Number: "9647870099948",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //تيم خضير عبد
      {
        Phone_Number: "9647500826891",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //اية احمد نايف
      {
        Phone_Number: "9647817785453",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //احمد منيجل عساف
      {
        Phone_Number: "9647835011777",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //هبة حيدر عدنان
      {
        Phone_Number: "9647714960874",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //ضياء حمود طه
      {
        Phone_Number: "9647876150859",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة2",
      }, //عبد الاله جمعة محسن
      {
        Phone_Number: "9647701875763",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //اطياب هادي تركي
      {
        Phone_Number: "9647707407330",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري المحمودية",
        Sub_Dept_Name: "شعبة3",
      }, //ندى محسن عبيس
      {
        Phone_Number: "9647732435793",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة1",
      }, //نرجس محمد صلاح الدين
      {
        Phone_Number: "9647754612330",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة1",
      }, //سرور مظهر علي
      {
        Phone_Number: "9647722639630",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة1",
      }, //انمار راشد عبيد
      {
        Phone_Number: "9647804338206",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة1",
      }, //قمر زمان غانم
      {
        Phone_Number: "9647703510615",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة1",
      }, //انفال محمد حسين
      {
        Phone_Number: "9647864867067",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //احمد حميد جاسم
      {
        Phone_Number: "9647812390475",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //زينب احمد كامل
      {
        Phone_Number: "9647737233415",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //حنين فاضل رمضان
      {
        Phone_Number: "9647715683401",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //هديل ياسين سالم
      {
        Phone_Number: "9647712711718",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //أسماء سليمان داود
      {
        Phone_Number: "9647734386221",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //شهد كاظم حسن
      {
        Phone_Number: "9647777014087",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //شيماء جاسم نصيف
      {
        Phone_Number: "9647726340856",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //الاء كاظم راجي
      {
        Phone_Number: "9647734155462",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //تبارك فلاح حسن
      {
        Phone_Number: "9647736346794",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //اية طه ياسين
      {
        Phone_Number: "9647706559736",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //سجاد علي شريح
      {
        Phone_Number: "9647716689185",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //مصطفى رعد خميس
      {
        Phone_Number: "9647705957784",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //عبد الرحمن سمير سعد
      {
        Phone_Number: "9647722226034",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //مروان فالح عبود
      {
        Phone_Number: "9647803388248",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة3",
      }, //علي شاكر كريم
      {
        Phone_Number: "9647905771887",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "2شعبة",
      }, //اياد عامر محمد
      {
        Phone_Number: "9647703834033",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الوحدة",
        Sub_Dept_Name: "ملاحظية الوحدة",
      }, //حسام جمعة علي
      {
        Phone_Number: "9647700830025",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الوحدة",
        Sub_Dept_Name: "ملاحظية الوحدة",
      }, //عمار هيثم داود
      {
        Phone_Number: "9647728385138",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الوحدة",
        Sub_Dept_Name: "ملاحظية الوحدة",
      }, //احمد سعد احمد
      {
        Phone_Number: "9647733489404",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الوحدة",
        Sub_Dept_Name: "ملاحظية الوحدة",
      }, //فهد فائق مخلف
      {
        Phone_Number: "9647716997907",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في بسماية",
        Sub_Dept_Name: "ملاحظية بسماية",
      }, //علي فاضل عبود
      {
        Phone_Number: "9647735390559",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في بسماية",
        Sub_Dept_Name: "ملاحظية بسماية",
      }, //الاء رضا نجم
      {
        Phone_Number: "9647761249452",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في بسماية",
        Sub_Dept_Name: "ملاحظية بسماية",
      }, //زهراء كاظم جاسم
      {
        Phone_Number: "9647700342515",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة1",
      }, //حيدر عبد الواحد سهر
      {
        Phone_Number: "9647801290120",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة1",
      }, //نجاح حسن جليب
      {
        Phone_Number: "9647808352699",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة1",
      }, //علي عدنان حميد
      {
        Phone_Number: "9647714691238",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة1",
      }, //احمد سامي سعيد
      {
        Phone_Number: "9647712654581",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة1",
      }, //محمد فيصل عبود
      {
        Phone_Number: "9647745901441",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة3",
      }, //زهراء شمخي جبر
      {
        Phone_Number: "9647852896658",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة3",
      }, //سحر علوان شياع
      {
        Phone_Number: "9647828163037",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة3",
      }, //زهراء طالب هادي
      {
        Phone_Number: "9647716739257",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة3",
      }, //زهراء احمد نعمة
      {
        Phone_Number: "9647709046365",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة3",
      }, //بهاء محمود ذياب
      {
        Phone_Number: "9647736231500",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة4",
      }, //حسام رحيم فرحان
      {
        Phone_Number: "9647840818921",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة4",
      }, //فاطمة نجم دعير
      {
        Phone_Number: "9647777858624",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة4",
      }, //شيماء علي عباس
      {
        Phone_Number: "9647717003054",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة4",
      }, //رؤى عامر عبد الامام
      {
        Phone_Number: "9647705777533",
        Governorate: "البصرة",
        Dept_Name: "مديرية التسجيل العقاري الأولى في البصرة",
        Sub_Dept_Name: "شعبة4",
      }, //اسماعيل محمد اسماعيل
      {
        Phone_Number: "9647710966484",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //مجتبى خالد عبد النبي
      {
        Phone_Number: "9647700571314",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //مصطفى زعلان هادي
      {
        Phone_Number: "9647773557666",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //فاطمة ابراهيم كاظم
      {
        Phone_Number: "9647701102193",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //سامي علي قاسم
      {
        Phone_Number: "9647703123723",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //علي محسن كاظم
      {
        Phone_Number: "9647703763896",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //جمال ثامر ناصر
      {
        Phone_Number: "9647703916384",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //حيدر فالح عاشور
      {
        Phone_Number: "9647817279841",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //نهى عوفي خضير
      {
        Phone_Number: "9647835770556",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //ثائر عبد الحسين قاسم
      {
        Phone_Number: "9647738143734",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في شط العرب",
        Sub_Dept_Name: "ملاحظية شط العرب",
      }, //جعفر نافع عبد علي
      {
        Phone_Number: "9647716408061",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في المدينة",
        Sub_Dept_Name: "ملاحظية المدينة",
      }, //جواد كاظم حمزة
      {
        Phone_Number: "9647770838200",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في المدينة",
        Sub_Dept_Name: "ملاحظية المدينة",
      }, //احمد كاظم حسن
      {
        Phone_Number: "9647818383662",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في المدينة",
        Sub_Dept_Name: "ملاحظية المدينة",
      }, //ازهر يونس حمود
      {
        Phone_Number: "9647812320112",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في المدينة",
        Sub_Dept_Name: "ملاحظية المدينة",
      }, //احمد رياض محمد
      {
        Phone_Number: "9647752987477",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في المدينة",
        Sub_Dept_Name: "ملاحظية المدينة",
      }, //بتول حازم ضامن
      {
        Phone_Number: "9647713148655",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في القرنة",
        Sub_Dept_Name: "ملاحظية القرنة",
      }, //امير عدي سامي
      {
        Phone_Number: "9647729223438",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في القرنة",
        Sub_Dept_Name: "ملاحظية القرنة",
      }, //حسن لؤي تركي
      {
        Phone_Number: "9647706419189",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في القرنة",
        Sub_Dept_Name: "ملاحظية القرنة",
      }, //هاني جمعة حمزة
      {
        Phone_Number: "9647707342225",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في القرنة",
        Sub_Dept_Name: "ملاحظية القرنة",
      }, //اكرم فؤاد محيسن
      {
        Phone_Number: "9647710813732",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في القرنة",
        Sub_Dept_Name: "ملاحظية القرنة",
      }, //حسين سعد حيران
      {
        Phone_Number: "9647711673762",
        Governorate: "بغداد",
        Dept_Name: "مديرية  التسجيل العقاري في الرصافة1",
        Sub_Dept_Name: "شعبة5",
      }, //ضحى محمد كاظم
      {
        Phone_Number: "9647739205933",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة1",
      }, //ايلاف عدنان مصطفى
      {
        Phone_Number: "9647714263943",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة3",
      }, //حسين حاتم حسين
      {
        Phone_Number: "9647801867173",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة1",
      }, //محمد علي محمد عباس
      {
        Phone_Number: "9647832401698",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة1",
      }, //انمار كرم جاسم
      {
        Phone_Number: "9647749804982",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //دعاء سعد كاظم
      {
        Phone_Number: "9647711755343",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //مريم مصطفى عبد
      {
        Phone_Number: "9647714339621",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //محمود باسم محمود
      {
        Phone_Number: "9647772060432",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //دعاء جاسم محمد
      {
        Phone_Number: "9647732995267",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //ميعاد عوده شبير
      {
        Phone_Number: "9647754887604",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة3",
      }, //اسيل محمد ابراهيم
      {
        Phone_Number: "9647732691666",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة3",
      }, //استبرق علي حبيب
      {
        Phone_Number: "9647703313711",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة3",
      }, //هيام رعد نجم
      {
        Phone_Number: "9647724867593",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //حوراء رحيم نصيف
      {
        Phone_Number: "9647817943167",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة3",
      }, //اسماء طه جاسم
      {
        Phone_Number: "9647740411214",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة2",
      }, //رانية احمد محمد
      {
        Phone_Number: "9647704646788",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الشعب",
        Sub_Dept_Name: "شعبة1",
      }, //مهدي ناهي نعيم
      {
        Phone_Number: "9647723606190",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة4",
      }, //سمارة عبد السادة عزوز
      {
        Phone_Number: "9647776705857",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة4",
      }, //سارة حقي مهدي
      {
        Phone_Number: "9647807918770",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة3",
      }, //مريم عاطف عبد الكريم
      {
        Phone_Number: "9647710621119",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة3",
      }, //بثينة قاسم احمد
      {
        Phone_Number: "9647706085799",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة3",
      }, //نور ناصر عبد الحسين
      {
        Phone_Number: "9647807061137",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة3",
      }, //مريم اديب صادق
      {
        Phone_Number: "9647722468305",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة2",
      }, //انس شريف كاظم
      {
        Phone_Number: "9647712782209",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة2",
      }, //هاله قاسم فخري
      {
        Phone_Number: "9647716101063",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة1",
      }, //حسام صالح حمودي
      {
        Phone_Number: "9647700114256",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة5",
      }, //علياء علي مهدي
      {
        Phone_Number: "9647716242578",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة2",
      }, //مروة سامي عبد الرزاق
      {
        Phone_Number: "9647713951326",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة2",
      }, //محمد كامل عبد اللطيف
      {
        Phone_Number: "9647700679155",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة5",
      }, //سارة جهاد ناظم
      {
        Phone_Number: "9647714144465",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة5",
      }, //رغد قحطان محمد
      {
        Phone_Number: "9647730015172",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة1",
      }, //حنين فاضل عباس
      {
        Phone_Number: "9647708291273",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكرخ1",
        Sub_Dept_Name: "شعبة4",
      }, //نورا سعد فليح
      {
        Phone_Number: "9647713396983",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة1",
      }, //حيدر باسم محمد
      {
        Phone_Number: "9647737136540",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة1",
      }, //مثنى لطيف شبوط
      {
        Phone_Number: "9647773434173",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة1",
      }, //زهراء صبري جاسم
      {
        Phone_Number: "9647733459141",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة2",
      }, //ليث فريد حميد
      {
        Phone_Number: "9647703947613",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة2",
      }, //يحيى ابراهيم خليل
      {
        Phone_Number: "9647848717155",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة2",
      }, //اسراء محمد تركي
      {
        Phone_Number: "9647821606041",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة2",
      }, //حوراء حيدر مهاوي
      {
        Phone_Number: "9647722784364",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة3",
      }, //كرار رحيم الطيف
      {
        Phone_Number: "9647745600685",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة3",
      }, //ضياء عباس حمود
      {
        Phone_Number: "9647710029892",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة3",
      }, //محمد ناصر خضير
      {
        Phone_Number: "9647712572403",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة4",
      }, //علي احمد عبود
      {
        Phone_Number: "9647754073158",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الاعظمية",
        Sub_Dept_Name: "شعبة4",
      }, //فاطمة سليم عبد
      {
        Phone_Number: "9647718618334",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة1",
      }, //امير محمود محمد
      {
        Phone_Number: "9647763715251",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة1",
      }, //مصطفى رعد كامل
      {
        Phone_Number: "9647727836359",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة1",
      }, //نور علي محمود
      {
        Phone_Number: "9647834060241",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة1",
      }, //ايات اياد فاضل
      {
        Phone_Number: "9647721071141",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة2",
      }, //رفل مصدق جعفر
      {
        Phone_Number: "9647715941492",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة2",
      }, //هبة نايف محسن
      {
        Phone_Number: "9647723572711",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة2",
      }, //سرى محمد خميس
      {
        Phone_Number: "9647782343965",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة2",
      }, //سحر حميد محمد
      {
        Phone_Number: "9647767174138",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //بسمة ظافر سامي
      {
        Phone_Number: "9647775829123",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //ايناس اسماعيل خلف
      {
        Phone_Number: "9647505813733",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //سماح يحيى نصيف
      {
        Phone_Number: "9647509325261",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //عذراء مطلك زغير
      {
        Phone_Number: "9647770619506",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة4",
      }, //مروة لؤي عبد الرزاق
      {
        Phone_Number: "9647712045325",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة4",
      }, //شهد طارق حسين
      {
        Phone_Number: "9647755749990",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة4",
      }, //ميمونة احمد هاشم
      {
        Phone_Number: "9647901813622",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة5",
      }, //اسيل علي محمود
      {
        Phone_Number: "9647772179974",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة5",
      }, //اسراء ايدن صابر
      {
        Phone_Number: "9647721403495",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة5",
      }, //رند عارف عبداللطيف
      {
        Phone_Number: "9647808666940",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة4",
      }, //نور محمد صالح
      {
        Phone_Number: "9647762200141",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //اية علي عواد
      {
        Phone_Number: "9647849163899",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة1",
      }, //يسرى عمر عبد الحميد
      {
        Phone_Number: "9647830690661",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة2",
      }, //مروة حكمت احمد
      {
        Phone_Number: "9647851652090",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //سماح يحيى نصيف جاسم
      {
        Phone_Number: "9647902924788",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //هند علي حمزة
      {
        Phone_Number: "9647767069716",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //هدير سعدون عبد
      {
        Phone_Number: "9647721425405",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //علي عبد الرزاق جبار
      {
        Phone_Number: "9647718593054",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //ميثم قاسم هاشم
      {
        Phone_Number: "9647726007038",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //عمار رعد جاسم
      {
        Phone_Number: "9647718053834",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //ايناس مسلم عبيد عريبي
      {
        Phone_Number: "9647761715347",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //زهراء رعد عبد الواحد
      {
        Phone_Number: "9647856689221",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //رسل سرحان عواد ذياب
      {
        Phone_Number: "9647804408084",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //اكرام عبد الكريم خيطان
      {
        Phone_Number: "9647734295008",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //نورا فاضل عبد العباس
      {
        Phone_Number: "9647716472232",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //اية بهاء شاكر
      {
        Phone_Number: "9647777639224",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //غفران محمد كاظم
      {
        Phone_Number: "9647718742515",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //ضحى ضمير عيسى
      {
        Phone_Number: "9647762131715",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //منتظر رعد غازي
      {
        Phone_Number: "9647805958700",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //مها جعفر صادق
      {
        Phone_Number: "9647746100331",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //رسل منذر رحمان
      {
        Phone_Number: "9647714249424",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //محمد رائد خليف
      {
        Phone_Number: "9647725945119",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //امير ثامر يوسف
      {
        Phone_Number: "9647716680568",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //اصيل حيدر ضياء
      {
        Phone_Number: "9647704684426",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //امير علاء عبد المجيد
      {
        Phone_Number: "9647711171930",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //حنين سمير هلال
      {
        Phone_Number: "9647803031334",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء علي سلمان
      {
        Phone_Number: "9647721989014",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: "شعبة3 ",
      }, //منتهى عبد السادة
      {
        Phone_Number: "9647713977181",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //سمية حاتم شهاب
      {
        Phone_Number: "9647762238677",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: " شعبة2",
      }, //زينب جعفر مولى
      {
        Phone_Number: "9647707016447",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: " شعبة3",
      }, //فاطمة علي كاظم
      {
        Phone_Number: "9647728517390",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: " شعبة1",
      }, //مروة جبار خلف
      {
        Phone_Number: "9647712771650",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد ",
        Sub_Dept_Name: " شعبة1",
      }, //زهراء ساجد جبار
      {
        Phone_Number: "9647724529460",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //زينب نعيمه حسين حسون
      {
        Phone_Number: "9647713267362",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //زهراء هاشم حسن
      {
        Phone_Number: "9647724563017",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //زينب خلف جبار
      {
        Phone_Number: "9647713346980",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //سجى محمد جروان
      {
        Phone_Number: "9647773141779",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //اسراء صادق فرج
      {
        Phone_Number: "9647719177693",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //اغادير حسين سعد
      {
        Phone_Number: "9647771343725",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة 2",
      }, //ناديه عباس علي
      {
        Phone_Number: "9647710067811",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //غصون قحطان نادر
      {
        Phone_Number: "9647759524627",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //كوثر كريم ديوان
      {
        Phone_Number: "9647746729275",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء سالم عنبر
      {
        Phone_Number: "9647762331540",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //حوراء محمد حسين
      {
        Phone_Number: "9647724948399",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //اسراء اياد خالد
      {
        Phone_Number: "9647746856250",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //فاطمة كريم ديوان
      {
        Phone_Number: "9647757101007",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //سهى صادق جعفر
      {
        Phone_Number: "9647733734077",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //نور اسعد ابراهيم
      {
        Phone_Number: "9647771343725",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //نادية عباس علي
      {
        Phone_Number: "9647703720253",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //بتول يوسف عبد اللطيف
      {
        Phone_Number: "9647702931538",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "3شعبة",
      }, //طيبه منذر عبد الكريم ..تم نقلها من الاعظمية
      {
        Phone_Number: "9647713977181",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //سمية حاتم شهاب
      {
        Phone_Number: "9647728517390",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد",
        Sub_Dept_Name: " شعبة1",
      }, //مروة جبار خلف
      {
        Phone_Number: "9647712771650",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في زهور بغداد ",
        Sub_Dept_Name: " شعبة1",
      }, //زهراء ساجد جبار
      {
        Phone_Number: "9647712554609",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //رسول طه ياسين
      {
        Phone_Number: "9647707238050",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //احمد عطية طاهر
      {
        Phone_Number: "9647707334902",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //ضياء مهدي باكيت
      {
        Phone_Number: "9647700498145",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //مرتضى مهدي ناهي
      {
        Phone_Number: "9647727925418",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //سارة زغير عطوان
      {
        Phone_Number: "9647716897707",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //مريم اكرم محمد
      {
        Phone_Number: "9647750300171",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //زهراء علي شريف
      {
        Phone_Number: "964770880444",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //كرار هاشم جبار
      {
        Phone_Number: "9647722240336",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //احمد جاسم حمود
      {
        Phone_Number: "9647750281808",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //حسين سعيد خميس
      {
        Phone_Number: "9647727550911",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //علي احمد شاوي
      {
        Phone_Number: "9647710685152",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //محمد كاظم حسين
      {
        Phone_Number: "9647713677320",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //عباس عفات ادريس
      {
        Phone_Number: "9647714512224",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //بهاء راشد عجاج
      {
        Phone_Number: "9647712892642",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //حيدر سلام محمد
      {
        Phone_Number: "9647738029887",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //ضياء عطية شكاية
      {
        Phone_Number: "9647733044778",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //احسان ياسر حسين
      {
        Phone_Number: "9647709812011",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //جمال حمدان فاضل
      {
        Phone_Number: "9647739588670",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //كرار باسم حميد
      {
        Phone_Number: "9647726084541",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة1",
      }, //جعفر صادق راشد
      {
        Phone_Number: "9647726213740",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //احمد علاوي لعيبي
      {
        Phone_Number: "9647717496201",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //حاتم عبد الوهاب
      {
        Phone_Number: "9647737870614",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //زينب شياع حرز
      {
        Phone_Number: "9647807976350",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة3",
      }, //دعاء لفته جباره
      {
        Phone_Number: "9647706083257",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الصدر 2",
        Sub_Dept_Name: "شعبة2",
      }, //كرار فاضل جبر
      {
        Phone_Number: "96477052526499",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر 2",
        Sub_Dept_Name: "الشعبة3",
      }, //ايسم سلمان صالح..تم نقلها من الصدر1
      {
        Phone_Number: "9647814499747",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة1",
      }, //احمد حموش صالح
      {
        Phone_Number: "9647853332206",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة1",
      }, //اشجان سالم عبد المهدي ضايف
      {
        Phone_Number: "9647810556153",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة1",
      }, //بنين عبد الرحمن كاظم عبود
      {
        Phone_Number: "9647807405402",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة1",
      }, //حسين رياض كريم صالح
      {
        Phone_Number: "9647833522877",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة1",
      }, //حوراء عادل محمود محمد
      {
        Phone_Number: "9647725071683",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //ساره علي جلال محسن
      {
        Phone_Number: "9647828985545",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //ساره اياد سالم عمار
      {
        Phone_Number: "9647803179102",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //سناء محمد رضا حسين
      {
        Phone_Number: "9647847034538",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //شيماء عايد قاسم حسين
      {
        Phone_Number: "9647805699387",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //عباس عبد الامير جاسم اسماعيل
      {
        Phone_Number: "9647869880444",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة2",
      }, //عبد الحميد كريم كاظم محمد
      {
        Phone_Number: "9647829858222",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //عبير ستار جبار كاظم
      {
        Phone_Number: "9647807429715",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //علاء عبد الحسين هادي محمد
      {
        Phone_Number: "9647807400259",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //محمد كريم كامل ياسر
      {
        Phone_Number: "9647862620077",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //حيدر مكي عبد الزهرة سلمان
      {
        Phone_Number: "9647840603815",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //حمزة ثائر حسين كاظم
      {
        Phone_Number: "9647827435455",
        Governorate: "النجف الاشرف",
        Dept_Name: "مديرية التسجيل العقاري الثانية النجف الاشرف",
        Sub_Dept_Name: "شعبة3",
      }, //كرار مسلم موسى عبد الحسين
      {
        Phone_Number: "9647803712894",
        Governorate: "النجف الاشرف",
        Dept_Name: "ملاحظية التسجيل العقاري المناذرة",
        Sub_Dept_Name: "شعبة1",
      }, //عمر ياس خضير حسن
      {
        Phone_Number: "9647813991576",
        Governorate: "النجف الاشرف",
        Dept_Name: "ملاحظية التسجيل العقاري المناذرة",
        Sub_Dept_Name: "شعبة1",
      }, //مسلم ابراهيم علي
      {
        Phone_Number: "9647811796913",
        Governorate: "النجف الاشرف",
        Dept_Name: "ملاحظية التسجيل العقاري المناذرة",
        Sub_Dept_Name: "شعبة1",
      }, //حسين غانم مغيزل عبيد
      {
        Phone_Number: "9647834145625",
        Governorate: "النجف الاشرف",
        Dept_Name: "ملاحظية التسجيل العقاري المناذرة",
        Sub_Dept_Name: "شعبة1",
      }, //سمر عبد السادة عراك طوفان
      {
        Phone_Number: "9647800584932",
        Governorate: "النجف الاشرف",
        Dept_Name: "ملاحظية التسجيل العقاري المناذرة",
        Sub_Dept_Name: "شعبة1",
      }, //نصير عظيم عبد محمود
      {
        Phone_Number: "9647706159478",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "1شعبة",
      }, //حمزة صباح زيدان
      {
        Phone_Number: "9647745547707",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "1شعبة",
      }, //الق غسان علي
      {
        Phone_Number: "9647712284360",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "1شعبة",
      }, //وائل علي عواد
      {
        Phone_Number: "9647736836732",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "2شعبة",
      }, //هديل مازن فاضل
      {
        Phone_Number: "9647816974072",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "2شعبة",
      }, //محمد عجيل روكان
      {
        Phone_Number: "9647711204566",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "2شعبة",
      }, //مصبح مروان قاسم
      {
        Phone_Number: "96477040682661",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "2شعبة",
      }, //رسول ثاير عبد
      {
        Phone_Number: "9647727607952",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة3",
      }, //حسن حسين عبد الله
      {
        Phone_Number: "9647719666898",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "3شعبة",
      }, //عمر عدوان محمود
      {
        Phone_Number: "9647722853494",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "3شعبة",
      }, //ميادة يوسف خلف
      {
        Phone_Number: "9647750135330",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "3شعبة",
      }, //فاطمة الزهراء فضل الله جاسم
      {
        Phone_Number: "9647702058919",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //عمار رجب مرعي
      {
        Phone_Number: "9647710474880",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //طارق فوزي يونس
      {
        Phone_Number: "9647710652705",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //الاء فاضل تركي
      {
        Phone_Number: "9647712120109",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //عدنان احمد مجيد
      {
        Phone_Number: "9647817149566",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //احمد كامل عبد
      {
        Phone_Number: "9647707443700",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //حسام احمد إبراهيم
      {
        Phone_Number: "9647727936529",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //عبد الرحمن عوف عبد الرحمن
      {
        Phone_Number: "9647809826405",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //زينب جاسم محمد
      {
        Phone_Number: "9647817797252",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الشرقاط",
        Sub_Dept_Name: "ملاحظية الشرقاط",
      }, //احمد محمد خليل
      {
        Phone_Number: "9647742665124",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الدور",
        Sub_Dept_Name: "ملاحظية الدور",
      }, //زينة سامي عبد
      {
        Phone_Number: "9647712167104",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الدور",
        Sub_Dept_Name: "ملاحظية الدور",
      }, //نغم حازم رزوقي
      {
        Phone_Number: "9647722397423",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية الدور",
        Sub_Dept_Name: "ملاحظية الدور",
      }, //رواء اسعد محمد
      {
        Phone_Number: "9647755024449",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية سامراء",
        Sub_Dept_Name: "ملاحظية سامراء",
      }, //حياة وحيد حسن
      {
        Phone_Number: "9647710666901",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية سامراء",
        Sub_Dept_Name: "ملاحظية سامراء",
      }, //سامر حامد عبد الواحد
      {
        Phone_Number: "9647804593303",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية سامراء",
        Sub_Dept_Name: "ملاحظية سامراء",
      }, //اركان إسماعيل قدوري
      {
        Phone_Number: "9647823972924",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية بيجي",
        Sub_Dept_Name: "ملاحظية بيجي",
      }, //سهر جمال صبحي
      {
        Phone_Number: "9647864332675",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية بيجي",
        Sub_Dept_Name: "ملاحظية بيجي",
      }, //كوثر غازي عبد
      {
        Phone_Number: "9647702888163",
        Governorate: "صلاح الدين",
        Dept_Name: "ملاحظية بيجي",
        Sub_Dept_Name: "ملاحظية بيجي",
      }, //هيفاء سليمان عبد الله
      {
        Phone_Number: "9647704286693",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //شانلي برهان علي نجرس
      {
        Phone_Number: "9647707606353",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //شوخان انور عبدالله
      {
        Phone_Number: "9647706122146",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //عبدالكريم عاصي نور الدين
      {
        Phone_Number: "9647703622899",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //فاطمة كاظم عبدالحسين
      {
        Phone_Number: "9647706351400",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //قدرت ابراهيم عبدالقادر
      {
        Phone_Number: "9647737798491",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //نبيلة عيسى عواد
      {
        Phone_Number: "9647764790497",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة2",
      }, //زيان عزيز كريم
      {
        Phone_Number: "9647706535875",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة2",
      }, //زينة فرهاد ناصح
      {
        Phone_Number: "9647709334519",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة3",
      }, //ايمان انور خلف
      {
        Phone_Number: "9647709288491",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة3",
      }, //جوان قيس علي
      {
        Phone_Number: "9647764749981",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة3",
      }, //دنيا كمال عثمان
      {
        Phone_Number: "9647709732161",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة3",
      }, //صونكل عابدين محمد
      {
        Phone_Number: "9647722369577",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة4",
      }, //احمد يعقوب مرتضى
      {
        Phone_Number: "9647722374458",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة4",
      }, //الاء عثمان ابراهيم
      {
        Phone_Number: "9647701959297",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة4",
      }, //جمال ناصر علي فتاح
  {
    Phone_Number: "9647703622899",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //فاطمة كاظم عبدالحسين
      {
        Phone_Number: "9647706351400",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري الأولى في كركوك",
        Sub_Dept_Name: "شعبة1",
      }, //قدرت ابراهيم عبدالقادر
      {
        Phone_Number: "9647709372815",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية تازة",
        Sub_Dept_Name: "ملاحظية تازة",
      }, //عدنان أيوب اصغر
      {
        Phone_Number: "9647748283793",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية تازة",
        Sub_Dept_Name: "ملاحظية تازة",
      }, //عبدالله زين العابدين عسكر واحد
      {
        Phone_Number: "9647717283667",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية تازة",
        Sub_Dept_Name: "ملاحظية تازة",
      }, //فاطمة عادل زين العابدين علي
      {
        Phone_Number: "9647723147927",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية تازة",
        Sub_Dept_Name: "ملاحظية تازة",
      }, //امنه سعدي عزيز مصطفى
      {
        Phone_Number: "9647700206628",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية تازة",
        Sub_Dept_Name: "ملاحظية تازة",
      }, //عبدالحسين عباس رضا
      {
        Phone_Number: "9647723148315",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية داقوق",
        Sub_Dept_Name: "ملاحظية داقوق",
      }, //فاطمة زين العابدين قنبر
      {
        Phone_Number: "9647700968458",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية داقوق",
        Sub_Dept_Name: "ملاحظية داقوق",
      }, //عصام قاسم عاصى
      {
        Phone_Number: "9647700419886",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية داقوق",
        Sub_Dept_Name: "ملاحظية داقوق",
      }, //نورسن علمدار رضا
      {
        Phone_Number: "9647700709920",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية داقوق",
        Sub_Dept_Name: "ملاحظية داقوق",
      }, //حنان علي عسكر
      {
        Phone_Number: "9647708599051",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية داقوق",
        Sub_Dept_Name: "ملاحظية داقوق",
      }, //ديمن رمضان عيسى
      {
        Phone_Number: "9647822330048",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //احمد طه عبد
      {
        Phone_Number: "9647833164350",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //جنة ابراهيم عطية
      {
        Phone_Number: "9647822443372",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //زهير علوان خلف
      {
        Phone_Number: "9647806412128",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //احمد نجم عبدالله
      {
        Phone_Number: "9647811557833",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //محمد ابراهيم محمد
      {
        Phone_Number: "9647823052181",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في الفاو",
        Sub_Dept_Name: "ملاحظية الفاو",
      }, //فؤاد خالد غانم عبود
      {
        Phone_Number: "9647884236777",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في الفاو",
        Sub_Dept_Name: "الفاو",
      }, //مصطفى باسم كريم حمادي سعد
      {
        Phone_Number: "9647716758098",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //حيدر نجم عبد الصاحب
      {
        Phone_Number: "9647767778942",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //لقاء عبد القيوم عبد الرحمن
      {
        Phone_Number: "9647729513576",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //وسن جواد كاظم
      {
        Phone_Number: "9647739337407",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //زينب ناظم حسن
      {
        Phone_Number: "9647714064856",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //آيات عبد الكريم شعبان
      {
        Phone_Number: "9647739395548",
        Governorate: "البصرة",
        Dept_Name: "ملاحظية التسجيل العقاري في أبي الخصيب",
        Sub_Dept_Name: "ملاحظية ابي الخصيب",
      }, //شهد هيثم حبيب
      {
        Phone_Number: "9647811727517",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الثانية",
      }, //حيدر صالح سكر حافظ
      {
        Phone_Number: "9647811646165",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الأولى",
      }, //علي عبد الامير كاظم محمد
      {
        Phone_Number: "9647817765009",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //مثال يوسف فاخر ياسين
      {
        Phone_Number: "9647850707204",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الأولى",
      }, //زهراء محمد علاوي
      {
        Phone_Number: "9647853201300",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الثانية",
      }, //عذراء شعلان جابر
      {
        Phone_Number: "9647823092690",
        Governorate: "ذي قار",
        Dept_Name: "مديرية التسجيل العقاري في سوق الشيوخ",
        Sub_Dept_Name: "الشعبة الثالثة",
      }, //مصطفى حيدر سالم
      {
        Phone_Number: "9647837254779",
        Governorate: "ذي قار",
        Dept_Name: "ملاحظية التسجيل العقاري كرمة بني سعيد",
        Sub_Dept_Name: "ملاحظية  كرمة بني سعيد",
      }, //اسراء منصور فليح خلاف
      {
        Phone_Number: "9647802481295",
        Governorate: "ذي قار",
        Dept_Name: "ملاحظية التسجيل العقاري كرمة بني سعيد",
        Sub_Dept_Name: "ملاحظية  كرمة بني سعيد",
      }, //عمر عبد الزهره رحم حسن
      {
        Phone_Number: "9647860306092",
        Governorate: "ذي قار",
        Dept_Name: "ملاحظية التسجيل العقاري كرمة بني سعيد",
        Sub_Dept_Name: "ملاحظية  كرمة بني سعيد",
      }, //اسمهان عبيد جابر سليمان
      {
        Phone_Number: "9647809062646",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الطارمية",
        Sub_Dept_Name: "ملاحظية الطارمية",
      }, //ابراهيم حافظ مبدر
      {
        Phone_Number: "9647708882759",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الطارمية",
        Sub_Dept_Name: "ملاحظية الطارمية",
      }, //نصر يونس لطيف
      {
        Phone_Number: "9647731776059",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الطارمية",
        Sub_Dept_Name: "ملاحظية الطارمية",
      }, //نبال محمد عارف
      {
        Phone_Number: "9647884689222",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الطارمية",
        Sub_Dept_Name: "ملاحظية الطارمية",
      }, //حسين حميد صالح
      {
        Phone_Number: "9647812804535",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في الطارمية",
        Sub_Dept_Name: "ملاحظية الطارمية",
      }, //حامد رشيد محمود
      {
        Phone_Number: "9647762513996",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //زهراء عبد علي ادريس
      {
        Phone_Number: "9647738645539",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 1",
      }, //صباح رزاق عبد السادة مانع الكريطي
      {
        Phone_Number: "9647706052490",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //مريم عبد الاله سامي محمود محبوب آغا
      {
        Phone_Number: "9647800696320",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //انمار سلام عبد وكوع
      {
        Phone_Number: "9647743631484",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 1",
      }, //زهراء جواد كاظم
      {
        Phone_Number: "9647749410803",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 1",
      }, //نرجس فارس هادي حمزة القصير
      {
        Phone_Number: "9647715951524",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 1",
      }, //انوار عبد العباس رحيم
  {
        Phone_Number: "9647835083395",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 1",
      }, //زهراء عبد العباس غازي
  {
        Phone_Number: "9647749080190",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //امال حمزة حسين
      {
        Phone_Number: "9647828831885",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //حسن فالح حسن علي اكبر
      {
        Phone_Number: "9647806785230",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الهندية",
        Sub_Dept_Name: "شعبة 2",
      }, //علي عادل صبري مهدي
      {
        Phone_Number: "9647721585733",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //احمد ستار جابر إبراهيم
      {
        Phone_Number: "9647848836134",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //حسن عواد حسن احمد
      {
        Phone_Number: "9647762528195",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //كوثر ميثم محمد جواد
      {
        Phone_Number: "9647710482168",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //ساره جبر عباس محسن
      {
        Phone_Number: "9647762514006",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //زينب عبد الرضا حميد أبو جالي
      {
        Phone_Number: "9647732557065",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //زينه سالم جابر حسين
      {
        Phone_Number: "9647735191068",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //بنين جليل نعمه
      {
        Phone_Number: "9647709413951",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //أسماء طارق هادي
      {
        Phone_Number: "9647716030513",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "ملاحظية التسجيل العقاري في الخيرات",
        Sub_Dept_Name: "ملاحظية  الخيرات",
      }, //هديل صالح كاظم
      {
        Phone_Number: "9647719958304",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في طوزخورماتو",
        Sub_Dept_Name: "شعبة2",
      }, //ماجد حسين رشيد
      {
        Phone_Number: "9647705173811",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في طوزخورماتو",
          Sub_Dept_Name: "شعبة2",
      }, //نجاة نوزاد جلال
      {
        Phone_Number: "9647719958261",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في طوزخورماتو",
         Sub_Dept_Name: "شعبة2",
      }, //هاوسر جواد كريم
      {
        Phone_Number: "9647703711448",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في طوزخورماتو",
        Sub_Dept_Name: "شعبة2",
      }, //محمد جلال حميد
      {
        Phone_Number: "9647708570232",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في طوزخورماتو",
         Sub_Dept_Name: "شعبة2",
      }, //أوات رؤوف نوري
    {
      Phone_Number: "9647702373581",
      Governorate: "صلاح الدين",
      Dept_Name: "مديرية التسجيل العقاري في الطوز",
       Sub_Dept_Name: "شعبة2",
       }, //سالار جمعه كريم جوهر الداوودي
      {
         Phone_Number: "9647728361050",
       Governorate: "صلاح الدين",
       Dept_Name: "مديرية التسجيل العقاري في الطوز",
        Sub_Dept_Name: "شعبة2",
        }, //زينب عطا خيزران سلمان الخفاجي
        {
        Phone_Number: "9647500794969",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في التاجي",
        Sub_Dept_Name: "ملاحظية التاجي",
      }, //مروان احمد محجوب
      {
        Phone_Number: "9647811868119",
        Governorate: "بغداد",
        Dept_Name: "ملاحظية التسجيل العقاري في التاجي",
        Sub_Dept_Name: "ملاحظية التاجي",
      }, //محمود ابراهيم محمود
      {
        Phone_Number: "9647851742750",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة4",
      }, //زهراء رائد حسن طالب
      {
        Phone_Number: "9647810961962",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة",
      }, //احمد حيدر محمد
      {
        Phone_Number: "9647802699875",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة4",
      }, //افراح عصام علي
      {
        Phone_Number: "9647816631573",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة2",
      }, //حسين احمد علي جواد
      {
        Phone_Number: "9647822056943",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة2",
      }, //احمد عباس هادي
      {
        Phone_Number: "9647812245323",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة2",
      }, //عباس علي محمد جاسم
      {
        Phone_Number: "9647831113227",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة2",
      }, //قاسم جبار طعمة
      {
        Phone_Number: "9647847399662",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة3",
      }, //انفال عماد لفته مروان
      {
        Phone_Number: "9647742540158",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة3",
      }, //رغدة صادق علي حسين
      {
        Phone_Number: "9647808241417",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة4",
      }, //اسماء موسى عكروك جوهر
      {
        Phone_Number: "9647833872722",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء صادق زيدان
      {
        Phone_Number: "9647891047003",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة1",
      }, //احمد ظاهر رشيد صكر
      {
        Phone_Number: "9647734389182",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة1",
      }, //احمد عبد الصاحب صالح
      {
        Phone_Number: "9647815782065",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة1",
      }, //حامد علي حسين
      {
        Phone_Number: "9647870885299",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة1",
      }, //دعاء ناجي علي
      {
        Phone_Number: "9647815590580",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة1",
      }, //اية عائد كاظم سرحان
     {
        Phone_Number: "9647810954901",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: " شعبة3",
        }, //زيد باسم حسن
        {
        Phone_Number: "9647818330660",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة4",
      }, //روان ميثم عدنان شهيد
       {
       Phone_Number: "9647804360776",
       Governorate: "بابل",
       Dept_Name: "مديرية التسجيل العقاري في بابل",
       Sub_Dept_Name: " شعبة3",
       }, //رشا سليم علي
      {
        Phone_Number: "9647808220943",
        Governorate: "بابل",
        Dept_Name: "مديرية التسجيل العقاري في بابل",
        Sub_Dept_Name: "شعبة3",
      }, //رسل حسين نوير جاسم
      {
        Phone_Number: "9647828298674",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الكفل",
        Sub_Dept_Name: "ملاحظية الكفل",
        }, //ابراهيم حسين
        {
        Phone_Number: "9647833873932",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الكفل",
        Sub_Dept_Name: "ملاحظية الكفل",
        }, //حنين حامد جبار
        {
        Phone_Number: "9647749340393",
       Governorate: "بابل",
         Dept_Name: "ملاحظية التسجيل العقاري في الكفل",
        Sub_Dept_Name: "ملاحظية الكفل",
          }, //رقية عايد ناهي عبد
       {
        Phone_Number: "9647809729677",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في القاسم",
        Sub_Dept_Name: "ملاحظية القاسم",
      }, //اميرة صلال صاحب
      {
        Phone_Number: "9647840689023",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في القاسم",
        Sub_Dept_Name: "ملاحظية القاسم",
      }, //احمد جاسم هادي
      {
       Phone_Number: "9647813847165",
       Governorate: "بابل",
       Dept_Name: "ملاحظية التسجيل العقاري في القاسم",
      Sub_Dept_Name: "ملاحظية القاسم",
        }, // احمد ترتيب كريم
       {
        Phone_Number: "9647814195586",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
        Sub_Dept_Name: "ملاحظية الشوملي",
      }, //ابراهيم طعمة حمزة
      {
        Phone_Number: "9647805023140",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
        Sub_Dept_Name: "ملاحظية الشوملي",
      }, //حسين كفاح مبدر
       {
        Phone_Number: "9647856661883",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
        Sub_Dept_Name: "ملاحظية الشوملي ",
      }, //احمد حامد عباس
    {
    Phone_Number: "9647732563546",
    Governorate: "بابل",
    Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
    Sub_Dept_Name: "ملاحظية الشوملي",
     }, //احمد كاظم جاسم
   {
    Phone_Number: "9647838844831",
    Governorate: "بابل",
    Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
    Sub_Dept_Name: "ملاحظية الشوملي",
     }, //أسامة عبد الأمير عليوي
     {
        Phone_Number: "9647814195586",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
        Sub_Dept_Name: "ملاحظية الشوملي",
      }, //ابراهيم طعمة حمزة
      {
        Phone_Number: "9647805023140",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في الشوملي",
        Sub_Dept_Name: "ملاحظية الشوملي",
      }, //حسين كفاح مبدر
      {
        Phone_Number: "9647739752699",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في المحاويل",
        Sub_Dept_Name: "ملاحظية المحاويل",
      }, //هديل كامل عبيس
       {
        Phone_Number: "9647815788594",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في المحاويل",
        Sub_Dept_Name: "ملاحظية المحاويل",
      }, //بسام كريم سلمان داود
       {
        Phone_Number: "9647762473262",
        Governorate: "بابل",
        Dept_Name: " ملاحظية التسجيل العقاري في المحاويل ",
        Sub_Dept_Name: "ملاحظية المحاويل",
         }, //ايلاف عبد علي مكطوف
        {
       Phone_Number: "9647749386122",
       Governorate: "بابل",
       Dept_Name: "ملاحظية التسجيل العقاري في الهاشمية",
       Sub_Dept_Name: "ملاحظية الهاشمية",
         }, //زهراء جواد عبد الكاظم
       {
        Phone_Number: "9647762470918",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في ابي غرق",
        Sub_Dept_Name: " ملاحظية ابي غرق",
      }, //سرور جاسم عمران جياد
      {
        Phone_Number: "9647750490008",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في ابي غرق",
        Sub_Dept_Name: " ملاحظية ابي غرق ",
      }, //علي محمد خلف تايه
      {
        Phone_Number: "9647721638444",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في ابي غرق ",
        Sub_Dept_Name: "ملاحظية ابي غرق ",
      }, //احمد حمزة كريم ناجي
      {
        Phone_Number: "9647707826185",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في ابي غرق",
        Sub_Dept_Name: " ملاحظية ابي غرق ",
      }, //حوراء عدي صبيح عبد الحمزة
      {
        Phone_Number: "9647829025922",
        Governorate: "بابل",
        Dept_Name: "ملاحظية التسجيل العقاري في ابي غرق",
        Sub_Dept_Name: " ملاحظية ابي غرق ",
      }, //ضياء عبد زيد رشيد
         {
        Phone_Number: "9647732777353",
        Governorate: "كربلاء",
       Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة2",
      }, //سيماء علي حسين محمد العرداوي
      {
        Phone_Number: "9647721080533",
        Governorate: "كربلاء",
          Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة2",
      }, //ظفر عباس عبدالامير يحيى الخفاجي
      {
        Phone_Number: "9647716201747",
        Governorate: "كربلاء",
          Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة2",
      }, //علي ياس كريم الجبوري
      {
        Phone_Number: "9647711791306",
        Governorate: "كربلاء",
          Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة2",
      }, //محمد حسين مدلول جياد الحصموتي
      {
        Phone_Number: "9647732296441",
        Governorate: "كربلاء",
         Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة2",
      }, //مروه عمران مردان مسير الجبري
      {
        Phone_Number: "9647780735896",
        Governorate: "كربلاء",
         Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة1",
      }, //منال طلال حسون جادر الزيادي
      {
        Phone_Number: "9647806609759",
        Governorate: "كربلاء",
         Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة1",
      }, //احمد فاضل مهدي مطر
      {
        Phone_Number: "9647801627895",
        Governorate: "كربلاء",
         Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة1",
      }, //موسى عبد الزهرة حسين
      {
        Phone_Number: "9647815582704",
        Governorate: "كربلاء",
         Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة1",
      }, //هبة رشيد غازي
      {
        Phone_Number: "9647721127890",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري الثانية في كربلاء المقدسة",
        Sub_Dept_Name: "الشعبة 4",
      }, //فاضل قيس فاضل سعيد
      {
        Phone_Number: "9647812086727",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة1",
      }, //حيدر هيثم لفته
      {
        Phone_Number: "9647736120195",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة1",
      }, //اسراء فاضل عباس
      {
        Phone_Number: "9647716980823",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة1",
      }, //شكرية سعيد مندي
      {
        Phone_Number: "9647708966754",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة1",
      }, //زهراء حيدر عزيز
      {
        Phone_Number: "9647721370666",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة2",
      }, //زينب حامد عبدالله
      {
        Phone_Number: "9647760093625",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة2",
      }, //طيبة كاظم فرحان
      {
        Phone_Number: "9647717694157",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة2",
      }, //اسراء حسين علي
      {
        Phone_Number: "9647751932482",
        Governorate: "كربلاء المقدسة",
        Dept_Name: "مديرية التسجيل العقاري في الحر",
        Sub_Dept_Name: "شعبة2",
      }, //منى فاخر مهدي
      {
        Phone_Number: "9647731312690",
        Governorate: "واسط",
        Dept_Name: "مديرية التسجيل العقاري واسط الاولى",
        Sub_Dept_Name: "شعبة 1",
      }, //هاجر حسن كحيف
      {
        Phone_Number: "9647840213171",
        Governorate: "واسط",
        Dept_Name: "مديرية التسجيل العقاري واسط الاولى",
        Sub_Dept_Name: "شعبة 1",
      }, //حسنين سليم خلف
      {
        Phone_Number: "9647863188528",
        Governorate: "واسط",
        Dept_Name: "مديرية التسجيل العقاري واسط الاولى",
        Sub_Dept_Name: "شعبة 2",
      }, //امل فزع عبيد
      {
        Phone_Number: "9647719985823",
        Governorate: "واسط",
        Dept_Name: "مديرية التسجيل العقاري واسط الاولى",
        Sub_Dept_Name: "شعبة 2",
      }, //ابراهيم محمد ابراهيم محمد
      {
        Phone_Number: "9647814027039",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //مرتجى كريم عايد
      {
        Phone_Number: "9647714342824",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //عبد الله كويش هارون
      {
        Phone_Number: "9647830836430",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //محمد مؤيد مهدي ظاهر
      {
        Phone_Number: "9647803988759",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //اسراء سمير ابراهيم
      {
        Phone_Number: "9647830835870",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //حسن حبيب حسون
      {
        Phone_Number: "9647810166773",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //علي عزيز كريم
      {
        Phone_Number: "9647810137293",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //مبارك مهدي جبار
      {
        Phone_Number: "9647816041617",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //جهاد فلاح حسن
      {
        Phone_Number: "9647811674368",
        Governorate: "واسط",
        Dept_Name: "ملاحظية التسجيل العقاري في الحي",
        Sub_Dept_Name: "ملاحظية الحي",
      }, //زهراء حمزة مراح
     {
        Phone_Number: "9647729023014",
        Governorate: "كربلاء المقدسة",
       Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
       Sub_Dept_Name: "ملاحظية الحسينية",
       }, //ملوك صالح مهدي علي
      {
     Phone_Number: "9647828462527",
     Governorate: "كربلاء المقدسة",
     Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
     Sub_Dept_Name: "ملاحظية الحسينية",
      }, //عذاري علاء مجيد حبيب
    {
    Phone_Number: "9647723615184",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
    }, //سندس محمد جواد احمد
    {
    Phone_Number: "9647735313156",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
    }, //حسنين عمران موسى
    {
    Phone_Number: "9647702802930",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
     }, //غسان عامر عبدالله
{
    Phone_Number: "9647723997054",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
}, //حوراء صباح علي حطاب
{
    Phone_Number: "9647737162497",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
}, //اسراء كاظم جواد
{
    Phone_Number: "9647732933785",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "ملاحظية التسجيل العقاري في الحسينية",
    Sub_Dept_Name: "ملاحظية الحسينية",
}, //حيدر قاسم هبل خضير
{
    Phone_Number: "9647760546850",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة1",
}, //زينب احمد جاسم شرهان
{
    Phone_Number: "9647737405597",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة1",
}, //اسيل صالح مهدي خلاوي
{
    Phone_Number: "9647727602543",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة1",
}, //انور ستار عبدالله مرزوق
{
    Phone_Number: "9647777866472",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة1",
}, //سارة عمار سامي جاسم
{
    Phone_Number: "9647723575126",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة2",
}, //نبأ حسن عبد الزهرة
{
    Phone_Number: "9647710862029",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة2",
}, //مصطفى فوزي مصطفى
{
    Phone_Number: "9647738410325",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة2",
}, //ايلاف معن عبد الوهاب
{
    Phone_Number: "9647723361041",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة2",
}, //احمد فيحان جبار
{
    Phone_Number: "9647722779265",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة3",
}, //رشا داود سلمان
{
    Phone_Number: "9647716301055",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة3",
}, //حسن صباح علي
{
    Phone_Number: "9647707065800",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة3",
}, //بثينة محمد علي
{
    Phone_Number: "9647819460305",
    Governorate: "البصرة",
    Dept_Name: "مديرية التسجيل العقاري الثانية في البصرة",
    Sub_Dept_Name: "شعبة3",
}, //الاء عبد الحميد جبار
{
    Phone_Number: "9647503968791",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
    }, //عمر حامد حمادي
   {
    Phone_Number: "9647729616101",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
   }, //ساره فريد جبرو
   {
    Phone_Number: "9647508295750",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
    }, //هلبين بهجت مجيد
   {
    Phone_Number: "9647847202607",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
    }, //رضا حسين محمود
   {
    Phone_Number: "9647508041437",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
   }, //اشور وديع خوشابا خانو
   {
    Phone_Number: "9647517212315",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
   }, //صالح عدنان محمد صالح
   {
    Phone_Number: "9647508969879",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
   }, //محمد سبهان يونس
   {
    Phone_Number: "9647510453690",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
   Sub_Dept_Name: "ملاحظية تلكيف",
    }, //وفاء ماهر محمود
  {
    Phone_Number: "9647501855456",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
    }, //بكر قيدار عبدالجبار
   {
    Phone_Number: "9647703034043",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية تلكيف",
    Sub_Dept_Name: "ملاحظية تلكيف",
   }, //مصطفى احمد فيصل
   {
    Phone_Number: "9647723380198",
    Governorate: "ميسان",
    Dept_Name: "مديرية التسجيل العقاري في ميسان",
    Sub_Dept_Name: "شعبة 1 ",
     }, //محمد حسن وادي
{
  Phone_Number: "9647723169350",
    Governorate: "ميسان",
    Dept_Name: "مديرية التسجيل العقاري في ميسان",
    Sub_Dept_Name: "شعبة 2",
}, //نور سمير جعيو
    {
    Phone_Number: "9647739993093",
    Governorate: "ميسان",
    Dept_Name: "مديرية التسجيل العقاري في ميسان",
    Sub_Dept_Name: "شعبة 1",
    }, //حنين علي رشك
   {
    Phone_Number: "9647824266302",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في قلعة صالح",
    Sub_Dept_Name: "ملاحظية قلعة صالح",
     }, //فاطمة عبد الرزاق حمود
    {
    Phone_Number: "9647723940413",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في قلعة صالح",
    Sub_Dept_Name: "ملاحظية قلعة صالح",
    }, //زهراء محمد عبد الجبار
    {
    Phone_Number: "9647818737828",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في قلعة صالح",
    Sub_Dept_Name: "ملاحظية قلعة صالح",
    }, //محمد ستار جبار
   {
    Phone_Number: "9647812143552",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في قلعة صالح",
    Sub_Dept_Name: "ملاحظية قلعة صالح",
     }, //عذراء كاظم محيسن
    {
    Phone_Number: "9647821595085",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في الميمونة",
    Sub_Dept_Name: "ملاحظية الميمونة",
    }, //ناظم علي جبير
    {
    Phone_Number: "9647864412194",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في الميمونة",
    Sub_Dept_Name: "ملاحظية الميمونة",
    }, //محمد وادي كطافة
 {
  Phone_Number: "9647819687579",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في الميمونة",
    Sub_Dept_Name: "ملاحظية الميمونة",
}, //محمد عبد الحسين نايف
{
    Phone_Number: "9647818796945",
    Governorate: "ميسان",
    Dept_Name: "ملاحظية التسجيل العقاري في علي الغربي",
    Sub_Dept_Name: "ملاحظية علي الغربي",
    }, //رائد ثائر درويش
{
  Phone_Number: "9647809056568",
    Governorate: "الأنبار",
    Dept_Name: "ملاحظية التسجيل العقاري في هيت",
    Sub_Dept_Name: "ملاحظية هيت",
}, //محمد إبراهيم تركي احمد
{
    Phone_Number: "9647841169799",
    Governorate: "الأنبار",
    Dept_Name: "ملاحظية التسجيل العقاري في هيت",
    Sub_Dept_Name: "ملاحظية هيت",
}, //نور الهدى مؤيد سلمان احمد
{
    Phone_Number: "9647810979623",
    Governorate: "الأنبار",
        Dept_Name: "ملاحظية التسجيل العقاري في هيت",
    Sub_Dept_Name: "ملاحظية هيت",
}, //اسامه خليل إبراهيم محمد
{
    Phone_Number: "9647831925394",
    Governorate: "الأنبار",
        Dept_Name: "ملاحظية التسجيل العقاري في هيت",
    Sub_Dept_Name: "ملاحظية هيت",
}, //اثير خليل إسماعيل
{
    Phone_Number: "9647809817187",
    Governorate: "الأنبار",
    Dept_Name: "ملاحظية التسجيل العقاري في هيت",
    Sub_Dept_Name: "ملاحظية هيت",
}, //معاويه جمال فاضل خلف
{
    Phone_Number: "9647805593400",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //محمد هاشم بدعي رشيد
{
    Phone_Number: "9647819972777",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //موسى مجبل محمد مخلف
{
    Phone_Number: "9647855000006",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //عمار عدنان شيحان خلف
{
    Phone_Number: "9647858797668",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //نذير محمد علي عياش
{
    Phone_Number: "9647850983022",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //احمد جاسم محمد صالح
{
    Phone_Number: "9647853698468",
    Governorate: "الانبار",
    Dept_Name: "ملاحظية التسجيل العقاري في ناحية الوفاء",
    Sub_Dept_Name: "ملاحظية الوفاء",
}, //محمد صباح عكل مسلط
{
    Phone_Number: "9647848824898",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //استبرق جودة كاظم لفته
{
    Phone_Number: "9647762432253",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //شهد احمد حسين كاظم
{
    Phone_Number: "9647844141875",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //علياء مسافر جودي كاظم
{
    Phone_Number: "9647737618951",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //عدي جواد سعد عبود
{
    Phone_Number: "9647762523295",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //رسل حمزة خضير طاهر
{
    Phone_Number: "9647762523243",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //الاء عباس اموري حسون
{
    Phone_Number: "9647762462662",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //زهراء محمد جابر عيسى
{
    Phone_Number: "9647845648554",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //حوراء مجيد عبد الزهرة
{
    Phone_Number: "9647846356355",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //فرح محمد زيدان طاهر
{
    Phone_Number: "9647811001010",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //زينب محمد علي اصغر
{
    Phone_Number: "9647732422788",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //حوراء سلمان ييده حصلول
{
    Phone_Number: "9647815732570",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //ازهار حاكم عبد الزهرة كاظم
{
    Phone_Number: "9647713077685",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //امير فاضل عباس علي
{
    Phone_Number: "9647745055495",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //سارة عبد الكاظم عبد الجبار
{
    Phone_Number: "9647708754323",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //امير صادق محمود علي
{
    Phone_Number: "9647831112015",
    Governorate: "كربلاء المقدسة",
    Dept_Name: "مديرية التسجيل العقاري كربلاء الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //حسن عبد الرزاق عطية فرهود
{
    Phone_Number: "9647724339517",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية التسجيل العقاري في الحمدانية",
    Sub_Dept_Name: "ملاحظية الحمدانية",
}, //فيوليتا امجد يوسف
{
    Phone_Number: "9647707167507",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية التسجيل العقاري في الحمدانية",
    Sub_Dept_Name: "ملاحظية الحمدانية",
}, //فرح سمير متي
{
    Phone_Number: "96477171595099",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية التسجيل العقاري في الحمدانية",
    Sub_Dept_Name: "ملاحظية الحمدانية",
}, //لورد سعد شابا
{
  Phone_Number: "9647710441202",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية التسجيل العقاري في الحمدانية",
    Sub_Dept_Name: "ملاحظية الحمدانية",
}, //قاسم محمد علي
{
    Phone_Number: "9647727965363",
    Governorate: "نينوى",
    Dept_Name: "ملاحظية التسجيل العقاري في الحمدانية",
    Sub_Dept_Name: "ملاحظية الحمدانية",
}, //ماريتا فؤاد الياس
{
    Phone_Number: "9647727827666",
    Governorate: "ديالى",
    Dept_Name: "ملاحظية التسجيل العقاري في الخالص",
    Sub_Dept_Name: "ملاحظية الخالص",
}, //حسين علي تركان مكي
{
    Phone_Number: "9647808899822",
    Governorate: "ديالى",
    Dept_Name: "ملاحظية التسجيل العقاري في الخالص",
    Sub_Dept_Name: "ملاحظية الخالص",
}, //احمد علي جاسم حميد
{
    Phone_Number: "9647827729022",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 1",
}, //يونس عبد العظيم محمد
{
    Phone_Number: "9647829229671",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 1",
}, //أنور عداي ارحيم خضر
{
    Phone_Number: "9647830498970",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 2",
}, //ضياء عبيس سلطان
{
    Phone_Number: "9647744469969",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 2",
}, //عبدالله راهي فاهم
{
    Phone_Number: "9647802683494",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 3",
}, //عماد جليل روكان مخيف
{
    Phone_Number: "9647825201832",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 3",
}, //هشام محمد عبد كشاش
{
    Phone_Number: "9647800762892",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 4",
}, //كرار باقر عبد عباس
{
    Phone_Number: "9647807832639",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 4",
}, //باقر حاكم جلاب جبار
{
    Phone_Number: "9647813242063",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 5",
}, //اثير مظفر عبد الهادي
{
    Phone_Number: "9647814410458",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 5",
}, //امير حيدر جواد
{
    Phone_Number: "9647812927901",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 6",
}, //علي حسين مطرود
{
    Phone_Number: "9647",
    Governorate: "الديوانية",
    Dept_Name: "مديرية التسجيل العقاري في الديوانية",
    Sub_Dept_Name: "شعبة 6",
}, //يونس عبد العظيم محمد
{
    Phone_Number: "9647760964047",
    Governorate: "الأنبار",
    Dept_Name: "ملاحظية التسجيل العقاري في عامرية الصمود",
    Sub_Dept_Name: "ملاحظية عامرية الصمود",
}, //اسامه سعدي اسماعيل
{
    Phone_Number: "9647807877786",
    Governorate: "الأنبار",
  Dept_Name: "ملاحظية التسجيل العقاري في عامرية الصمود",
Sub_Dept_Name: "ملاحظية عامرية الصمود",
}, //احمد عطيه عناد
{
    Phone_Number: "9647705506643",
    Governorate: "الأنبار",
  Dept_Name: "ملاحظية التسجيل العقاري في عامرية الصمود",
    Sub_Dept_Name: "ملاحظية عامرية الصمود",
}, //صهيب صادق سعدون
{
    Phone_Number: "9647819605783",
    Governorate: "الأنبار",
  Dept_Name: "ملاحظية التسجيل العقاري في عامرية الصمود",
    Sub_Dept_Name: "ملاحظية عامرية الصمود",
}, //بلال احمد صالح
{
    Phone_Number: "9647886305802",
    Governorate: "الأنبار",
  Dept_Name: "ملاحظية التسجيل العقاري في عامرية الصمود",
   Sub_Dept_Name: "ملاحظية عامرية الصمود",
}, //محمد خالد لفته
{
    Phone_Number: "9647733336353",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //حمزة جمال احمد
{
    Phone_Number: "9647800971273",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
}, //سميه مجباس جسام
      {
    Phone_Number: "9647830797085",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //عادل باسم صالح
{
    Phone_Number: "",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //محمد ستار جبير صالح
{
    Phone_Number: "",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //أيمن سلام رشيد نايف
{
    Phone_Number: "9647817060945",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //خير الله فاضل محمد
{
    Phone_Number: "9647827922267",
    Governorate: "الأنبار",
Dept_Name: "مديرية التسجيل العقاري في الرمادي",
Sub_Dept_Name: "",
}, //سلطان أحمد خلف
{
    Phone_Number: "9647823534820",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //ياسر أحمد زيدان خليف
{
    Phone_Number: "9647802221507",
    Governorate: "الأنبار",
   Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //قتيبة عمر مخلف عبد
{
    Phone_Number: "9647845770022",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //وسام عواد صالح
{
    Phone_Number: "9647844808409",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //مروان رجب حميد مخلف
{
    Phone_Number: "9647813464800",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //عمر صادق خليفة درج
{
    Phone_Number: "9647835559449",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //علي جاسم محمد عبيد
{
    Phone_Number: "9647822690101",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //مهدي ارحيم ابراهيم شلال
{
    Phone_Number: "9647803878441",
    Governorate: "الأنبار",
   Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //ديار مجيد ابراهيم شلال
{
    Phone_Number: "9647828913625",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //بلال جمال محمد عبدالله
{
    Phone_Number: "9647807750954",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //وضاح نوري حماد عبد
{
    Phone_Number: "9647832965970",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //موسى عبد ابراهيم عواد
{
    Phone_Number: "",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //علي عامر خلف حسين
{
    Phone_Number: "",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //ابراهيم اسماعيل ابراهيم
{
    Phone_Number: "9647870296677",
    Governorate: "الأنبار",
   Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //عبداللطيف ثابت زبن
{
    Phone_Number: "9647838200692",
    Governorate: "الأنبار",
   Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //يوسف رعد خضر عبد
{
    Phone_Number: "9647874067111",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //هشام جمعة حسين عبد
{
    Phone_Number: "9647819060092",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //عبدالحميد مجيد عبد مرار
{
    Phone_Number: "9647843328822",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //علي سليمان حميد خلف
{
    Phone_Number: "9647813314352",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الرمادي",
    Sub_Dept_Name: "",
}, //عبدالله كامل محمد حمدالله
{
    Phone_Number: "9647801873418",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //حوراء علي حسين
{
    Phone_Number: "9647835738344",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قارالاولى",
    Sub_Dept_Name: "شعبة 1",
}, //زهراء عقيل حسين
{
    Phone_Number: "9647822218304",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //ازهار جاسم زبالة
{
    Phone_Number: "9647808918397",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //ايمان هاشم حسون
{
    Phone_Number: "9647852703823",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //هدى جاسم طاهر
{
    Phone_Number: "9647884570500",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //دنيا جبار فرحان
{
    Phone_Number: "9647826004026",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 3",
}, //استبرق ذياب احمد
{
    Phone_Number: "9647802199863",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 3",
}, //صادق حسين توية
{
    Phone_Number: "9647806604311",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 3",
}, //يسرى امين علي
{
    Phone_Number: "9647837232001",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 4",
}, //نور اسعد خطف
{
    Phone_Number: "9647805885249",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 4",
}, //منال جبار طاهر
{
    Phone_Number: "9647812844308",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 5",
}, //حوراء نعمه حسين
{
    Phone_Number: "9647810992971",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري في ذي قار الاولى",
    Sub_Dept_Name: "شعبة 5",
}, //فاطمة يعقوب يونس
{
    Phone_Number: "9647862867685",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //عامر كامل حسن سعد
{
    Phone_Number: "9647800524302",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //حسين كامل هادي
{
    Phone_Number: "9647832805019",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //احمد رحيم غبين لهميد
{
    Phone_Number: "9647847163810",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //ظاهر محسن ابراهيم
{
    Phone_Number: "9647819245787",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //ميثم كريم عماش
{
    Phone_Number: "9647763677768",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //زياد فاهم مراح
{
    Phone_Number: "9647725701083",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في ال البدير",
    Sub_Dept_Name: "ملاحظية ال البدير",
}, //كرار علي هادي
{
    Phone_Number: "9647811183694",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //حازم رحمن خضير
{
    Phone_Number: "9647814292164",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //مرجان دفاع عواد
{
    Phone_Number: "9647838374075",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //ليث زاهي ذباح
{
    Phone_Number: "9647813990718",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //حسين عاد كتاب
{
    Phone_Number: "9647870302951",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //ياسر كريم حسين
{
    Phone_Number: "9647833204694",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في غماس",
    Sub_Dept_Name: "ملاحظية غماس",
}, //كرار حرجان جليوي
{
    Phone_Number: "9647810532369",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //امير عواد جابر
{
    Phone_Number: "9647807802607",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //امجد صباح عوده
{
    Phone_Number: "9647838143494",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //هشام سلمان مشير
{
    Phone_Number: "9647826062866",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //سعد عدنان خامان
{
    Phone_Number: "9647822078117",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //حمزه فرحان جبر
{
    Phone_Number: "9647806363066",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //علي بدر كاظم
{
    Phone_Number: "9647885667852",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في الدغارة",
    Sub_Dept_Name: "ملاحظية الدغارة",
}, //علي عبد الأمير كاظم
{
    Phone_Number: "9647804185892",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 3",
}, //اشرف جارالله محمد
{
    Phone_Number: "9647834198110",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 1",
}, //علي ستار عبد
{
    Phone_Number: "9647867000935",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 1",
}, //دلهم حميد جيجو
{
    Phone_Number: "9647819579009",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 3",
}, //حوراء رداد شاطي
{
    Phone_Number: "9647836080476",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 1",
}, //علياء نجم عبد
{
    Phone_Number: "9647829416015",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 1",
}, //ايلاف عباس يوسف
{
    Phone_Number: "9647807497652",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 2",
}, //اسيل سعد حسين
{
    Phone_Number: "9647830049657",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 2",
}, //زهراء مهدي شريف
{
    Phone_Number: "9647880403020",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 2",
}, //نغم عبدالمنعم علي
{
    Phone_Number: "9647805403043",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية ",
    Sub_Dept_Name: "شعبة 3",
}, //الاء اياد مهدي
{
    Phone_Number: "9647880998517",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية ",
    Sub_Dept_Name: "شعبة 2",
}, //شاه زاد علي زغير
{
    Phone_Number: "9647845304541",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية ",
    Sub_Dept_Name: "شعبة 3",
}, //انغام عبدالله زغير
{
    Phone_Number: "9647810389881",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 3",
}, //وطفه حياوي عبيد
{
    Phone_Number: "9647811163114",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 2",
}, //هديل حازم وحيد
{
    Phone_Number: "9647882244731",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية ",
    Sub_Dept_Name: "شعبة 1",
}, //نورس عجيل حسين
{
    Phone_Number: "9647827247755",
    Governorate: "ذي قار",
    Dept_Name: "مديرية التسجيل العقاري ذي قارالثانية",
    Sub_Dept_Name: "شعبة 1",
}, //اقبال علي طاهر
{
    Phone_Number: "9647800608845",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 1",
}, //عبد الله علاوي عبد الله
{
    Phone_Number: "9647829093198",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 1",
}, //محمد سعدي عيدان
{
    Phone_Number: "9647805457493",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 1",
}, //حكمت كريم جعفر
{
    Phone_Number: "9647807168743",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 1",
}, //محمد رحيم حسين
{
    Phone_Number: "9647725103351",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 2",
}, //عباس حمزة خليف
{
    Phone_Number: "9647848689526",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 2",
}, //عبد الله حسين عبد الامير
{
    Phone_Number: "9647751227865",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 2",
}, //شهد شاكر ناظم
{
    Phone_Number: "9647762228752",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 2",
}, //اسراء اركان مرزة
{
    Phone_Number: "9647712203658",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في الصويرة",
    Sub_Dept_Name: "شعبة 2",
}, //زهراء سلام عجيل
{
    Phone_Number: "9647712040024",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //قاسم محمد كريم حمزة
{
    Phone_Number: "9647735951260",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //محمد فاضل عودة
{
    Phone_Number: "9647822170012",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //ضياء فلاح حسن
{
    Phone_Number: "9647748201836",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //محمد هلال ابراهيم
{
    Phone_Number: "9647831060396",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //علي منصور جراد
{
    Phone_Number: "9647823090074",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //حسين ياسين عودة
{
    Phone_Number: "9647827550151",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //حيدر حسين غاوي
{
    Phone_Number: "9647812461251",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في العزيزية",
    Sub_Dept_Name: "ملاحظية العزيزية",
}, //هبة ناظم سلمان
{
    Phone_Number: "9647712066602",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في تاج الدين",
    Sub_Dept_Name: "ملاحظية تاج الدين",
}, //عباس تحسين حسين
{
    Phone_Number: "9647727169227",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في تاج الدين",
    Sub_Dept_Name: "ملاحظية تاج الدين",
}, //لارا عمر ابراهيم
{
    Phone_Number: "9647727169227",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في تاج الدين",
    Sub_Dept_Name: "ملاحظية تاج الدين",
}, //هند عامر اسماعيل
{
    Phone_Number: "9647804284872",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الزبيدية",
    Sub_Dept_Name: "ملاحظية الزبيدية",
}, //محمد عادل عبيد
{
    Phone_Number: "9647727169390",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الزبيدية",
    Sub_Dept_Name: "ملاحظية الزبيدية",
}, //غسان فرحان خليف
{
    Phone_Number: "9647827777634",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الزبيدية",
    Sub_Dept_Name: "ملاحظية الزبيدية",
}, //زهراء سعد حمزة
{
    Phone_Number: "9647817004612",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الزبيدية",
    Sub_Dept_Name: "ملاحظية الزبيدية",
}, //حيدر عزيزي نعمة
{
    Phone_Number: "9647724428979",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الزبيدية",
    Sub_Dept_Name: "ملاحظية الزبيدية",
}, //ايسر موسى مراح
{
    Phone_Number: "9647829191616",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //زيد حامد عبد الحمزة
{
    Phone_Number: "9647828987029",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //علي أزهر عبد الكاظم
{
    Phone_Number: "9647816527047",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //مصطفى حسين حبيب
{
    Phone_Number: "9647808279653",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //محمد حمزة رمضان
{
    Phone_Number: "9647804410809",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //محمد جودة حسن
{
    Phone_Number: "9647838100481",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //عمر محسن حسين
{
    Phone_Number: "9647830969779",
    Governorate: "الديوانية",
    Dept_Name: "ملاحظية التسجيل العقاري في المهناوية",
    Sub_Dept_Name: "ملاحظية المهناوية",
}, //إيهاب منهل عباس
{
    Phone_Number: "9647827975387",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //زهراء جاسم يوسف
{
    Phone_Number: "9647734403663",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري واسط في الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //حسين كامل ضمين
{
  Phone_Number: "9647727432274",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //اية عماد شجر
{
  Phone_Number: "9647847282634",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //نبا طالب سلمان
{
  Phone_Number: "9647727808865",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //ياسيمين امان عبد الكاظم
{
    Phone_Number: "9647703779421",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //مصطفى صباح مطير
{
    Phone_Number: "9647732125960",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //علي هادي صلال
{
    Phone_Number: "9647831189814",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 3",
}, //زهراء عاشور عبيد
{
    Phone_Number: "9647714364588",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 3",
}, //فهد كريم راشد
{
    Phone_Number: "9647806060808",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //طارق بشير عزيز
{
    Phone_Number: "9647740296220",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 2",
}, //بارق جابر لفتة
{
    Phone_Number: "9647749029440",
    Governorate: "واسط",
    Dept_Name: "مديرية التسجيل العقاري في واسط الاولى",
    Sub_Dept_Name: "شعبة 1",
}, //سجى حياوي حسين
{
    Phone_Number: "9647816540108",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في بدرة",
    Sub_Dept_Name: "ملاحظية بدرة",
}, //مرتضى طه عباس
{
    Phone_Number: "9647809489817",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في بدرة",
    Sub_Dept_Name: "ملاحظية بدرة",
}, //حيدر عباس جاسم
{
    Phone_Number: "9647727733523",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في بدرة",
    Sub_Dept_Name: "ملاحظية بدرة",
}, //فاطمة رعد رمضان
{
    Phone_Number: "9647746204160",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في بدرة",
    Sub_Dept_Name: "ملاحظية بدرة",
}, //الاء محمد محل
{
    Phone_Number: "9647735136425",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في النعمانية",
    Sub_Dept_Name: "ملاحظية النعمانية",
}, //مريم كريم عبد كسوب
{
    Phone_Number: "9647830005967",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في النعمانية",
    Sub_Dept_Name: "ملاحظية النعمانية",
}, //عقيل رزاق جاسم
{
    Phone_Number: "9647822052317",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في النعمانية",
    Sub_Dept_Name: "ملاحظية النعمانية",
}, //علي رحمن منصور
{
    Phone_Number: "9647828259908",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الحي",
    Sub_Dept_Name: "ملاحظية الحي",
}, //حيدر نعيم ساجت
{
    Phone_Number: "9647756551381",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الحي",
    Sub_Dept_Name: "ملاحظية الحي",
}, //منار عبد الحسين عبد حمدان
{
    Phone_Number: "9647732120941",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الحي",
    Sub_Dept_Name: "ملاحظية الحي",
}, //عليه لفته صياح
{
    Phone_Number: "9647732609367",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الاحرار",
    Sub_Dept_Name: "ملاحظية الاحرار",
}, //ضياء صباح موازي
{
    Phone_Number: "9647734339896",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الاحرار",
    Sub_Dept_Name: "ملاحظية الاحرار",
}, //بتول حردان محمد
{
    Phone_Number: "9647737538028",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الاحرار",
    Sub_Dept_Name: "ملاحظية الاحرار",
}, //نبا عادل هلال
{
    Phone_Number: "9647713770455",
    Governorate: "واسط",
    Dept_Name: "ملاحظية التسجيل العقاري في الاحرار",
    Sub_Dept_Name: "ملاحظية الاحرار",
}, //علاء راشد مطشر
{
    Phone_Number: "9647717015332",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //مصطفى باسل محمد حميد
{
    Phone_Number: "9647717015323",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //وسام قيس هاشم
{
    Phone_Number: "9647717012692",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //محمد يونس ياسين مصطفى
{
    Phone_Number: "9647700558964",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //تماره سعد سعيد عبد الله
{
    Phone_Number: "9647701034084",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //عبد الله محمد عبد اللطيف
{
    Phone_Number: "9647723479992",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //أمل صالح حسن عبد
{
    Phone_Number: "9647719645842",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //رحمه بشير يونس
{
    Phone_Number: "9647719819882",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //دنيا عبد عابكي يونس
{
    Phone_Number: "9647727809651",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //رحمه خضر حمدي ساللله
{
    Phone_Number: "9647708059311",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //هاجر هيثم ظالم سبحانه
{
    Phone_Number: "9647727647450",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //حسام سلام حسن مصطفى
{
    Phone_Number: "9647735166984",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //ريوان علي سليمان احمد
{
    Phone_Number: "9647705542945",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //رقفان صبحي احمد علي
{
    Phone_Number: "9647702034606",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //مهند طاهر احمد علي
{
    Phone_Number: "9647702063446",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //احمد علي عبدالله محمود
{
    Phone_Number: "9647763583290",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //مهند خضير احمد علي
{
    Phone_Number: "9647515165994",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //رغدان صبحي ابراهيم
{
    Phone_Number: "9647774617350",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //ريان علي سليمان احمد
{
    Phone_Number: "9647503979211",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //حسام سالم حسن مصطفى
{
    Phone_Number: "9647708955931",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //هاجر هيثم غانم عبدالله
{
    Phone_Number: "9647737105845",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //رحمة عامر حمدي مال الله
{
    Phone_Number: "9647719829182",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //دنيا محمد عبدالغني يونس
{
    Phone_Number: "9647701614822",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //رحمه بشير يونس
{
    Phone_Number: "9647734374992",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //علي محمود عبدالله عبداللطيف
{
    Phone_Number: "9647705218335",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //امل صالح حسن محمد
{
    Phone_Number: "9647510505384",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //محمد صالح محمد عبدالله
{
    Phone_Number: "9647755008994",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //تماره محمد سعيد محمد
{
    Phone_Number: "9647717151265",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //محمد نبيل فخري عبدالله
{
    Phone_Number: "9647740906869",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 2",
}, //مهد يونس ياسين مصطفى
{
    Phone_Number: "9647722462232",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 1",
}, //وسام قيس هاشم
{
  Phone_Number: "9647717011533",
    Governorate: "نينوى",
    Dept_Name: "مديرية التسجيل العقاري في نينوى",
    Sub_Dept_Name: "شعبة 3",
}, //مصطفى باسل مجيد حميد
{
  Phone_Number: "9647802014771",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 4",
}, //عبد الرحمن ابراهيم حمد
{
  Phone_Number: "9647832957355",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //علي اسعد صالح
{
  Phone_Number: "9647816959688",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //لؤي هادي داود
{
  Phone_Number: "9647828303598",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 2",
}, //عماد محمود عبد نايف
{
  Phone_Number: "9647828312816",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 2",
}, //سراب خالد عبد الله
{
  Phone_Number: "9647818880743",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //ساري عبد الهادي عوده
{
  Phone_Number: "9647748095255",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //ديانه خالد حميد
{
  Phone_Number: "9647826530052",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
}, //استبرق عادل جاسم
{
  Phone_Number: "9647826120359",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 2",
}, //عبد الله محمد سليمان
{
    Phone_Number: "9647809240904",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 2",
}, //سبا عبد الواحد أفندي
{
  Phone_Number: "9647746122001",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
}, //ثامر بشير قدوري
{
  Phone_Number: "9647804048115",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 4",
}, //قتاده عامر ناجي
 {
  Phone_Number: "9647883779551",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
  }, //ايمن بلال كامل
  {
    Phone_Number: "9647830820194",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
   }, //ضحى ياسين عواد
  {
    Phone_Number: "9647822223337",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
   }, //ياسين ناصر محمد
   {
    Phone_Number: "9647842424477",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 1",
    }, //هدى انور عساف
    {
    Phone_Number: "9647810593471",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
   }, //طيبه خليل اسماعيل
   {
    Phone_Number: "9647828327743",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
    }, //قادريه عدنان عزيز
    {
    Phone_Number: "9647874968401",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 4",
    }, //بركات محمد فارس
   {
    Phone_Number: "9647700099440",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 4",
    }, //عبد الله عقيل محمد فارس
   {
    Phone_Number: "9647866506040",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
    }, //تقوى فالح رشيد
    {
    Phone_Number: "9647827744064",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
    }, //حلا هيثم ابراهيم
   {
    Phone_Number: "9647779639763",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 4",
   }, //فؤاد ثامر عبد الله
   {
    Phone_Number: "9647752285876",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 2",
   }, //عبد الملك ثائر عواد
  {
    Phone_Number: "9647765514660",
    Governorate: "الأنبار",
    Dept_Name: "مديرية التسجيل العقاري في الفلوجة",
    Sub_Dept_Name: "شعبة 3",
    }, //امجد شهاب احمد
    ];
    let Result = Values.find(
      (Finding) => this.user.phone_num === Finding.Phone_Number,
    );

    if (Result) {
      document.getElementById("35490_group").style.display = "none";
      document.getElementById("35459_group").style.display = "block";

      //معلومات مدخل البيانات
      this.inputFormField.officesnames = Result.Dept_Name;
      document.getElementsByName("officesnames")[0].disabled = true;
      this.inputFormField.selecterff = Result.Sub_Dept_Name;
      document.getElementsByName("selecterff")[0].disabled = true;
      //ادخال القيود
      this.inputFormField.governorate = Result.Governorate;
      document.getElementsByName("governorate")[0].disabled = true;
      this.inputFormField.direcotorate = Result.Dept_Name;
      document.getElementsByName("direcotorate")[0].disabled = true;
    } else {
      document.getElementById("35490_group").style.display = "block";
      document.getElementById("35459_group").style.display = "none";

      document.getElementById("93127").style.display = "none"; //اسم المديرية او الملاحظية
      document.getElementById("93128").style.display = "none"; //الشعبة

      document.getElementById("93123").style.cssText =
        "color: #ff0000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
    }
  }

  //----------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الهمزة + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي
        }
      });
    }
  }

  var Fields_ID = [
    "92514", //الاسم الاول لمالك العقار
    "92515", //الاسم الثاني لمالك العقار
    "92516", //الاسم الثالث لمالك العقار
    "92545", //الاسم الرابع لمالك العقار
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية ورمز @
  function Arabic_One_Symbol_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // السماح بـ @ مرة واحدة فقط
        if (e.key === "@") {
          if (input.value.includes("@")) {
            e.preventDefault();
          }
          return;
        }

        // السماح بالأحرف العربية والمسافة فقط
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "92517", //اسم الام الاول
    "92546", //اسم اب الام
  ];
}