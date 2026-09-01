{
  // تحديد يوم محدد من الأسبوع ومنع اختيار أي تاريخ قبل اليوم
  function Date_Limit(Field_ID, Field_Prog, Min_Date, Max_Date, Week_Day) {
    const Field = document.getElementsByName(Field_Prog)[0];

    if (!Field) {
      console.error(`Field with name "${Field_Prog}" not found`);
      return;
    }

    // منع الكتابة اليدوية
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });

    // تاريخ اليوم (منتصف الليل، بدون وقت)
    const Today = new Date();
    const Today_Midnight = new Date(
      Today.getFullYear(),
      Today.getMonth(),
      Today.getDate(),
    );

    const Today_Year = Today.getFullYear();
    const Today_Month = String(Today.getMonth() + 1).padStart(2, "0");
    const Today_Day = String(Today.getDate()).padStart(2, "0");
    const Today_String = `${Today_Year}-${Today_Month}-${Today_Day}`;

    // نستخدم تاريخ اليوم إذا كان Min_Date أقدم منه
    const Real_Min_Date = Min_Date < Today_String ? Today_String : Min_Date;

    // الحصول على يوم الأسبوع لتاريخ البداية الحقيقي
    const Min = new Date(Real_Min_Date + "T00:00:00");
    const Current_Day = Min.getDay();

    let Difference = Week_Day - Current_Day;
    if (Difference < 0) {
      Difference += 7;
    }

    // أول تاريخ مسموح يطابق اليوم المطلوب
    const First_Allowed_Date = new Date(Min);
    First_Allowed_Date.setDate(Min.getDate() + Difference);

    const Year = First_Allowed_Date.getFullYear();
    const Month = String(First_Allowed_Date.getMonth() + 1).padStart(2, "0");
    const Day = String(First_Allowed_Date.getDate()).padStart(2, "0");
    const First_Allowed_Date_String = `${Year}-${Month}-${Day}`;

    // تحديد الحدود
    Field.setAttribute("min", First_Allowed_Date_String);
    Field.setAttribute("max", Max_Date);

    // السماح بنفس اليوم من الأسابيع التالية
    Field.setAttribute("step", "7");

    // التحقق النهائي عند التغيير
    Field.addEventListener("change", function () {
      if (!this.value) return;

      const Selected_Date = new Date(this.value + "T00:00:00");

      const Is_Before_Today = Selected_Date < Today_Midnight;
      const Is_Wrong_Day = Selected_Date.getDay() !== Week_Day;

      if (Is_Before_Today || Is_Wrong_Day) {
        alert("يجب اختيار يوم مسموح به ابتداءً من تاريخ اليوم");
        this.value = "";
      }
    });
  }

  Date_Limit(
    "94203",
    "dateOfTheInterview",
    `${new Date().getFullYear()}-01-01`,
    `${new Date().getFullYear() + 1}-12-31`,
    3,
  );
}
