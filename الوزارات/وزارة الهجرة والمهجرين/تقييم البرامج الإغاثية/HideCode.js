{
    ssingleNotification(notifyText, position) {
        this.$toast.success(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        })
    },

    singleNotification(notifyText, position) {
        this.$toast.error(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        })
    },
    
    SearchFun(event){
        if (event) {
        let loader = this.$loading.show({
            container: this.$refs.formContainer,
            loader: "dots",
            transition: "fade",
            color: "#c30734"
        })

        const  phoneNumber = [
            "9647730118105",//رنا
            "9647708860872",//علي غني نعمة
            "9647722972027",//كرار هجرة ومهجرين
            "9647706242275",//كرار مركز بيانات
            "9647811911618",//يوسف احسان مركز بيانات
        ];
         
        let matchFound = false; // Flag to track if a match is found
			 
         for(let i = 0; i < phoneNumber.length; i++){
                if(this.inputFormField["Phone"] == phoneNumber[i]){
                    matchFound = true;
                 document.getElementById("33830_group").style.display = "none"//تسجيل الدخول
                 document.getElementById("33832_group").style.display = "block"//المعلومات العامة
                 document.getElementById("33843_group").style.display = "block"// التوصيات والملاحظات
               
                  const aids = {"مشروع مدر للدخل": "33837_group",  // اسماء القيم  من سلكتر نوع المساعدات وما يقابلها من الفورمات رقم 3،4،5   
                "سلعة معمرة":"33840_group",  
                "سلة إغاثية":"33839_group"}
                  
               let aidReceived = this.inputFormField.AidType // مصفوفة بالقيم(انواع المساعدات)التي تم اختيارها
               if(aidReceived){  
                   for (const [key, value] of Object.entries(aids)) {console.log(1)
       					if(aidReceived.includes(key)){
              					document.getElementById(value).style.display = "block"
        			    }else {
								document.getElementById(value).style.display = "none"
        			    }     
				    }
               }  
                    loader.hide();
                    this.ssingleNotification("تم الدخول بنجاح", "top-right");
                    break; // Exit the loop once a match is found
                }
            }

            if (!matchFound) {
               loader.hide();
                this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
            }
            }
},
  HelpReceivingFun(event){
  const  HelpReceiving = event
  if(HelpReceiving == "نعم"){
		document.getElementById("65784").style.display = "block"
		document.getElementById("65787").style.display = "block"
    		//document.getElementById("65725_group").style.display = "none"

  }else if(HelpReceiving == "كلا"){    
  		document.getElementById("65784").style.display = "none"
		document.getElementById("65787").style.display = "none"
        this.inputFormField.AidType= null
   	    this.inputFormField.AssistanceAvailable= null
           const formTypes = {"مشروع مدر للدخل": 2, 
                       								 "سلة إغاثية":3,
                  					 		        "سلعة معمرة":4 }
           
         let allAids = ["مشروع مدر للدخل", "سلة إغاثية", "سلعة معمرة"]
          for(let aid of allAids){            			  
			   document.getElementById(`${this.group_of_form[formTypes[aid]].id}_group`).style.display = "none"
              for(let field of this.group_of_form[formTypes[aid]].fields){ 
                if(this.inputFormField[field.name] != null){
                     this.inputFormField[field.name] = null
                }      	
              }
          }
  }else if(!HelpReceiving){
	    document.getElementById("65784").style.display = "none"
		document.getElementById("65787").style.display = "none"
  	    this.inputFormField.AidType= null
  	   this.inputFormField.AssistanceAvailable= null
  }
  },
  AidTypeFun(event){
	 const aids = {"مشروع مدر للدخل": "33837_group",  // اسماء القيم  من سلكتر نوع المساعدات وما يقابلها من الفورمات رقم 3،4،5  
                "سلعة معمرة":"33840_group",  
                "سلة إغاثية":"33839_group"}
     // اسماء الفورمات 
     const formTypes = {"مشروع مدر للدخل": 2,  
                        "سلة إغاثية":3,
                        "سلعة معمرة":4 }

    let aidReceived = this.inputFormField.AidType // مصفوفة بالقيم(انواع المساعدات)التي تم اختيارها
    
     if(document.getElementById("33832_group").style.display == "block"){// تتنفذ فقط بعد ظهور فورم المعلومات العامة (اي بعد الضغط على زر بحث)
    	 if(aidReceived){
             for (const [key, value] of Object.entries(aids)) {
       				if(aidReceived.includes(key)){
           			 	document.getElementById(value).style.display = "block"
         		    }else {
						document.getElementById(value).style.display = "none"
                       for(let field of this.group_of_form[formTypes[key]].fields){
             		   this.inputFormField[field.name] = null 
          			    }
        		   } }    
			}
		}
  }
}