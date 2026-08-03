{
  if (this.tab_click === "form") {
    const fields = [
      { field: "Email", id: "89829" },
      { field: "department", id: "89858" },
      { field: "dep", id: "89861" },
      { field: "CoursesAndCertificates", id: "89837" },
      { field: "details", id: "89839" },
      { field: "other", id: "89841" },
      { field: "ifYes", id: "89849" },
      { field: "other", id: "89841" }, //اخرى
    ];

    fields.forEach(({ field, id }) => {
      if (!this.form_data[field]) {
        const el = document.getElementById(id);
        if (el) {
          el.style.visibility = "collapse";
        }
      }
    });
  }
}
