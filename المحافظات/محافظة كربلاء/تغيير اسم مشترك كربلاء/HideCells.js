{
    namenow(event) {
        var Progs = [
            "name",
            "secondname",
            "thirdname",
            "numbold",
            "numboldtwo",
            "numberoldthree",
        ];
        for(var i = 0; i < Progs.length; i++){
            this.inputFormField[Progs[i]] = null;
        }

        if (event == "تغيير اسم") {
            document.getElementById("68178").style.display = "block";// الاسم الاول الجديد 
            document.getElementById("68179").style.display = "block";// الاسم الثاني الجديد 
            document.getElementById("68180").style.display = "block";// الاسم الثالث الجديد
            document.getElementById("51997").style.display = "none";// الاسم الاول للمشترك 
            document.getElementById("65430").style.display = "none";// الاسم الثاني للمشترك 
            document.getElementById("65431").style.display = "none";// الاسم الثالث للمشترك
        }else if(event == "بدل ضائع"){   
            document.getElementById("68178").style.display = "none";// الاسم الاول الجديد 
            document.getElementById("68179").style.display = "none";// الاسم الثاني الجديد 
            document.getElementById("68180").style.display = "none";// الاسم الثالث الجديد 
            document.getElementById("51997").style.display = "block";// الاسم الاول للمشترك 
            document.getElementById("65430").style.display = "block";// الاسم الثاني للمشترك 
            document.getElementById("65431").style.display = "block";// الاسم الثالث للمشترك 
        }else{
            document.getElementById("68178").style.display = "none";// الاسم الاول الجديد 
            document.getElementById("68179").style.display = "none";// الاسم الثاني الجديد 
            document.getElementById("68180").style.display = "none";// الاسم الثالث الجديد
            document.getElementById("51997").style.display = "none";// الاسم الاول للمشترك 
            document.getElementById("65430").style.display = "none";// الاسم الثاني للمشترك 
            document.getElementById("65431").style.display = "none";// الاسم الثالث للمشترك 
        }
    },
}