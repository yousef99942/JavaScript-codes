{
  if (this.form_data.buildingtype != "صناعي") {
    document.getElementById("34932_group").style.display = "none";
  }

  if (this.form_data.owner != "شريك في العقار") {
    document.getElementsByClassName("47050")[0].style.display = "none"; //مستمسكات الشركاء
    document.getElementsByClassName("47051")[0].style.display = "none"; //موافقة الشركاء
  }
}
