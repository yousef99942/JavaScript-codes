{
  // Clear previous errors and styling
  this.evalErr = [];
  document.querySelectorAll(".error-field").forEach((el) => {
    el.classList.remove("error-field");
    const errorMsg = el.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains("error-message")) {
      errorMsg.remove();
    }
  });

  // Function to mark a field as invalid
  const markInvalid = (fieldName, errorMessage) => {
    this.evalErr.push(errorMessage);

    // Try to find the field in the DOM
    let fieldElement;

    // Check if it's a form control element (input, select, etc.)
    fieldElement =
      document.querySelector(`[name="${fieldName}"]`) ||
      document.querySelector(`[data-field="${fieldName}"]`);

    if (fieldElement) {
      fieldElement.classList.add("error-field");

      // Add error message if not already present
      if (
        !fieldElement.nextElementSibling ||
        !fieldElement.nextElementSibling.classList.contains("error-message")
      ) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.textContent = errorMessage;
        errorElement.style.color = "red";
        errorElement.style.fontSize = "0.8em";
        errorElement.style.marginTop = "5px";

        // Insert after the field
        fieldElement.parentNode.insertBefore(
          errorElement,
          fieldElement.nextSibling
        );
      }
    }
  };

  // Urban address validation
  if (this.inputFormField.environment == "حضر") {
    if (
      this.inputFormField.neighborhood[0] == null ||
      this.inputFormField.neighborhood[0] == ""
    ) {
      markInvalid("neighborhood", "حقل الحي مطلوب");
    }
    if (
      this.inputFormField.locality[1] == null ||
      this.inputFormField.locality[1] == ""
    ) {
      markInvalid("locality", "حقل المحلة مطلوب");
    }
    if (
      this.inputFormField["street"] == null ||
      this.inputFormField["street"] == ""
    ) {
      markInvalid("street", "حقل شارع/زقاق مطلوب");
    }
    if (
      this.inputFormField["Housenumber"] == null ||
      this.inputFormField["Housenumber"] == ""
    ) {
      markInvalid("Housenumber", "حقل رقم الدار مطلوب");
    }
  }

  // Rural address validation
  if (this.inputFormField.environment == "ريف") {
    if (
      this.inputFormField.boycott[0] == null ||
      this.inputFormField.boycott[0] == ""
    ) {
      markInvalid("boycott", "حقل المقاطعة مطلوب");
    }
    if (
      this.inputFormField.Village[1] == null ||
      this.inputFormField.Village[1] == ""
    ) {
      markInvalid("Village", "حقل القرية مطلوب");
    }
  }

  // Martyr kinship validation
  if (this.inputFormField.FamilyHaveaMartyr == "نعم") {
    if (
      this.inputFormField.Kinship == "" ||
      this.inputFormField.Kinship == null
    ) {
      markInvalid("Kinship", "حقل صلة القرابة مطلوب");
    }
  }

  // Birthdate validation
  //if (new Date(this.inputFormField.birthdate) > new Date()) {
  //markInvalid("birthdate", "يرجى إدخال تاريخ ميلاد صحيح");
  // }

  // Birthdate validation
  const birthdate = new Date(this.inputFormField.birthdate);
  const today = new Date();

  // حساب التاريخ المسموح به (اليوم ناقص 18 سنة)
  const minAllowedDate = new Date();
  minAllowedDate.setFullYear(today.getFullYear() - 18);

  // التحقق من الشروط
  if (birthdate > today || birthdate > minAllowedDate) {
    markInvalid("birthdate", "يجب أن يكون عمرك 18 سنة على الأقل وبتاريخ صحيح");
  }

  // Family members validation
  const numMembers = parseInt(this.inputFormField.NumberofFamilyMembers);
  const fieldPrefixes = "ABCDEFGHIJKLMNOPQRST".split(""); // A–T

  const fieldMessages = [
    { key: "FirstName", label: "الاسم الاول" },
    { key: "SecondName", label: "الاسم الثاني" },
    { key: "ThirdName", label: "الاسم الثالث" },
    { key: "gender", label: "الجنس" },
    { key: "age", label: "تاريخ ميلاد" },
    { key: "Relation", label: "علاقة الفرد برب الاسرة" },
    { key: "Status", label: "الحالة الاجتماعية" },
    { key: "Academic", label: "التحصيل الدراسي" },
    { key: "Job", label: "حالة العمل" },
    { key: "Salary", label: "مقدار الدخل" },
    { key: "Disability", label: "نوع الاعاقة" },
  ];

  // Arabic ordinals for 1 to 20
  const arabicOrdinals = [
    "الفرد الأول",
    "الفرد الثاني",
    "الفرد الثالث",
    "الفرد الرابع",
    "الفرد الخامس",
    "الفرد السادس",
    "الفرد السابع",
    "الفرد الثامن",
    "الفرد التاسع",
    "الفرد العاشر",
    "الفرد الحادي عشر",
    "الفرد الثاني عشر",
    "الفرد الثالث عشر",
    "الفرد الرابع عشر",
    "الفرد الخامس عشر",
    "الفرد السادس عشر",
    "الفرد السابع عشر",
    "الفرد الثامن عشر",
    "الفرد التاسع عشر",
    "الفرد العشرون",
  ];

  for (let i = 1; i < numMembers; i++) {
    const prefix = fieldPrefixes[i];
    const personLabel = arabicOrdinals[i];

    if (this.inputFormField.NumberofFamilyMembers != 1) {
      fieldMessages.forEach(({ key, label }) => {
        const fullKey = key + prefix;
        if (
          this.inputFormField[fullKey] == null ||
          this.inputFormField[fullKey].toString().trim() === ""
        ) {
          markInvalid(fullKey, `مطلوب ${label} لـ${personLabel}`);
        }
      });
    }

    const jobKey = "Job" + prefix;
    const occupationKey = "Occupation" + prefix;
    if (this.inputFormField[jobKey] === "أخرى") {
      if (
        this.inputFormField[occupationKey] == null ||
        this.inputFormField[occupationKey].toString().trim() === ""
      ) {
        markInvalid(occupationKey, `طبيعة العمل لـ${personLabel} مطلوب`);
      }
    }

    const ageKey = "age" + prefix;
    if (new Date(this.inputFormField[ageKey]) > new Date()) {
      markInvalid(ageKey, `يرجى إدخال تاريخ ميلاد صحيح لـ${personLabel}`);
    }
  }

  // Add CSS for error fields if not already present
  if (!document.querySelector("style#error-styles")) {
    const style = document.createElement("style");
    style.id = "error-styles";
    style.textContent = `
          .error-field {
            border: 2px solid red !important;
            animation: pulse 0.5s ease-in-out;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
        `;
    document.head.appendChild(style);
  }

  var CalculateValue = 0;
  if (this.inputFormField.Status == "متزوج") {
    CalculateValue += 5;
  } else if (
    this.inputFormField.Status == "مطلق" ||
    this.inputFormField.Status == "ارمل"
  ) {
    CalculateValue += 3;
  } else {
    CalculateValue += 0;
  }

  if (this.inputFormField.TradeOffValue != CalculateValue) {
    this.evalErr.push(`درجة المفاضلة الخاصة بك هي ${CalculateValue}`);
    this.evalErr.push(`اضغط حفظ واستمرار مرة اخرى للاستمرار`);

    this.inputFormField.TradeOffValue = CalculateValue;
  }
}
