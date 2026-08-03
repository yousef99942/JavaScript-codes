{
  if (this.inputFormField.Resiidence == "BG-karkh بغداد- الكرخ") {
    if (
      this.inputFormField["dateResv"] == null ||
      this.inputFormField["dateResv"] == " "
    ) {
      this.evalErr.push("حقل حجز موعد الفحص مطلوب");
    }
  }
}
