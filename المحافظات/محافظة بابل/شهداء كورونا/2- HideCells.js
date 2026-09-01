{
    Fifth_Hide(event) {
        this.inputFormField["numberw"] = null; //عدد الزوجات
        this.inputFormField["numberch"] = null; // عدد الأطفال
        this.inputFormField["Wife"] = null; //اسم الزوجة
        if (event == "متزوج/متزوجة") {
            document.getElementById("89881").style.display = "block"; //عدد الزوجات
            document.getElementById("94930").style.display = "block"; //اسم الزوجة
            document.getElementById("89882").style.display = "block"; // عدد الأطفال
        } else {
            document.getElementById("89882").style.display = "none"; //عدد الأطفال
            document.getElementById("94930").style.display = "none"; //اسم الزوجة
            document.getElementById("89881").style.display = "none"; //عدد الزوجات
        }
    }
}