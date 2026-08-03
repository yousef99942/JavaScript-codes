{
    abdullahfun(event){
        var Sections = [
            ["فرع كركوك"],
            ["فرع الانبار", "مكتب فلوجة"],
            ["فرع نينوى", "مكتب تلعفر", "مكتب الحمدانية", "مكتب سنجار"],
            ["فرع دهوك"],
        ];

        if (event == "كركوك") {
            this.group_of_form[0].fields[6].properties[0].values = Sections[0];
        }else if (event == "الانبار") {
            this.group_of_form[0].fields[6].properties[0].values = Sections[1];
        }else if (event == "نينوى") {
            this.group_of_form[0].fields[6].properties[0].values = Sections[2];
        }else if (event == "دهوك"){
          this.group_of_form[0].fields[6].properties[0].values = Sections[3];
        }else {
           this.group_of_form[0].fields[6].properties[0].values = [];
        }
    }
}