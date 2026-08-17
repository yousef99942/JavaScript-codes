{
  getType(event) {
    const Fields_Progs = [
        "Date",              // النفاذيه
        "ContractNumber",    // رقم العقد
        "startDate",         // تاريخ المباشرة
        "EndDate",           // تاريخ الانجاز
        "pledgeNu",          // قيمة التعهد رقما
        "pledge",            // قيمة التعهد كتابه
        "receivedNu",        // رقم وصل التسديد
        "receivedDate",      // تاريخ الوصل
        "tabelOne",          // معلومات البائع
        "tabel",             // معلومات المشتري
        "Name",              // اسم مقدم الطلب / المخول
        "Position",          // الصفة القانونية
        "companyName",       // اسم الشركة
        "Number",            // رقم الاضبارة
        "Year",              // السنة المالية
        "taxNumber",         // الرقم الضريبي
        "side",              // الجهة المتعاقد معها
    ];
    
    Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);

    if (event == 'صرف مستحقات') {
        document.getElementById("72894").style.display = "block";  // النفاذيه
        document.getElementById("72896").style.display = "block";  // رقم العقد
        document.getElementById("73717").style.display = "block";  // تاريخ المباشرة 
        document.getElementById("73718").style.display = "block";  // تاريخ الانجاز 
        document.getElementById("73719").style.display = "block";  //قيمة التعهد رقما 
        document.getElementById("73721").style.display = "block";  // قيمة التعهد كتابتا 
        document.getElementById("73722").style.display = "block";  // رقم الوصل 
        document.getElementById("73723").style.display = "block";  // تاريخ الوصل 
        document.getElementById("72898").style.display = "block";  // الجهة المتعاقد معها 
        document.getElementById("72888").style.display = "block";  // اسم الشركة 
        document.getElementById("72892").style.display = "block";  // رقم الاضبارة 
        document.getElementById("72893").style.display = "block";  // السنة المالية 
        document.getElementById("72889").style.display = "block";  // الرقم الضريبي 
        document.getElementById("73726").style.display = "none";   // معلومات البائع 
        document.getElementById("73727").style.display = "none";   // معلومات المشتري 
        document.getElementById("72890").style.display = "none";   // مقدم الطلب 
        document.getElementById("72891").style.display = "none";   // الصفه القانونية 
    } else if(event == 'بيع وشراء اسهم شركات') {
        document.getElementById("72894").style.display = "none";  // النفاذيه
        document.getElementById("72896").style.display = "none";  // رقم العقد
        document.getElementById("73717").style.display = "none";  // تاريخ المباشرة 
        document.getElementById("73718").style.display = "none";  // تاريخ الانجاز 
        document.getElementById("73719").style.display = "none";  //قيمة التعهد رقما 
        document.getElementById("73721").style.display = "none";  // قيمة التعهد كتابتا 
        document.getElementById("73722").style.display = "none";  // رقم الوصل 
        document.getElementById("73723").style.display = "none";  // تاريخ الوصل 
        document.getElementById("72898").style.display = "block"; // الجهة المتعاقد معها 
        document.getElementById("72888").style.display = "block"; // اسم الشركة 
        document.getElementById("72892").style.display = "block"; // رقم الاضبارة 
        document.getElementById("72893").style.display = "block"; // السنة المالية 
        document.getElementById("72889").style.display = "block"; // الرقم الضريبي 
        document.getElementById("73726").style.display = "block"; // معلومات البائع 
        document.getElementById("73727").style.display = "block"; // معلومات المشتري 
        document.getElementById("72890").style.display = "none";  // مقدم الطلب 
        document.getElementById("72891").style.display = "none";  // الصفه القانونية 
    } else if(event == 'تصديق وكالة' || event =='تسجيل وبيع مركبات') {
        document.getElementById("72894").style.display = "none";  // النفاذيه
        document.getElementById("72896").style.display = "none";  // رقم العقد
        document.getElementById("73717").style.display = "none"; // تاريخ المباشرة 
        document.getElementById("73718").style.display = "none"; // تاريخ الانجاز 
        document.getElementById("73719").style.display = "none"; //قيمة التعهد رقما 
        document.getElementById("73721").style.display = "none"; // قيمة التعهد كتابتا 
        document.getElementById("73722").style.display = "none"; // رقم الوصل 
        document.getElementById("73723").style.display = "none"; // تاريخ الوصل 
        document.getElementById("72898").style.display = "block"; // الجهة المتعاقد معها 
        document.getElementById("72888").style.display = "block"; // اسم الشركة 
        document.getElementById("72892").style.display = "block"; // رقم الاضبارة 
        document.getElementById("72893").style.display = "block"; // السنة المالية 
        document.getElementById("72889").style.display = "block"; // الرقم الضريبي 
        document.getElementById("73726").style.display = "none"; // معلومات البائع 
        document.getElementById("73727").style.display = "none"; // معلومات المشتري 
        document.getElementById("72890").style.display = "block"; // مقدم الطلب 
        document.getElementById("72891").style.display = "block"; // الصفه القانونية 
    } else if(event == 'عدم ممانعة') {
        document.getElementById("72894").style.display = "none";  // النفاذيه
        document.getElementById("72896").style.display = "none";  // رقم العقد
        document.getElementById("73717").style.display = "none"; // تاريخ المباشرة 
        document.getElementById("73718").style.display = "none"; // تاريخ الانجاز 
        document.getElementById("73719").style.display = "none"; //قيمة التعهد رقما 
        document.getElementById("73721").style.display = "none"; // قيمة التعهد كتابتا 
        document.getElementById("73722").style.display = "none"; // رقم الوصل 
        document.getElementById("73723").style.display = "none"; // تاريخ الوصل 
        document.getElementById("72898").style.display = "block"; // الجهة المتعاقد معها 
        document.getElementById("72888").style.display = "block"; // اسم الشركة 
        document.getElementById("72892").style.display = "block"; // رقم الاضبارة 
        document.getElementById("72893").style.display = "block"; // السنة المالية 
        document.getElementById("72889").style.display = "block"; // الرقم الضريبي 
        document.getElementById("73726").style.display = "none"; // معلومات البائع 
        document.getElementById("73727").style.display = "none"; // معلومات المشتري 
        document.getElementById("72890").style.display = "block"; // مقدم الطلب 
        document.getElementById("72891").style.display = "block"; // الصفه القانونية 
    }else {
        document.getElementById("72888").style.display = "block";
        document.getElementById("72898").style.display = "block";
        document.getElementById("72892").style.display = "block";
        document.getElementById("72893").style.display = "block";
        document.getElementById("72889").style.display = "block";
        document.getElementById("72894").style.display = "none";
        document.getElementById("72896").style.display = "none";
        document.getElementById("73717").style.display = "none";
        document.getElementById("73718").style.display = "none";
        document.getElementById("73719").style.display = "none";
        document.getElementById("73721").style.display = "none";
        document.getElementById("73722").style.display = "none";
        document.getElementById("73723").style.display = "none";
        document.getElementById("73726").style.display = "none";
        document.getElementById("73727").style.display = "none";
        document.getElementById("72890").style.display = "none";
        document.getElementById("72891").style.display = "none";
   } 
  }
}