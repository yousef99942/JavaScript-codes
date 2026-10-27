{
    if (this.inputFormField.hhm == "اجازة جديدة") {
        if (
            this.inputFormField["vrl"] == null ||
            this.inputFormField["vrl"] == ""
        ) {
            this.evalErr.push("مطلوب رقم الاجازة)");                
        }
   }

    if (this.inputFormField.hhm == "تجديد الاجازة" || this.inputFormField.hhm == "تعديل اجازة") {
        if (this.inputFormField.ert == null) {
            this.evalErr.push("مطلوب في حالة طلب التجديد أو التعديل يجب تحديد المتغيرات التي طرأت على المؤسسة)");                
        }
    }
}