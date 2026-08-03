{
  if (response.data.data.certificateDilivery) {
    let loader = self.$loading.show({
      container: self.$refs.formContainer,
      loader: "dots",
      transition: "fade",
      color: "#c30734",
    });
    try {
      fetch("https://eservice.ur.gov.iq/api/v2/customer/tashel/send_order", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${self.token}`,
        },
        body: JSON.stringify({
          name_first: self.user.first_name, //1
          name_middle: self.user.middle_name, //1
          name_last: self.user.last_name, //1
          custom_national_id_numbereid:
            self.user.profile.national_id.nationalID, //1
          custom_mobile: self.user.phone_num, //1
          custom_email: response.data.data.tasheelEmail,
          address_line1: response.data.data.addressLineOne,
          address_line2: response.data.data.addressLineTow,
          custom_home_no: response.data.data.homeNumber,
          county: response.data.data.county,
          state: response.data.data.nearestLandmark,
          custom_city: response.data.data.customCity,
          custom_area: response.data.data.customArea,
          custom_province: response.data.data.customCity,
          total_amount: Number(response.data.data.totalPrice),
          service_partner: "الجامعة العراقية", //1
          custom_gov_portal_ref: response.data.service_request_number, //1
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          loader.hide();
          if (data.length === 0) {
            console.log("لم يتم إرسال الطلب الى تسهيل");
          } else {
            self.$toast.success(data.response.message.message, {
              position: "top-right",
              timeout: 6000,
              closeOnClick: false,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: false,
              closeButton: "button",
              icon: true,
              rtl: true,
            });
            localStorage.removeItem("codeBol");
            self.$router.push({
              name: "customerRequestInfoV2",
              params: {
                req_id: response.data.service_request_id,
              },
            });
          }
          loader.hide();
        });
    } catch (error) {
      loader.hide();
      self.hideErr.push(error);
      console.error("Error:", error);
    }
  } else {
    console.log("لم يتم اختيار تسهيل");
    localStorage.removeItem("codeBol");
    self.$router.push({
      name: "customerRequestInfoV2",
      params: {
        req_id: response.data.service_request_id,
      },
    });
  }
}
