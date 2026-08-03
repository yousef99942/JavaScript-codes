//--------------- Document Validation ------------------
{
  var fieldLawName = "proxyDocReqPdf";
  if (this.form_data.infoOwnerType != "صاحب المشروع") {
    if (!Object.keys(this.inputDocsField).includes(fieldLawName)) {
      this.group_of_docs[1].fields.forEach((element) => {
        if (element.name == fieldLawName && element.document_id == null)
          this.evalErr.push(`الحقل (${element.label}) مطلوب`);
      });
    } else {
      this.group_of_docs[1].fields.map((field) => {
        if (field.name == fieldLawName) {
          if (
            this.inputDocsField[fieldLawName].files.length == 0 &&
            field.document_id == null
          ) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        }
      });
    }
  }
  //------- payment bill ----------
}
