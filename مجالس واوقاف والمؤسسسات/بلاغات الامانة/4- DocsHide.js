{
  document.getElementsByClassName("34750")[0].style.display = "none"; //المرفقات ان وجدت (pdf)
  document.getElementsByClassName("46704")[0].style.display = "none"; //المرفقات ان وجدت (img)

  if (this.form_data.DocsFound == "كلا") {
    document.getElementById("33394_group").style.display = "none"; //اوليات البلاغ
  }
}
