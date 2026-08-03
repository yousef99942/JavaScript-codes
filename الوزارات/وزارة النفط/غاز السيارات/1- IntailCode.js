{
  this.group_of_form[0].fields[8].properties[0].values = [
    "4 اسطوانات",
    "4 اسطوانات ثنائي الحقن",
    "5 اسطوانات",
    "8 اسطوانات",
  ];

  //-----------------------------------------------------------------------------
  //حصر الحقول بالارقام واللغة الانكليزية
  function English_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;

        // السماح بأزرار التحكم مثل Backspace و Tab و Arrow keys
        if (ctrl || e.key.length > 1) return;

        // أحرف إنكليزية + أرقام فقط
        const regex = /^[A-Za-z0-9]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  let Fields_ID = [
    "31745", //رقم الشاصي
  ];

  English_Numbers_Only(Fields_ID);
}
