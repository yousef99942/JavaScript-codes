//Write your code here
{
  function hidingFields(groupID) {
    for (let i = 1; i <= 4; i++) {
      if (i != groupID) {
        document.getElementById(`${this.group_of_form[i].id}_group`).hidden =
          true;
      }
    }
  }

  if (this.tab_click === "form") {
    // اخفاء فورمات
    const loanType = this.form_data.loantype;
    if (loanType == "قرض تجاري (للمشاريع الصغيرة)") {
      hidingFields.call(this, 1);
    } else if (loanType == "قرض زراعي (للأفراد)") {
      hidingFields.call(this, 2);
    } else if (loanType == "قرض لشراء منظومة طاقة متجددة") {
      hidingFields.call(this, 3);
    } else if (loanType == "قرض لشراء السيارات (للمواطنين والموظفين)") {
      hidingFields.call(this, 4);
    }
    //التابعة لكل الفورمات  labels اخفاء
    document.getElementById("51966").style.display = "none";
    document.getElementById("51968").style.display = "none";
    document.getElementById("70253").style.display = "none";
    document.getElementById("72302").style.display = "none";
  }
}
