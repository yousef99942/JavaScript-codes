{
  if (this.form_data.gender == "انثى") {
    if (this.form_data.status == "ارمل / ارملة") {
      document.getElementsByClassName("46338")[0].style.display = "none"; //وثيقة الطلاق
    } else if (this.form_data.status == "مطلق / مطلقة") {
      document.getElementsByClassName("46337")[0].style.display = "none"; //شهادة الوفاة
    } else {
      document.getElementsByClassName("46338")[0].style.display = "none"; //وثيقة الطلاق
      document.getElementsByClassName("46337")[0].style.display = "none"; //شهادة الوفاة
    }
  } else {
    document.getElementsByClassName("46338")[0].style.display = "none"; //وثيقة الطلاق
    document.getElementsByClassName("46337")[0].style.display = "none"; //شهادة الوفاة
  }

  if (this.form_data.transport == "نقل داخل المحافظة") {
    document.getElementById("34037_group").style.display = "none"; // التنقل من باقي المحافظات الى محافظة البصرة
    document.getElementById("34075_group").style.display = "none"; // التنقل خارج محافظة البصرة
  }

  if (this.form_data.transport == "نقل من محافظة البصرة الى محافظة اخرى") {
    document.getElementById("34779_group").style.display = "none"; // التنقل داخل محافظة البصرة
    document.getElementById("34037_group").style.display = "none"; // التنقل من باقي المحافظات الى محافظة البصرة
  }

  if (this.form_data.transport == "نقل من محافظة اخرى الى محافظة البصرة") {
    document.getElementById("34779_group").style.display = "none"; // التنقل داخل محافظة البصرة
    document.getElementById("34075_group").style.display = "none"; // التنقل خارج محافظة البصرة
  }
}
