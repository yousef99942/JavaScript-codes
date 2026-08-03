{
  if (this.form_data.APIContain != "نعم") {
    //مرفقات توضح الية العمل الخاصة بالتكامل بصيغة Word (ان وجدت)
    document.getElementsByClassName("46357")[0].style.display = "none";
    //مرفقات توضح الية العمل الخاصة بالتكامل بصيغة PDF (ان وجدت)
    document.getElementsByClassName("46358")[0].style.display = "none";
    //مرفقات توضح الية العمل الخاصة بالتكامل بصيغة Excel (ان وجدت)
    document.getElementsByClassName("46359")[0].style.display = "none";
    //مرفقات توضح الية العمل الخاصة بالتكامل بصيغة Image (ان وجدت)
    document.getElementsByClassName("46360")[0].style.display = "none";
  }

  if (this.form_data.OfficalSend == "كلا") {
    //نسخة من مخاطبة المركز الوطني (ايميل او كتاب)
    document.getElementsByClassName("46592")[0].style.display = "none";
  }
}
