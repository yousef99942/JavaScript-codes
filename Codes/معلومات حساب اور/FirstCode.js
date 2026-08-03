{
    this.inputFormField["firstNameFederal"] = this.user.first_name;
    document.getElementsByName('firstNameFederal')[0].disabled = true;

    this.inputFormField["middleNameFederal"] = this.user.middle_name;
    document.getElementsByName('middleNameFederal')[0].disabled = true;

    this.inputFormField["thirdNameFederal"] = this.user.last_name;
    document.getElementsByName('thirdNameFederal')[0].disabled = true;

    this.inputFormField["forthNameFederal"] = this.user.forth_name;
    document.getElementsByName('forthNameFederal')[0].disabled = true;

    this.inputFormField["sirNameFederal"] = this.user.family_name;
    document.getElementsByName('sirNameFederal')[0].disabled = true;

    this.inputFormField["birthDateFederal"] = this.user.birth_date;
    document.getElementsByName('birthDateFederal')[0].disabled = true;

    this.inputFormField["phone"] = this.user.phone_num;
    document.getElementsByName('phone')[0].disabled = true;

    this.inputFormField["nationalIDNo"] = this.user.profile.national_id.nationalID;
    document.getElementsByName('nationalIDNo')[0].disabled = true;


    document
        .getElementById("26240")
        .addEventListener("keydown", function (event) {
            event.preventDefault();
        });
    document
        .getElementsByName("birthDateFederal")[0]
        .setAttribute("min", "1974-09-01");
    document
        .getElementsByName("birthDateFederal")[0]
        .setAttribute("max", "2005-09-01");
}