{
  document.getElementsByName("ThePoints")[0].disabled = true;

  for (let i = 33718; i <= 33737; i++) {
    document.getElementById(`${i}_group`).style.display = "none";
  }

  var programmingName = [
    "FirstNameA",
    "SecondNameA",
    "ThirdNameA",
    "FourthName",
    "Mothersname",
    "Motherfathername",
    "Maternalgrandsfathername",
    "genderA",
    "Placeofbirth",
    "ageA",
    "RelationA",
    "StatusA",
    "AcademicA",
    "JobA",
    "OccupationA",
    "SalaryA",
    "DisabilityA",
  ];

  for (var i = 0; i < programmingName.length; i++) {
    document.getElementsByName(programmingName[i])[0].disabled = true;
  }
}
