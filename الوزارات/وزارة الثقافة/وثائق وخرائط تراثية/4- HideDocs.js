{
  if (this.form_data.selecting == "موظف") {
    document.getElementsByClassName("46814")[0].style.display = "none"; //تأييد جامعة بالنسبة للطالب
  }

  if (this.form_data.selecting == "طالب") {
    document.getElementsByClassName("47300")[0].style.display = "none"; //طلب موافقة المدير العام
    document.getElementsByClassName("47586")[0].style.display = "none"; //هوية الدائرة
  }

  if (this.form_data.selecting == "مواطن") {
    document.getElementsByClassName("46814")[0].style.display = "none"; //تأييد جامعة بالنسبة للطالب
    document.getElementsByClassName("47300")[0].style.display = "none"; //طلب موافقة المدير العام
    document.getElementsByClassName("47586")[0].style.display = "none"; //هوية الدائرة
  }
}
