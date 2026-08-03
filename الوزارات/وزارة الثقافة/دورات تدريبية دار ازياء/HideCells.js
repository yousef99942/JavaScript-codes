{
  dofunction(event) {
    var x = event;
    if (x == "نعم") {
      document.getElementById("36014").style.display = "block";
      this.inputFormField["nameof"] = null;
    } else {
      document.getElementById("36014").style.display = "none";
      this.inputFormField["nameof"] = null;
    }
  }
}