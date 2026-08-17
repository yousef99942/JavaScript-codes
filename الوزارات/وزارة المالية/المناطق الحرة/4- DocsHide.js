//Write your code here
{
  const applicantType = this.form_data.Applicant;
  if (applicantType == "شركات") {
    if (this.form_data.InvestType == "محلي") {
      document.getElementById("35420_group").style.display = "none";
      document.getElementById("35418_group").style.display = "none";
    } else if (this.form_data.InvestType == "اجنبي") {
      document.getElementById("11765_group").style.display = "none";
      document.getElementById("35418_group").style.display = "none";
    }
  } else if (applicantType == "افراد") {
    document.getElementById("11765_group").style.display = "none";
    document.getElementById("35420_group").style.display = "none";
    if (this.form_data.InvestType == "اجنبي") {
      document.getElementsByClassName("47703")[0].style.display = "none";
      document.getElementsByClassName("47704")[0].style.display = "none";
      document.getElementsByClassName("47705")[0].style.display = "none";
      document.getElementsByClassName("47706")[0].style.display = "none";
    }
  }

  if (this.form_data.sssddd != "صناعي") {
    document.getElementById("35552_group").style.display = "none";
  }
}
