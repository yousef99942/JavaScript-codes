//Write your code here
{
  //--- project owner -----
  if (this.form_data.compIncorTypeRequest != "مخول") {
    document.getElementsByClassName("23330")[0].style.display = "none";
    //this.inputDocsField["compIncorAuthBook"].files.length = 0;
    //this.inputDocsField["compIncorAuthBook"]= null;
  }

  if (this.form_data.compIncorProjloc == "داخل حدود بلدية المحافظة") {
    document.getElementById("23228_group").style.display = "block"; // المستمسكات الخاصة بمشروع داخل حدود البلدية
    document.getElementById("23229_group").style.display = "none"; // المستمسكات الخاصة بمشروع خارج حدود البلدية
    document.getElementsByClassName("24552")[0].style.display = "block"; //عائدية موقع (سند ملكية/ التعاقد مع الغير/ عقد إيجار مع البلدية)

    if (
      this.form_data.compIncorProjProp == "سند ملكية" ||
      this.form_data.compIncorProjProp == "تعاقد مع الغير"
    ) {
      document.getElementsByClassName("24590")[0].style.display = "block";
      delete this.inputDocsField["compIncorDocOutpartAcc"];
      console.log("okKo");
      document.getElementsByClassName("24592")[0].style.display = "none";
      //  console.log( this.inputDocsField["compIncorDocOutpartAcc"].files.length);
      console.log("ok");
      //    this.inputDocsField["compIncorDocOutpartAcc"]);
    } else {
      /*     this.inputDocsField["compIncorLicextra"].files.length = 0 ;
                 this.inputDocsField["compIncorLicextra"]= null;*/
      document.getElementsByClassName("24590")[0].style.display = "none";
      document.getElementsByClassName("24592")[0].style.display = "none";
    }
    delete this.inputDocsField["compIncorLicextra"];
    delete this.inputDocsField["compIncorDocOutpartAcc"];
  } // end if
  // if (this.form_data.compIncorProjloc == "خارج حدود بلدية المحافظة")
  else {
    document.getElementById("23228_group").style.display = "none"; // المستمسكات الخاصة بمشروع داخل حدود البلدية
    document.getElementById("23229_group").style.display = "block"; // المستمسكات الخاصة بمشروع خارج حدود البلدية

    if (this.form_data.compIncorProjProp == "حق تصرف من دائرة عقارات الدولة") {
      document.getElementsByClassName("24592")[0].style.display = "block";
      document.getElementsByClassName("24590")[0].style.display = "none";
    } else {
      document.getElementsByClassName("24592")[0].style.display = "none";
      document.getElementsByClassName("24590")[0].style.display = "none";
    }
  } // end else
  //------  Brand  ---//العلامة التجارية//--
  if (this.form_data.compIncorBrand != "نعم") {
    document.getElementsByClassName("21178")[0].style.display = "none";
  }

  var xx = "24591";
  document.getElementsByClassName(xx)[0].style.display = "none";
}
