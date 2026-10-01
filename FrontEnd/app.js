function showMessage() {

    document.getElementById("message").innerText =
        "Welcome to Cloud Technologies!";
}


function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("messageBox").value;

    document.getElementById("formResult").innerText =
        "Thank you " + name +
        "! Your enquiry has been received.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
}