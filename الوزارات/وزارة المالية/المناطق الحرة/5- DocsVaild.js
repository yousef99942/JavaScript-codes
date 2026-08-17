//Write your code here
{
  //validation for documents
  const applicantType = this.form_data.Applicant;
  const investType = this.form_data.InvestType;

  if (applicantType == "شركات") {
    const Docs = {
      محلي: ["id", "idd", "ch", "chh", "cont"],
      اجنبي: ["foreignContract", "foreignPassport"],
    };
    const keys = Object.keys(Docs);
    // Find the index of the key
    const index = keys.indexOf(investType);

    if (Docs.hasOwnProperty(investType)) {
      const docsNameArray = Docs[investType];
      const docsNames = Object.keys(this.inputDocsField);
      for (let docsName of docsNameArray) {
        if (!docsNames.includes(docsName)) {
          this.group_of_docs[index].fields.forEach((el) => {
            if (el.name == docsName && el.document_id == null) {
              this.evalErr.push(`الحقل ${el.label} مطلوب.`);
            }
          });
        } else {
          this.group_of_docs[index].fields.forEach((el) => {
            if (el.name == docsName) {
              if (
                this.inputDocsField[docsName].files.length == 0 &&
                el.document_id == null
              ) {
                this.evalErr.push(`الحقل ${el.label} مطلوب.`);
              }
            }
          });
        }
      }
    }
  } else if (applicantType == "افراد") {
    const personalDocs = {
      محلي: [
        "NationalIDFirst",
        "NationalIDSec",
        "ResidenceCardFirst",
        "ResidenceCardSec",
      ],
      اجنبي: ["pass"],
    };
    if (personalDocs.hasOwnProperty(investType)) {
      const docsNameArray = personalDocs[investType];
      const docsNames = Object.keys(this.inputDocsField);
      for (let docsName of docsNameArray) {
        if (!docsNames.includes(docsName)) {
          this.group_of_docs[2].fields.forEach((el) => {
            if (el.name == docsName && el.document_id == null) {
              this.evalErr.push(`الحقل ${el.label} مطلوب.`);
            }
          });
        } else {
          this.group_of_docs[2].fields.forEach((el) => {
            if (el.name == docsName) {
              if (
                this.inputDocsField[docsName].files.length == 0 &&
                el.document_id == null
              ) {
                this.evalErr.push(`الحقل ${el.label} مطلوب.`);
              }
            }
          });
        }
      }
    }
  }

  var Docs1 = ["Environmentalimpactstudy"]; //دراسة الاثر البيئي معدة من مكتب استشاري مختص ومعتمد من وزارة البيئة
  var numbers = [3];

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

  if (this.form_data.sssddd === "صناعي") {
    validateDocuments.call(this, Docs1, numbers[0]);
  }
}
