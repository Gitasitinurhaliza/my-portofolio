document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("emjBkTdHxxO0u5qqt"); 
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    emailjs.send("service_0cqs18o", "template_5g789gj", {
        from_name: name,
        from_email: email,
        message: message
    }).then(
        function(response) {
            alert("Pesan berhasil dikirim ke ghitaaahlz@gmail.com!");
        },
        function(error) {
            alert("Gagal mengirim pesan, coba lagi.");
        }
    );
});
