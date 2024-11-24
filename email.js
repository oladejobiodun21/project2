emailjs.init("BFUV47DCO0_qZisbf");

paynowBtn.addEventListener("click", () => {
  const emailParams = {
    user_name: userName.value,
    user_email: userMail.value, // This will be the recipient email
    message: `New message from ${userName.value}`,
  };

  emailjs
    .send("service_q17z4cc", "template_3jdkqqw", emailParams)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
      alert("Email sent successfully ");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    });
});
