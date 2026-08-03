{
  this.inputFormField["firstname"] = this.user.first_name;
  this.inputFormField["secondname"] = this.user.middle_name;
  this.inputFormField["thirdname"] = this.user.last_name;
  this.inputFormField["forthname"] = this.user.forth_name;
  this.inputFormField["family_name"] = this.user.family_name;
  this.inputFormField["birth_date"] = this.user.birth_date;
  this.inputFormField["mother"] = this.user.profile.mother;
  this.inputFormField["gender"] = this.user.gender;
  this.inputFormField["nationalID"] = this.user.profile.national_id.nationalID;

  this.group_of_form[0].fields[9].properties[0].values = [
    "بغداد",
    "بابل",
    "البصرة",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "نينوى",
    "ميسان",
  ]; //المحافظة التي ينقل اليها الاثاث

  this.group_of_form[0].fields[8].properties[0].values = [
    "بغداد",
    "بابل",
    "البصرة",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "نينوى",
    "ميسان",
  ]; //المحافظة الحالية
}
