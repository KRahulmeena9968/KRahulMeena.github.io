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
    SecureToken: "bb2dab74-79b4-40f6-bf74-ecfeaa0b1165",
    To: "krahulmeena9968@gmail.com",
    From: "krahulmeena9968@gmail.com",
    Subject: "Contact Form Response",
    Body: body,
  }).then((message) => alert(message));
}
