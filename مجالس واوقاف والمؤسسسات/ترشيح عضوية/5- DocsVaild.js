{
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

    if (this.form_data.EmpType === "موظف سابق") {
        validateDocuments.call(this, ["cv"], 0); //السيرة الذاتية المحدثة معززة بالوثائق الثبوتية PDF
    }

    if (this.form_data.EmpType === "موظف مستمر") {
        validateDocuments.call(this, ["wordkyear"], 0); //خلاصة الخدمة مختومة بختم الدائرة
    }
}