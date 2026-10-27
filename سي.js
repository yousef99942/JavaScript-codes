{
  neighborhoods(event) {
    var district = event;

    if (district && typeof district === "object") {
        district =
          district.label ||
          district.value ||
          district.name ||
          "";
    }

    district = String(district || "").trim();

    var neighborhoodsByDistrict = {
        "قضاء المركز": [
            "حي الرسالة",
            "حي الرافدين",
            "حي الوفاء",
            "حي المعلمين",
            "حي الخضراء",
            "حي الفرات",
            "حي الفارس",
            "حي ملحق التعاون",
            "حي النصر",
            "حي العامل",
            "حي الحسين",
            "حي الأطباء",
            "حي الزهراء",
            "حي رمضان",
            "حي الصناعي",
            "حي السلام"
        ],

        "قضاء الحر": [
            "حي الاختبار"
        ],

        "قضاء الهندية": [
            "الحي الأول",
            "الحي الثاني"
        ]
    };

    // البحث عن القضاء حتى لو وصل مع مسافات إضافية
    var matchedDistrict = Object.keys(
        neighborhoodsByDistrict
    ).find(function (name) {
        return name.trim() === district;
    });

    var neighborhoods = matchedDistrict
        ? neighborhoodsByDistrict[matchedDistrict]
        : [];

    var groups = this.group_of_form || [];
    var field = null;

    for (var i = 0; i < groups.length; i++) {
        var fields = groups[i].fields || [];

        field = fields.find(function (f) {
            return f.name === "TheNeighborhoo";
        });

        if (field) {
            break;
        }
    }

    if (!field) {
        return;
    }

    field.options = neighborhoods.map(function (name) {
        return {
            label: name,
            value: name
        };
    });

    
  }
}