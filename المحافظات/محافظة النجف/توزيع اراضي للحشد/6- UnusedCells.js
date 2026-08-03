{
  if (this.tab_click == "form") {
    let Values = [
      { Selected_Values: "شهيد", Hide_Fields: ["87112", "87104", "88416"] },
      { Selected_Values: "جريح", Hide_Fields: ["87111", "87103"] },
    ];

    let Result = Values.find(
      (Finding) => this.form_data.naame === Finding.Selected_Values,
    );

    if (Result) {
      Result.Hide_Fields.forEach(
        (Hiding) =>
          (document.getElementById(Hiding).style.visibility = "collapse"),
      );
    }

    document.getElementById("87105").style.visibility = "collapse"; //مكان الاستشهاد
  }
}
