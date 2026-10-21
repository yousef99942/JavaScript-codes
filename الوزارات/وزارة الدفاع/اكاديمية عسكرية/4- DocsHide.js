{
  if (
    this.form_data.people === "نعم" ||
    this.form_data.Tittel === "منتسب/ عسكري / مرتب" ||
    this.form_data.Tittel === "ضابط"
  ) {
    document.getElementsByClassName("48209")[0].style.display = "block";
  } else {
    this.group_of_docs[PlaceNum].fields.forEach((field) => {
      if (field.name === "docpeople") field.document_id = null;
    });
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
