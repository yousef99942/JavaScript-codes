{
    //--- full Name
    this.inputFormField["firstNa"] = this.user.first_name;
    this.inputFormField["secondNa"] = this.user.middle_name;
    this.inputFormField["thirdNa"] = this.user.last_name;
    this.inputFormField["fourthNa"] = this.user.forth_name;
    document.getElementById("35527").classList.add("isDisabled");
    document.getElementById("35528").classList.add("isDisabled");
    document.getElementById("35529").classList.add("isDisabled");
    document.getElementById("35530").classList.add("isDisabled");
    //--- birth date ----
    this.inputFormField["birth"] = this.user.birth_date;
    document.getElementById("35532").classList.add("isDisabled");
}