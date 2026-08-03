{
  if (this.form_data.ownertype != "شريك في العقار") {
    document.getElementsByClassName("47129")[0].style.display = "none"; //مستمسكات الشركاء
    document.getElementsByClassName("47130")[0].style.display = "none"; //موافقة الشركاء
  }

  if (this.form_data.buildingtype != "صناعي") {
    document.getElementById("34979_group").style.display = "none";
  }
}
