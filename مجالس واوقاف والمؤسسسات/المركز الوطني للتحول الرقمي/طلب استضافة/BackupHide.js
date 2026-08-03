{
  //البريد الرسمي للجهة
  HaveNotFun(event) {
    if (event == "نعم") {
        document.getElementById("68941").style.display = "block";
        this.inputFormField["emailOfOrq"] = null;
    } else {
        document.getElementById("68941").style.display="none";
        this.inputFormField["emailOfOrq"] = null;
    }
  },

  //البريد الرسمي للمخول
  HaveNotSecondFun(event){
    if (event == "نعم") {
        document.getElementById("68943").style.display = "block";
        this.inputFormField["emailOfoar"] = null;
    } else {
        document.getElementById("68943").style.display="none";
        this.inputFormField["emailOfoar"] = null;
    }
  },

  firstFun(event) {
    var x = event ;
    
    if (x=="نعم") {
      document.getElementById("68946").style.display="block";
    }else {
      document.getElementById("68946").style.display="none";
    }
  },

  secondfun(event) {
    var x = event ;
    
    if (x=="نعم") {
      document.getElementById("70468").style.display="block";
    }else {
      document.getElementById("70468").style.display="none";
    }
  },

  thirdfun(event) {
    var x = event ;
    
      if (x=="نعم") {
          document.getElementById("68951").style.display="block";
          document.getElementById("68950").style.display="block";
      }else {
          document.getElementById("68951").style.display="none";
          document.getElementById("68950").style.display="none";
      }
  },

  forthfun(event) {
    var x = event ;
    
      if (x=="نعم") {
          document.getElementById("68953").style.display="block";
          document.getElementById("68954").style.display="block";  
      }else {
          document.getElementById("68953").style.display="none";
          document.getElementById("68954").style.display="none";
      }
  },

  fifthfun(event) {
    var x = event ;
    
      if (x=="نعم") {
          document.getElementById("68956").style.display="block";
      } else {
          document.getElementById("68956").style.display="none";
      }
  },

  sixfun(event) {
    var x = event ;
    
      if (x=="نعم") {
          document.getElementById("68958").style.display="block";
      } else {
          document.getElementById("68958").style.display="none";
      }
  },
    

    
  HaveNotٍsecondFun(event) {
    var x = event ;
    
      if (x=="نعم") {
          document.getElementById("68943").style.display="block";
      } else {
          document.getElementById("68943").style.display="none";
      }
  },
    
  //نوع الخدمة
  serviceTypeFun(event) {
    var x = event ;
    
    if (x=="استضافة موقع فقط") {
      document.getElementById("34207_group").style.display = "block";
      document.getElementById("68945").style.display="block";
      document.getElementById("68946").style.display="block";
      document.getElementById("68947").style.display="block";
      document.getElementById("70462").style.display="block";
      document.getElementById("68949").style.display="block";
      document.getElementById("68951").style.display="block";
      document.getElementById("68950").style.display="block";
      document.getElementById("68952").style.display="block";
      document.getElementById("68953").style.display="block";
      document.getElementById("68954").style.display="block";
      document.getElementById("70468").style.display="block";
      document.getElementById("68955").style.display="none";
      document.getElementById("70452").style.display="none";
      document.getElementById("68957").style.display="block";
      document.getElementById("68958").style.display="block";

    }else if (x=="استضافة بريد الكتروني فقط") {
      document.getElementById("34207_group").style.display = "block";
      document.getElementById("68945").style.display="block";
      document.getElementById("68957").style.display="none";
      document.getElementById("68958").style.display="none";
      document.getElementById("68946").style.display="block";
      document.getElementById("68956").style.display="block";
      document.getElementById("70452").style.display="block";
      document.getElementById("70468").style.display="none";
      document.getElementById("68947").style.display="none";
      document.getElementById("68949").style.display="none";
      document.getElementById("68951").style.display="none";
      document.getElementById("68950").style.display="none";
      document.getElementById("68952").style.display="none";
      document.getElementById("68953").style.display="none";
      document.getElementById("68954").style.display="none";
      document.getElementById("68955").style.display="block";

    } else if (x=="استضافة موقع مع بريد الكتروني"){
      document.getElementById("34207_group").style.display = "block";
      document.getElementById("68955").style.display="block";
      document.getElementById("68945").style.display="block";
      document.getElementById("68946").style.display="block";
      document.getElementById("70462").style.display="block";
      document.getElementById("68947").style.display="block";
      document.getElementById("68949").style.display="block";
      document.getElementById("68951").style.display="block";
      document.getElementById("68950").style.display="block";
      document.getElementById("68952").style.display="block";
      document.getElementById("68953").style.display="block";
      document.getElementById("68954").style.display="block";
      document.getElementById("68946").style.display="block";
      document.getElementById("68956").style.display="block";
      document.getElementById("70452").style.display="block";
      document.getElementById("70468").style.display="block";
      document.getElementById("68957").style.display="block";
      document.getElementById("68958").style.display="block";

    } else {
        document.getElementById("34207_group").style.display = "none";
        document.getElementById("68945").style.display="none";
        document.getElementById("68946").style.display="none";
        document.getElementById("70462").style.display="none";
        document.getElementById("68947").style.display="none";
        document.getElementById("68949").style.display="none";
        document.getElementById("68951").style.display="none";
        document.getElementById("68950").style.display="none";
        document.getElementById("68952").style.display="none";
        document.getElementById("68953").style.display="none";
        document.getElementById("68954").style.display="none";
        document.getElementById("68946").style.display="none";
        document.getElementById("68956").style.display="none";
        document.getElementById("70452").style.display="none";
        document.getElementById("68958").style.display="none";
        document.getElementById("70468").style.display="none";
        document.getElementById("68955").style.display="none";
        document.getElementById("68957").style.display="none";

    }
  }
}