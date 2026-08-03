{
  this.inputFormField.haiderna = this.user.first_name;
  document.getElementsByName("haiderna")[0].disabled = true; //الاسم الاول

  this.inputFormField.haiderd = this.user.middle_name;
  document.getElementsByName("haiderd")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ahaiderbv = this.user.last_name;
  document.getElementsByName("ahaiderbv")[0].disabled = true; //الاسم الثالث

  this.inputFormField.haiderjn = this.user.forth_name;
  document.getElementsByName("haiderjn")[0].disabled = true; //الاسم الرابع
}
