{
  //مال البنى التحتية
  if (this.inputFormField.internalnet == "نعم") {
    if (
      this.inputFormField.internaltype == "" ||
      this.inputFormField.internaltype == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.fiberoptic == "نعم") {
    if (
      this.inputFormField.fiberopticnode == "" ||
      this.inputFormField.fiberopticnode == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[3].label} مطلوب`);
    }
  }

  if (this.inputFormField.subsidiary == "نعم") {
    var Fields_Prog = ["subsidairycount", "networknumber", "networkconn"],
      Fields_Location = [5, 6, 7];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.networkconn == "نعم") {
    var Fields_Prog = ["cnumber", "uncovered"],
      Fields_Location = [8, 9];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.datacenter == "نعم") {
    if (
      this.inputFormField.serverstype == "" ||
      this.inputFormField.serverstype == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[11].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.firewall == "نعم") {
    if (
      this.inputFormField.firwallnumber == "" ||
      this.inputFormField.firwallnumber == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[13].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.enoughcom == "كلا") {
    if (
      this.inputFormField.requirednum == "" ||
      this.inputFormField.requirednum == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[18].label} مطلوب`,
      );
    }
  }

  //مال التطبيقات والبرمجيات
  if (this.inputFormField.database == "نعم") {
    if (this.inputFormField.types == "" || this.inputFormField.types == null) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.licenseoffice == "نعم") {
    if (
      this.inputFormField.licensedoffice == "" ||
      this.inputFormField.licensedoffice == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }
  }

  if (this.inputFormField.antivirus == "نعم") {
    if (
      this.inputFormField.antivirustype == "" ||
      this.inputFormField.antivirustype == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.erp == "نعم") {
    var Fields_Prog = ["erpusers", "application"],
      Fields_Location = [7, 8];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.archivesys == "نعم") {
    var Fields_Prog = ["percentage", "userarchive", "scanners"],
      Fields_Location = [10, 11, 12];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.paperless == "نعم") {
    if (
      this.inputFormField.paperlesstype == "" ||
      this.inputFormField.paperlesstype == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[14].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.email == "نعم") {
    var Fields_Prog = ["emailstype", "noemail"],
      Fields_Location = [16, 17];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }
}
