{
  let Checking = [
    {
      Group_Number: 3,
      Group_Progs: ["nameee", "namee", "nameeee"],
      Fields_Locations: [0, 1, 2],
    }, //الملائمة
    {
      Group_Number: 4,
      Group_Progs: ["namese", "namerw"],
      Fields_Locations: [0, 1],
    }, //الكفاءة
    {
      Group_Number: 5,
      Group_Progs: ["namez", "nameb", "nameqp"],
      Fields_Locations: [0, 1, 2],
    }, //الفعالية
    {
      Group_Number: 6,
      Group_Progs: ["namexc", "namerty", "nametz", "namepoiu"],
      Fields_Locations: [0, 1, 2, 3],
    }, //الاثر
    {
      Group_Number: 7,
      Group_Progs: ["namertyi", "namezaidf"],
      Fields_Locations: [0, 1],
    }, //الأستدامة
  ];

  if (this.inputFormField.sagashen == "نعم") {
    Checking.forEach((Hello) => {
      for (var i = 0; i < Hello.Group_Progs.length; i++) {
        if (
          this.inputFormField[Hello.Group_Progs[i]] == "" ||
          this.inputFormField[Hello.Group_Progs[i]] == null
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[Hello.Group_Number].fields[Hello.Fields_Locations[i]].label} مطلوب`,
          );
        }
      }
    });
  }

  if (this.inputFormField.sagashen == "كلا") {
    if (
      this.inputFormField["bocos"] == "" ||
      this.inputFormField["bocos"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }
  }
}
