{
  if (
    this.form_data.people === "نعم" ||
    this.form_data.Tittel === "منتسب/ عسكري / مرتب"
  ) {
    document.getElementsByClassName("48209")[0].style.display = "block";
  }

  let Selected_Value = [
    "الدبلوم العالي",
    "البكالوريوس",
    "الماجستير",
    "الدكتوراه",
    "الدبلوم",
  ];

  if (Selected_Value.includes(this.form_data.Certi)) {
    document.getElementsByClassName("48210")[0].style.display = "block";
  }
}
