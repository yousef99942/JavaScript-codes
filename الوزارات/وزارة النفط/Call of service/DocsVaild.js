{
  //first group of attachs
  var FirstGroup = [
      ["CompanyOwnedAttach"],
      ["GovermentOwnAttach"],
      ["CourtOrdersAttach"],
      ["Others"],
    ],
    //second group of attachs
    SecondGroup = [
      ["FirstAttach"],
      ["SecondAttach"],
      ["ThridAttach"],
      ["FourthAttach"],
      ["FifthAttach"],
      ["SixthAttach"],
      ["SeventhAttach"],
      ["eigthAttach"],
      ["ninthAttach"],
      ["TenthAttach"],
      ["eleventhAttach"],
      ["twelevethAttach"],
      ["thirteenthAttach"],
      ["fourteenAttach"],
    ],
    ThirdGroup = [
      ["ExecutedOrders"],
      ["MatiralSupply"],
      ["PhotographyRestrictions"],
      ["ApprovedItems"],
    ],
    FourthGroup = [
      ["SpareParts"],
      ["SystemsProvideing"],
      ["FirstAvailability"],
      ["SecondAvailability"],
    ],
    FifthGroup = [["FirstQuailtyAttach"],];
  var numbers = [0, 1, 2, 3, 4];

  // Function to handle document validation
  function validateDocuments(docsArray, PlaceNum) {
    // Loop through the docs array and validate each document field
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find matching ones and validate
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (field.name == docKey) {
            // If no files uploaded, or document ID is null, add error
            if (
              this.inputDocsField[docKey].files.length === 0 &&
              field.document_id == null
            ) {
              this.evalErr.push(`الحقل ${field.label} مطلوب`);
            }
          }
        });
      } else {
        // If the document doesn't exist in inputDocsField, mark as required
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  // Validate based on the form conditions
  //First group of attachs
  if (this.form_data.CompenyOwned == "Yes") {
    validateDocuments.call(this, FirstGroup[0], numbers[0]);
  }

  if (this.form_data.GovermentOwned == "Yes") {
    validateDocuments.call(this, FirstGroup[1], numbers[0]);
  }

  if (this.form_data.CourtOrders == "Yes") {
    validateDocuments.call(this, FirstGroup[2], numbers[0]);
  }

  if (this.form_data.CZDCD == "YES") {
    validateDocuments.call(this, FirstGroup[3], numbers[0]);
  }

  //Second Group of attachs
  if (this.form_data.jjihg == "Yes") {
    validateDocuments.call(this, SecondGroup[0], numbers[1]);
  }

  if (this.form_data.uuguf == "Yes") {
    validateDocuments.call(this, SecondGroup[1], numbers[1]);
  }

  if (this.form_data.GGF == "YES") {
    validateDocuments.call(this, SecondGroup[2], numbers[1]);
  }

  if (this.form_data.UYRY == "YES") {
    validateDocuments.call(this, SecondGroup[3], numbers[1]);
  }

  if (this.form_data.HJGJ == "YES") {
    validateDocuments.call(this, SecondGroup[4], numbers[1]);
  }

  if (this.form_data.EFSSF == "YES") {
    validateDocuments.call(this, SecondGroup[5], numbers[1]);
  }

  if (this.form_data.JHHG == "YES") {
    validateDocuments.call(this, SecondGroup[6], numbers[1]);
  }

  if (this.form_data.FESDFS == "YES") {
    validateDocuments.call(this, SecondGroup[7], numbers[1]);
  }

  if (this.form_data.JHJG == "Yes") {
    validateDocuments.call(this, SecondGroup[8], numbers[1]);
  }

  if (this.form_data.ADAS == "YES") {
    validateDocuments.call(this, SecondGroup[9], numbers[1]);
  }

  if (this.form_data.GHJ == "YES") {
    validateDocuments.call(this, SecondGroup[10], numbers[1]);
  }

  if (this.form_data.CSDSC == "YES") {
    validateDocuments.call(this, SecondGroup[11], numbers[1]);
  }

  if (this.form_data.FGDGD == "YES") {
    validateDocuments.call(this, SecondGroup[12], numbers[1]);
  }

  if (this.form_data.FKG == "YES") {
    validateDocuments.call(this, SecondGroup[13], numbers[1]);
  }

  if (this.form_data.OJHFF == "YES") {
    validateDocuments.call(this, ThirdGroup[0], numbers[2]);
  }

  if (this.form_data.poium == "Yes") {
    validateDocuments.call(this, ThirdGroup[1], numbers[2]);
  }

  if (this.form_data.GFCCX == "YES") {
    validateDocuments.call(this, ThirdGroup[2], numbers[2]);
  }

  if (this.form_data.BHIY == "YES") {
    validateDocuments.call(this, ThirdGroup[3], numbers[2]);
  }

  if (this.form_data.POYUH == "Yes") {
    validateDocuments.call(this, FourthGroup[0], numbers[3]);
  }

  if (this.form_data.NBCFF == "YES") {
    validateDocuments.call(this, FourthGroup[1], numbers[3]);
  }

  if (this.form_data.NBYT == "YES") {
    validateDocuments.call(this, FourthGroup[2], numbers[3]);
  }

  if (this.form_data.EFREGE == "YES") {
    validateDocuments.call(this, FourthGroup[3], numbers[3]);
  }

  if (this.form_data.SADASC == "YES") {
    validateDocuments.call(this, FourthGroup[0], numbers[4]);
  }
}
