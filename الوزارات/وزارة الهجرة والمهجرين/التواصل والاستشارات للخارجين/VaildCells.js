{
  if (this.inputFormField.nameimg == "اخرى") {
    if (
      this.inputFormField["nameczx"] == null ||
      this.inputFormField["nameczx"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.nameljhs == "نعم") {
    if (
      this.inputFormField["namweer"] == null ||
      this.inputFormField["namweer"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Namem == "نعم") {
    if (
      this.inputFormField["Nameea"] == null ||
      this.inputFormField["Nameea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }
  }

  var Wanted_Value = this.inputFormField.IhName;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى") {
        if (
          this.inputFormField["OtherService"] == null ||
          this.inputFormField["OtherService"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`
          );
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  var location = this.inputFormField.IraqiLocation; // Should contain latitude and longitude as separate values
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

  if (isValid) {
    this.evalErr.push("عذراً، التقديم للعراقين المقيمين في خارج العراق فقط");
  }
}
