{
    formApply(event) {
        var AllField = ["DetialHala", "DirectioionHa", "SubjectLettH", "InOutNoo", "DateNoo", "NotBokH"];
            
        AllField.forEach(element => {
            this.inputFormField[element] = null;
        });

        if(event == "الاستعلام الالكتروني عن رقم كتاب"){
            document.getElementById("35356_group").style.display = "block"; 
        }else if (event == "تحديد موعد مقابلة") {
            document.getElementById("35356_group").style.display = "none";
            location.assign("https://eservice.ur.gov.iq/customer/applyService/21784");
        }else if (event == "الابلاغ عن حالة الابتزاز") {
            document.getElementById("35356_group").style.display = "none";
            location.assign("https://eservice.ur.gov.iq/customer/applyService/21786");
        }else if(event == "الاخبار عن عقار"){
            document.getElementById("35356_group").style.display = "none";
            location.assign("https://eservice.ur.gov.iq/customer/applyService/21812");
        }else {
            document.getElementById("35356_group").style.display = "none";
        }
    }
}