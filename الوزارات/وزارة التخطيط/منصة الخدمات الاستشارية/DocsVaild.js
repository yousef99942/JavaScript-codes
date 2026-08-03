var HaykelTan = ["fup"]; //هيكل تنظيمي 45210
var TheLaw = ["fupp"]; //القانون 45256
var MalakMosadaq = ["fuppe"]; //ملاك مصادق 45257
var InternalLaw = ["ffup"]; //نظام داخلي 45258
var TasksAndMissions = ["ffupp"]; //مهام وواجبات التشكيلات 45259
var CurrentHaykel = ["ffpp"]; //الهيكل التنظيمي الحالي والمقترح ان وجد 45260
var HiringDesc = ["ffuupp"]; //الوصف الوظيفي للعناوين الوظيفية والمناصب الادارية 45261
var AjraatSer = ["fdpu"]; //اجراءات تنفيذ الخدمات 45263
var AjraatQuality = ["fupfup"]; //دليل اجراءات الجودة ان وجد 45262
var OfficalDoc = ["fuppee"]; //كتاب رسمي بالخدمة الاستشارية المطلوبة 45292

// Function to handle document validation
function validateDocuments(docsArray) {
  // Loop through the docs array and validate each document field
  docsArray.forEach((docKey) => {
    if (Object.keys(this.inputDocsField).includes(docKey)) {
      // Loop through fields to find matching ones and validate
      this.group_of_docs[0].fields.forEach((field) => {
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
      this.group_of_docs[0].fields.forEach((field) => {
        if (docsArray.includes(field.name) && field.document_id == null) {
          this.evalErr.push(`الحقل ${field.label} مطلوب`);
        }
      });
    }
  });
}

if (
  this.form_data.ddlservices == "اعداد وتحديث الوصف الوظيفين للعناوين الوظيفية"
) {
  validateDocuments.call(this, HaykelTan);
  validateDocuments.call(this, TheLaw);
  validateDocuments.call(this, MalakMosadaq);
  validateDocuments.call(this, InternalLaw);
}
if (this.form_data.ddlservices == "اعداد الهياكل التنظيمية") {
  validateDocuments.call(this, TheLaw);
  validateDocuments.call(this, InternalLaw);
  validateDocuments.call(this, TasksAndMissions);
  validateDocuments.call(this, CurrentHaykel);
}
if (this.form_data.ddlservices == "الوصف الوظيفي للمناصب الادارية") {
  validateDocuments.call(this, TheLaw);
  validateDocuments.call(this, InternalLaw);
  validateDocuments.call(this, HaykelTan);
}
if (this.form_data.ddlservices == "اعداد هياكل وظيفية") {
  validateDocuments.call(this, MalakMosadaq);
  validateDocuments.call(this, HaykelTan);
}
if (this.form_data.ddlservices == "اعداد النظام الداخلي") {
  validateDocuments.call(this, TheLaw);
}
if (this.form_data.ddlservices == "تبسيط الاجراءات الحكومية") {
  validateDocuments.call(this, AjraatSer);
}
if (
  this.form_data.ddlservices == "اعداد دليل اجراءات العمل" ||
  this.form_data.ddlservices ==
    "ISO 9001:2015 تأهيل المؤسسات وفق المواصفة القياسية الدولية"
) {
  validateDocuments.call(this, HaykelTan);
  validateDocuments.call(this, InternalLaw);
  validateDocuments.call(this, HiringDesc);
  validateDocuments.call(this, AjraatQuality);
}
if (
  this.form_data.ddlservices == "استشارات التدريب" ||
  this.form_data.ddlservices == "استشارات تقنية المعلومات" ||
  this.form_data.ddlservices == "استشارات البحث والتطوير"
) {
  validateDocuments.call(this, OfficalDoc);
}
