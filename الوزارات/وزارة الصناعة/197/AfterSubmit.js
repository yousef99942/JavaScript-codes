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
          name_first: self.user.first_name, //1 done
          name_middle: self.user.middle_name, //1 done
          name_last: self.user.last_name, //1 done
          custom_national_id_numbereid:
            self.user.profile.national_id.nationalID, //1 done
          custom_mobile: self.user.phone_num, //1 done
          custom_email: response.data.data.tasheelEmail, //done
          address_line1: response.data.data.addressLineOne, //done
          address_line2: response.data.data.addressLineTow, //done but is it tow or two?
          custom_home_no: response.data.data.homeNumber, //done
          county: response.data.data.county, //done the same name?
          state: response.data.data.nearestLandmark, //done
          custom_city: response.data.data.customCity, //done number 1
          custom_area: response.data.data.customArea, //done
          custom_province: response.data.data.customCity, //done number 2 but there is no other field between customArea and total price
          total_amount: Number(response.data.data.totalPrice), //done
          service_partner: "الشركة العامة للتنمية الصناعية ", //1 done
          custom_gov_portal_ref: response.data.service_request_number, //1 done
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
