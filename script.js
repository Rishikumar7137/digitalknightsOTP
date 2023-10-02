const EMAILJS_SERVICE_ID = 'service_6hcqzup'; 
const EMAILJS_TEMPLATE_ID = 'template_qr1kjkm'; 
const EMAILJS_USER_ID = 'fn8AHyL5hhhA2cvrl'; 

////
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init(EMAILJS_USER_ID);

    const emailInput = document.getElementById("emailInput");
    const sendOTPButton = document.getElementById("sendOTP");
    const otpDiv = document.getElementById("otpDiv");
    const otpInput = document.getElementById("otpInput");
    const verifyOTPButton = document.getElementById("verifyOTP");
    const statusDiv = document.getElementById("status");
    const otp = Math.floor(100000 + Math.random() * 900000);

    sendOTPButton.addEventListener("click", function () {
        const email = emailInput.value;
        // Send OTP via EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: email,
            otp: otp
        }).then(function () {
            statusDiv.textContent = `OTP sent to ${email}`;
            otpDiv.style.display = "block";
            emailInput.disabled = true;
            sendOTPButton.disabled = true;
        }).catch(function (error) {
            statusDiv.textContent = `Error sending OTP: ${email}`;
        });
    });

    verifyOTPButton.addEventListener("click", function () {
        const userOTP = otpInput.value;
        if (userOTP == otp) { // Replace with your actual OTP verification logic
            statusDiv.textContent = "OTP verified successfully!";
        } else {
            statusDiv.textContent = "Invalid OTP. Please try again.";
        }
    });
});
