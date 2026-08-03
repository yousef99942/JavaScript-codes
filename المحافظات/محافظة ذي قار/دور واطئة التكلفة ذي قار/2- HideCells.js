{
    First_Hide(event){
        var Groups_IDs = [
            "34509_group",
            "34510_group",
            "34511_group",
            "34512_group",
            "34513_group",
            "34514_group",
            "34515_group",
            "34516_group",
            "34517_group",
            "34518_group",
            "34519_group",
            "34520_group",
            "34521_group",
            "34522_group",
            "34523_group",
            "34524_group",
            "34525_group",
            "34526_group",
            "34527_group",
            "34528_group",
        ];

        if(event){
            for(var i = 0; i < event; i++){
                document.getElementById(Groups_IDs[i]).style.display = "block";
            }

            for(var i = event; i < Groups_IDs.length; i++){
                document.getElementById(Groups_IDs[i]).style.display = "none";
            }
        }else{
            for(var i = 0; i < Groups_IDs.length; i++){
                document.getElementById(Groups_IDs[i]).style.display = "none";
            }
        }
    }
}