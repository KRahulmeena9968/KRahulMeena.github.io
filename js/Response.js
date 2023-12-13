function sendEmail() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("Cnum").value;
  let message = document.getElementById("msg").value;
  let body =
    "Name : " +
    fname +
    " " +
    lname +
    "<br>Email : " +
    email +
    "<br>Contact Number : " +
    number +
    "<br> Message : " +
    message;
  Email.send({
    SecureToken: "c7447995-b49b-4cf2-96fd-722b33660ffd",
    To: "krahulmeena9968@gmail.com",
    From: "krahulmeena9968@gmail.com",
    Subject: "Contact Form Response",
    Body: body,
  }).then((message) => alert(message));
}
