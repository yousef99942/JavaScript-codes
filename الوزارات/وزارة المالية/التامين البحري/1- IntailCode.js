{
  //مدة التأمين من
  document
    .getElementById("28403")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("hghghghgyhg")[0]
    .setAttribute("min", "2026-01-01");
  document
    .getElementsByName("hghghghgyhg")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //مدة التأمين الى
  document
    .getElementById("28404")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("zzzzxzxzv")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("zzzzxzxzv")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
