{
    partkind(event) {
        var x = event;

        var ProgrammingName = [
            "tawqeel",
            "jjjfdsfd",
            "kadoasd",
            "hhfgdfc",
            "sajksajd",
            "alaksd",
            "asdsad",
            "ueuy",
            "ASD",
            "SHJSAD",
        ];

        var CellsId = [
            "51555",
            "46563",
            "46564",
            "46565",
            "46566",
            "46587",
            "46584",
            "46585",
            "46586",
            "46574",
        ];

        if(x == "وكالة خاصة بقيادة المركبات") {
            document.getElementById("12427_group").style.display = "block";
            document.getElementById("22812_group").style.display = "none";
            document.getElementById("22816_group").style.display = "none";

            for(var i = 0; i < ProgrammingName.length; i++){
                document.getElementById(CellsId[i]).style.display = "block";
                this.inputFormField[ProgrammingName[i]] = null;
            }
        } else if(x == "وكالة عامة محامي"){
            document.getElementById("12427_group").style.display = "none";
            document.getElementById("22812_group").style.display = "block";
            document.getElementById("22816_group").style.display = "none";

            for(var i = 0; i < ProgrammingName.length; i++){
                document.getElementById(CellsId[i]).style.display = "none";
                this.inputFormField[ProgrammingName[i]] = null;
            }
        } else if(x == "وكالة خاصة"){
            document.getElementById("12427_group").style.display = "none";
            document.getElementById("22812_group").style.display = "none";
            document.getElementById("22816_group").style.display = "block";

            for(var i = 0; i < ProgrammingName.length; i++){
                document.getElementById(CellsId[i]).style.display = "none";
                this.inputFormField[ProgrammingName[i]] = null;
            }
        }else{
            document.getElementById("12427_group").style.display = "none";
            document.getElementById("22812_group").style.display = "none";
            document.getElementById("22816_group").style.display = "none";

            for(var i = 0; i < ProgrammingName.length; i++){
                document.getElementById(CellsId[i]).style.display = "none";
                this.inputFormField[ProgrammingName[i]] = null;
            }
        }
    }
}