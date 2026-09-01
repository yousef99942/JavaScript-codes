{
  if (this.inputFormField.namerr == "أخرى") {
    if (
      this.inputFormField["nameasa"] == null ||
      this.inputFormField["nameasa"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.namesek == "نعم") {
    if (
      this.inputFormField["nameseek"] == null ||
      this.inputFormField["nameseek"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.nameea == "نعم") {
    if (
      this.inputFormField["nameeea"] == null ||
      this.inputFormField["nameeea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`,
      );
    }
  }

  var Wanted_Value = this.inputFormField.nameincom;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "أخرى") {
        if (
          this.inputFormField["namewww"] == null ||
          this.inputFormField["namewww"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[24].label} مطلوب`,
          );
        }
      }
    }
  }

  var location = this.inputFormField.IraqiPeopleLocation; // Should contain latitude and longitude as separate values
  console.log(location);
  // Define the boundary coordinates
  const minLatitude = 32.2209265;
  const maxLatitude = 34.2209265;
  const minLongitude = 42.6847595;
  const maxLongitude = 45.6847595;

  // Extract the latitude and longitude from the input (assuming it's an array or string you can split)
  var latitude = location.x;
  var longitude = location.y;

  // Check if the location is within range
  const isValid =
    latitude >= minLatitude &&
    latitude <= maxLatitude &&
    longitude >= minLongitude &&
    longitude <= maxLongitude;

  if (!isValid) {
    this.evalErr.push("عذراً، التقديم للعراقين العائدين من الخارج فقط");
  }
}
