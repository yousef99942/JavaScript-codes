{
  //استمارة التقديم (الترشيح) للبرنامج التدريبي
  if (this.inputFormField.secondslector == "دورة تدريبية") {
    if (
      this.inputFormField["JobTitle"] == null ||
      this.inputFormField["JobTitle"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["JobGrade"] == null ||
      this.inputFormField["JobGrade"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["Currentstage"] == null ||
      this.inputFormField["Currentstage"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["EntityName"] == null ||
      this.inputFormField["EntityName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }

    if (
      this.inputFormField["Certification"] == null ||
      this.inputFormField["Certification"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }

    if (
      this.inputFormField["GeneralJurisdiction"] == null ||
      this.inputFormField["GeneralJurisdiction"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[8].label} مطلوب`);
    }

    if (
      this.inputFormField["ExactJurisdiction"] == null ||
      this.inputFormField["ExactJurisdiction"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["TrainingProgramName"] == null ||
      this.inputFormField["TrainingProgramName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[10].label} مطلوب`
      );
    }
  }

  //استمارة التقديم للمشاركة في الورش والمحاضرات والندوات والمؤتمرات
  if (
    this.inputFormField.secondslector == "ورشة عمل" ||
    this.inputFormField.secondslector == "محاضرة" ||
    this.inputFormField.secondslector == "ندوة" ||
    this.inputFormField.secondslector == "مؤتمر"
  ) {
    if (
      this.inputFormField["address"] == null ||
      this.inputFormField["address"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["Jobgrad"] == null ||
      this.inputFormField["Jobgrad"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["Formationname"] == null ||
      this.inputFormField["Formationname"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["Certificate"] == null ||
      this.inputFormField["Certificate"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }

    if (
      this.inputFormField["Generaljurisdictionn"] == null ||
      this.inputFormField["Generaljurisdictionn"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[7].label} مطلوب`);
    }

    if (
      this.inputFormField["Exactspecialization"] == null ||
      this.inputFormField["Exactspecialization"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }

    if (
      this.inputFormField["phoneno"] == null ||
      this.inputFormField["phoneno"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["emailn"] == null ||
      this.inputFormField["emailn"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[10].label} مطلوب`
      );
    }

    if (
      this.inputFormField["type"] == null ||
      this.inputFormField["type"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[11].label} مطلوب`
      );
    }

    if (this.inputFormField["type"] == "ورشة") {
      if (
        this.inputFormField["workshop"] == null ||
        this.inputFormField["workshop"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[12].label} مطلوب`
        );
      }
    }

    if (this.inputFormField["type"] == "محاضرة") {
      if (
        this.inputFormField["lecture"] == null ||
        this.inputFormField["lecture"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[13].label} مطلوب`
        );
      }
    }

    if (this.inputFormField["type"] == "ندوة") {
      if (
        this.inputFormField["Nadwa"] == null ||
        this.inputFormField["Nadwa"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[14].label} مطلوب`
        );
      }
    }

    if (this.inputFormField["type"] == "مؤتمر") {
      if (
        this.inputFormField["conference"] == null ||
        this.inputFormField["conference"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[15].label} مطلوب`
        );
      }

      if (
        this.inputFormField["Posttype"] == null ||
        this.inputFormField["Posttype"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[16].label} مطلوب`
        );
      }
    }

    if (this.inputFormField["Posttype"] == "ببحث") {
      if (
        this.inputFormField["Searchtitle"] == null ||
        this.inputFormField["Searchtitle"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[17].label} مطلوب`
        );
      }
    }
  }

  //استمارة التقديم على التدريب الصيفي
  if (this.inputFormField.secondslector == "تدريب صيفي") {
    if (
      this.inputFormField["firstname"] == null ||
      this.inputFormField["firstname"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[0].label} مطلوب`);
    }

    if (
      this.inputFormField["secondname"] == null ||
      this.inputFormField["secondname"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[1].label} مطلوب`);
    }

    if (
      this.inputFormField["thridname"] == null ||
      this.inputFormField["thridname"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[2].label} مطلوب`);
    }

    if (
      this.inputFormField["fourthname"] == null ||
      this.inputFormField["fourthname"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["phone"] == null ||
      this.inputFormField["phone"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["email"] == null ||
      this.inputFormField["email"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["Categories"] == null ||
      this.inputFormField["Categories"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[6].label} مطلوب`);
    }

    if (this.inputFormField.Categories == "طلبة الجامعات") {
      if (
        this.inputFormField["university"] == null ||
        this.inputFormField["university"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[7].label} مطلوب`
        );
      }

      if (
        this.inputFormField["college"] == null ||
        this.inputFormField["college"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[8].label} مطلوب`
        );
      }

      if (
        this.inputFormField["section"] == null ||
        this.inputFormField["section"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[10].label} مطلوب`
        );
      }

      if (
        this.inputFormField["stage"] == null ||
        this.inputFormField["stage"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[11].label} مطلوب`
        );
      }
    }

    if (this.inputFormField.Categories == "طلبة المعاهد") {
      if (
        this.inputFormField["Institute"] == null ||
        this.inputFormField["Institute"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[9].label} مطلوب`
        );
      }

      if (
        this.inputFormField["section"] == null ||
        this.inputFormField["section"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[10].label} مطلوب`
        );
      }

      if (
        this.inputFormField["stage"] == null ||
        this.inputFormField["stage"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[11].label} مطلوب`
        );
      }
    }

    if (
      this.inputFormField["from"] == null ||
      this.inputFormField["from"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[13].label} مطلوب`
      );
    }

    if (
      this.inputFormField["into"] == null ||
      this.inputFormField["into"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[14].label} مطلوب`
      );
    }
  }
}
