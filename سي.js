//Write your code here
{
  function getElement(id) {
    return document.getElementById(id);
  }

  function show(id) {
    var el = getElement(id);
    if (el) {
      el.style.display = "block";
    }
  }

  function hide(id) {
    var el = getElement(id);
    if (el) {
      el.style.display = "none";
    }
  }

  function hideAll(ids) {
    ids.forEach(function (id) {
      hide(id);
    });
  }

  hide("35617_group");
  hide("35619_group");
  hide("35618_group");

  hideAll([
    "94720",
    "94793",
    "94644",
    "94755",
    "94648",
    "94649",
    "94790",
    "94791",
    "94792",
    "94746",
    "94650",
    "94651",
    "94652",
    "94653",
    "94654",
    "94763",
    "94723",
    "94760",
    "94728",
    "94724",
    "94721",
    "94722",
  ]);

  document.getElementsByName("FirstName")[0].disabled = true; //قفل الاسم الاول
  document.getElementsByName("SecondName")[0].disabled = true; //قفل الاسم الثاني
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل الاسم الثالث
  document.getElementsByName("FourthName")[0].disabled = true; //قفل الاسم الرابع
  var self = this;

  var nameMapping = {
    FirstName: "first_name",
    SecondName: "middle_name",
    ThirdName: "last_name",
    FourthName: "forth_name",
  };

  function findFormVm() {
    var input = document.querySelector('input[name="FirstName"]');

    var node = input;

    while (node) {
      var vm = node.__vue__;

      while (vm) {
        if (
          vm.$options &&
          vm.$options.name === "serviceForm" &&
          vm.inputFormField
        ) {
          return vm;
        }

        vm = vm.$parent;
      }

      node = node.parentElement;
    }

    return null;
  }

  function fillNames(formVm) {
    var data = formVm.inputFormField;

    var user =
      formVm.$store && formVm.$store.getters
        ? formVm.$store.getters.user
        : null;

    if (!user || !data) {
      return false;
    }

    Object.keys(nameMapping).forEach(function (field) {
      var value = user[nameMapping[field]];

      if (
        value === null ||
        value === undefined ||
        String(value).trim() === ""
      ) {
        return;
      }

      value = String(value).trim();

      if (
        data[field] === null ||
        data[field] === undefined ||
        String(data[field]).trim() === ""
      ) {
        if (typeof formVm.$set === "function") {
          formVm.$set(data, field, value);
        } else {
          data[field] = value;
        }
      }
    });

    return true;
  }

  function lockNames() {
    Object.keys(nameMapping).forEach(function (field) {
      var input = document.querySelector('input[name="' + field + '"]');

      if (input && !input.readOnly) {
        input.readOnly = true;
      }
    });
  }

  var nameAttempts = 0;

  function waitForNames() {
    var formVm = findFormVm();

    if (formVm && fillNames(formVm)) {
      if (typeof formVm.$nextTick === "function") {
        formVm.$nextTick(lockNames);
      } else {
        lockNames();
      }
      return;
    }

    nameAttempts++;

    if (nameAttempts < 30) {
      setTimeout(waitForNames, 500);
    }
  }

  waitForNames();

  if (
    window.__urNamesLockObserver &&
    typeof window.__urNamesLockObserver.disconnect === "function"
  ) {
    window.__urNamesLockObserver.disconnect();
  }

  var namesLockObserver = new MutationObserver(function () {
    lockNames();
  });

  namesLockObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["readonly"],
  });

  window.__urNamesLockObserver = namesLockObserver;

  lockNames();

  setTimeout(function () {
    var formVm = findFormVm();

    var data =
      formVm && formVm.inputFormField
        ? formVm.inputFormField
        : self.inputFormField || self.form_data || {};

    var user =
      formVm && formVm.$store && formVm.$store.getters
        ? formVm.$store.getters.user
        : self.user && typeof self.user === "object"
          ? self.user
          : null;

    function localPhone(value) {
      var digits = String(value || "").replace(/\D/g, "");

      if (/^9647\d{9}$/.test(digits)) {
        return "0" + digits.substring(3);
      }

      if (/^07\d{9}$/.test(digits)) {
        return digits;
      }

      return null;
    }

    var accountPhone = user ? localPhone(user.phone_num) : null;

    if (
      accountPhone &&
      (data.Phone === null ||
        data.Phone === undefined ||
        String(data.Phone).trim() === "" ||
        String(data.Phone).trim() === "07")
    ) {
      data.Phone = accountPhone;
    }

    if (
      data.Phone === null ||
      data.Phone === undefined ||
      String(data.Phone).trim() === ""
    ) {
      data.Phone = "07";
    }

    var requestType = data.RequestType;

    if (requestType === "تسجيل الية زراعية") {
      show("35617_group");
      show("94793");

      var registrationType = data.RegistrationApplicantType;

      if (registrationType === "مالك") {
        show("94644");
        show("94746");

        show("35619_group");
        show("94650");
      } else if (registrationType === "حائز") {
        show("94790");
        show("94791");
        show("94792");
        show("94746");

        show("35619_group");
        show("94650");
      }

      if (registrationType === "مالك" || registrationType === "حائز") {
        if (data.saleListStatus === "موجودة") {
          show("94651");
          show("94652");
        } else if (data.saleListStatus === "مفقودة") {
          show("94653");
          show("94654");
        }
      }
    } else if (requestType === "رفع اشارة حجز") {
      show("35617_group");
      show("94720");

      var applicantType = data.ApplicantType;

      if (applicantType === "مالك") {
        show("94644");
      } else if (applicantType === "وكيل") {
        show("94755");
        show("94648");
        show("94649");
      }

      if (applicantType === "مالك" || applicantType === "وكيل") {
        show("35618_group");

        ["94763", "94723", "94760", "94728", "94724", "94721", "94722"].forEach(
          function (id) {
            show(id);
          },
        );
      }
    }

    var phoneInput = document.querySelector('input[name="Phone"]');

    if (phoneInput && !phoneInput.dataset.prefixProtected) {
      phoneInput.dataset.prefixProtected = "1";

      if (
        accountPhone &&
        (phoneInput.value === "" || phoneInput.value === "07") &&
        data.Phone === accountPhone
      ) {
        phoneInput.value = accountPhone;
        phoneInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      function protectPhone() {
        var value = String(phoneInput.value || "");
        var digits = value.replace(/\D/g, "");

        if (digits.indexOf("07") === 0) {
          digits = digits.substring(2);
        } else if (digits.indexOf("7") === 0) {
          digits = digits.substring(1);
        } else if (digits.indexOf("0") === 0) {
          digits = digits.substring(1);
        }

        var corrected = "07" + digits.substring(0, 9);

        if (phoneInput.value !== corrected) {
          phoneInput.value = corrected;
          phoneInput.dispatchEvent(new Event("input", { bubbles: true }));
        }

        data.Phone = corrected;
      }

      phoneInput.addEventListener("focus", function () {
        if (!phoneInput.value) {
          protectPhone();
        }
      });

      phoneInput.addEventListener("keydown", function (event) {
        var start = phoneInput.selectionStart;
        var end = phoneInput.selectionEnd;

        if (
          (event.key === "Backspace" && start <= 2 && start === end) ||
          (event.key === "Delete" && start < 2 && start === end)
        ) {
          event.preventDefault();
        }
      });

      phoneInput.addEventListener("input", protectPhone);

      phoneInput.addEventListener("click", function () {
        if (phoneInput.selectionStart < 2) {
          phoneInput.setSelectionRange(2, 2);
        }
      });

      protectPhone();
    }
  }, 1000);
}
