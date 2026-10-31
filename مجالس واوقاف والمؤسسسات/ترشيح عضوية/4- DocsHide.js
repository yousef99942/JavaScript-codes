{
    if (this.form_data.EmpType === "موظف سابق") {
        document.getElementsByClassName("22039")[0].style.display = "block"; //السيرة الذاتية المحدثة معززة بالوثائق الثبوتية PDF
    }

    if (this.form_data.EmpType === "موظف مستمر") {
        document.getElementsByClassName("22042")[0].style.display = "block"; //خلاصة الخدمة مختومة بختم الدائرة
    }
}