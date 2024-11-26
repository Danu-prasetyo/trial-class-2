function sendEmail() {
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let emailReceiver = "emailSendiri@gmail.com";

  //   createElement : untuk buat elemen html <a> baru
  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`; //format kirim email
  a.target = "_blank";
  a.click(); //trigger fungsi klik pada elemen <a>
}
