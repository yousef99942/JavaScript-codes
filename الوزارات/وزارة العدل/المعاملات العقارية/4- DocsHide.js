{
  if (this.form_data.haiderdida === "وكيله") {
    document.getElementsByClassName("23591")[0].style.display = "block";
  }

  //المرفقات الي تختفي من كل الخدمة
  document.getElementsByClassName("23589")[0].style.display = "none"; //هوية الاحوال او البطاقة الموحدة للمتصرف الثاني للعقار او وكيله الوجه الاول
  document.getElementsByClassName("23590")[0].style.display = "none"; //هوية الاحوال او البطاقة الموحدة للمتصرف الثاني للعقار او وكيله  الوجه  الثاني
  document.getElementsByClassName("23592")[0].style.display = "none"; //وكالة للمتصرف الثاني للعقار
}
