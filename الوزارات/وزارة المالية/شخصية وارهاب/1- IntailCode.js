//Write your code here
{
    const InsurEmployeeNames = ["namofm", "IntermediarySName", "IntermediaryTName"];

    //حقول المنتج دائما غير قابل للتعديل
    for(let i =0; i < 3; i++){
	    document.getElementsByName(InsurEmployeeNames[i])[0].disabled = true
    }

    const today = new Date();
    const year =today.getFullYear()
    //تقييد تاريخ وقوع الحادث  
    document.getElementById("97178").addEventListener("keydown", function(event) {
          event.preventDefault();
    });
    document.getElementsByName("IncidentDatee")[0].setAttribute("min", "1960-01-01");
    document.getElementsByName("IncidentDatee")[0].setAttribute("max", `${year}-12-31`);
  
    //تقييد تاريخ بدء التأمين  
    document.getElementById("97209").addEventListener("keydown", function(event) {
        event.preventDefault();
    });
    document.getElementsByName("dateonee")[0].setAttribute("min", `${year}-01-01`);
  
    //تقييد تاريخ انتهاء التأمين  
    document.getElementById("97212").addEventListener("keydown", function(event) {
        event.preventDefault();
    });
    document.getElementsByName("datetwoo")[0].setAttribute("min", `${year}-01-01`);
}