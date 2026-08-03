{
  if (this.form_data.selecting == "موظف") {
    document.getElementsByClassName("46806")[0].style.display = "none"; //تأييد جامعة بالنسبة للطالب
  }

  if (this.form_data.selecting == "طالب") {
    document.getElementsByClassName("47301")[0].style.display = "none"; //طلب موافقة المدير العام
    document.getElementsByClassName("47592")[0].style.display = "none"; //هوية الدائرة
  }

  if (this.form_data.selecting == "مواطن") {
    document.getElementsByClassName("46806")[0].style.display = "none"; //تأييد جامعة بالنسبة للطالب
    document.getElementsByClassName("47301")[0].style.display = "none"; //طلب موافقة المدير العام
    document.getElementsByClassName("47592")[0].style.display = "none"; //هوية الدائرة
  }
}
