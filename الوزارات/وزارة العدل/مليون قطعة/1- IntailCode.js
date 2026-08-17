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
        Phone_Number: "9647709941547",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الرصافة الاولى",
        Sub_Dept_Name: "شعبة 1",
      }, //محمد غسان
      {
        Phone_Number: "9647811911618",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الاولى",
        Sub_Dept_Name: "شعبة 1",
      }, //يوسف
      {
        Phone_Number: "9647707843772",
        Governorate: "بغداد",
        Dept_Name: "التسجيل العقاري العامة",
        Sub_Dept_Name: "العامة",
      },
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
        Sub_Dept_Name: "الشعبة 1",
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
        Sub_Dept_Name: "الشعبة2",
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
        Sub_Dept_Name: "الشعبة3",
      }, //سمية كريم غانم
      {
        Phone_Number: "96477143448449",
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
        Sub_Dept_Name: "الشعبة4",
      }, //سيف غالب الياس
      {
        Phone_Number: "9647723534685",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة4",
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
        Phone_Number: "96477359440473",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
        Sub_Dept_Name: "الشعبة1",
      }, //اية صباح مبارك
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
        Dept_Name: "امديرية التسجيل العقاري الثالثة في البصرة",
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
        Phone_Number: "9647702371253",
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
        Phone_Number: "9647716455799",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري كركوك 2",
        Sub_Dept_Name: "شعبة2",
      }, //سناريا توفيق محمد
      {
        Phone_Number: "",
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
        Phone_Number: "964772315592",
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
        Phone_Number: "964",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في التون كوبري",
        Sub_Dept_Name: "ملاحظية التون كوبري",
      }, //جانان جمعة عباس
      {
        Phone_Number: "964",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية التسجيل العقاري في التون كوبري",
        Sub_Dept_Name: "ملاحظية التون كوبري",
      }, //ايوب فارس عدنان
      {
        Phone_Number: "964",
        Governorate: "كركوك",
        Dept_Name: "مديرية التسجيل العقاري في كركوك1",
        Sub_Dept_Name: "شعبة1",
      }, //نبيلة عيسى عبد
      {
        Phone_Number: "964",
        Governorate: "كركوك",
        Dept_Name: "ملاحظية الحويجة",
        Sub_Dept_Name: "ملاحظية الحويجة",
      }, //احمد طه عبد
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
        Phone_Number: "964770602235",
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
        Phone_Number: "96478086666748",
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
        Phone_Number: "9647819921647",
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
        Phone_Number: "964773245793",
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
        Phone_Number: "964777707487",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //شيماء جاسم نصيف
      {
        Phone_Number: "96477026340856",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في المدائن",
        Sub_Dept_Name: "شعبة2",
      }, //الاء كاظم راجي
      {
        Phone_Number: "9647714221300",
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
        Phone_Number: "96477",
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
        Phone_Number: "9647728516372",
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
        Dept_Name: "ملاحظية التسجيل العقاري في الرصافة1",
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
        Sub_Dept_Name: "شعبة1",
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
        Phone_Number: "964807918770",
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
        Phone_Number: "9647700671955",
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
        Sub_Dept_Name: "شعبة",
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
        Phone_Number: "964773434173",
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
        Phone_Number: "9647803406024",
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
        Phone_Number: "9647718618334",
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
        Phone_Number: "9647727179974",
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
        Phone_Number: "9647748872808",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الثانية",
        Sub_Dept_Name: "شعبة3",
      }, //اية علي عواد
      {
        Phone_Number: "9647902924788",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //هند علي حمزة
      {
        Phone_Number: "9647767069716",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //هدير سعدون عبد
      {
        Phone_Number: "9647721425405",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //علي عبد الرزاق جبار
      {
        Phone_Number: "9647718593054",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //ميثم قاسم هاشم
      {
        Phone_Number: "9647726007038",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //عمار رعد جاسم
      {
        Phone_Number: "9647718053834",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //ايناس مسلم عبيد عريبي
      {
        Phone_Number: "9647761715347",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //زهراء رعد عبد الواحد
      {
        Phone_Number: "9647856689221",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة4",
      }, //رسل سرحان عواد ذياب
      {
        Phone_Number: "9647804408084",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //اكرام عبد الكريم خيطان
      {
        Phone_Number: "9647734295008",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //نورا فاضل عبد العباس
      {
        Phone_Number: "9647716472232",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //اية بهاء شاكر
      {
        Phone_Number: "9647777639224",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //غفران محمد كاظم
      {
        Phone_Number: "9647718742515",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة3",
      }, //ضحى ضمير عيسى
      {
        Phone_Number: "96477248811500",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //منتظر رعد غازي
      {
        Phone_Number: "9647805958700",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //مها جعفر صادق
      {
        Phone_Number: "9647746100331",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //رسل منذر رحمان
      {
        Phone_Number: "9647714249424",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //محمد رائد خليف
      {
        Phone_Number: "9647725945119",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة1",
      }, //امير ثامر يوسف
      {
        Phone_Number: "9647716680568",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //اصيل حيدر ضياء
      {
        Phone_Number: "9647704684426",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //امير علاء عبد المجيد
      {
        Phone_Number: "9647711171930",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //حنين سمير هلال
      {
        Phone_Number: "9647803031334",
        Governorate: "بغداد",
        Dept_Name: "مديرية الكاظمية الأولى",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء علي سلمان
      {
        Phone_Number: "9647724529460",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //زينب نعيمه حسين حسون
      {
        Phone_Number: "9647713267326",
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
        Phone_Number: "9647775971401",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //هبه كاظم تالي
      {
        Phone_Number: "9647713346982",
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
        Phone_Number: "9647742845746",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة1",
      }, //هند سمير عباس
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
        Sub_Dept_Name: "شعبة2",
      }, //حوراء محمد حسين
      {
        Phone_Number: "9647724948399",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //اسراء اياد خالد
      {
        Phone_Number: "9647712889420",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //زهراء وليد بلبول
      {
        Phone_Number: "9647727236103",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة2",
      }, //طيف علي محمد
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
        Phone_Number: "9647742845746",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //هند سمير عباس
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
        Phone_Number: "9647710069433",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //نور خالد محمد
      {
        Phone_Number: "9647715884230",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //اروى صالح عبد الله
      {
        Phone_Number: "9647766902295",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "شعبة3",
      }, //ضحى علي كاظم
      {
        Phone_Number: "96477029310538",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري في الزهور بغداد",
        Sub_Dept_Name: "3شعبة",
      }, //طيبه منذر عبد الكريم ..تم نقلها من الاعظمية
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
        Dept_Name: "مديرية التسجيل العقاري في الصدر الاولى",
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
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة1",
      }, //ميادة يوسف خلف حسين
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة1",
      }, //ندى حسين ياس خضير
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة1",
      }, //مصطفى فراس حسن احمد
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة2",
      }, //عبدالمنعم محمد معتوق صافي
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة2",
      }, //مهج مروان قاسم الناصري
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة2",
      }, //دعاء مظهر سالم محمد
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة2",
      }, //وائل علي عواد يوسف
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة3",
      }, //محمد اسماعيل صالح عبدالله
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة3",
      }, //هديل مازن فاضل خطاب
      {
        Phone_Number: "964",
        Governorate: "صلاح الدين",
        Dept_Name: "مديرية التسجيل العقاري في صلاح الدين",
        Sub_Dept_Name: "شعبة3",
      }, //غفران انمار محمود خليل
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
