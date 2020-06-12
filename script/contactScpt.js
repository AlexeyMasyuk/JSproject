let contact = {
    "email": "",
    "userName": "",
    "subject": "",
    "text": ""
};

function myFunction() {
    if (localStorage.getItem("person") != null) {
        contact["email"] = document.getElementById("usrform").elements[0].value;
        contact["userName"] = localStorage.getItem("person");
        contact["subject"] = document.getElementById("usrform").elements[1].value;
        contact["text"] = document.getElementById("usrform").elements[2].value;
        if (contact.email.length > 0 && contact.userName.length > 0 && contact.subject.length > 0) {
            document.write("User Email: " + contact.email + '<br>');
            document.write("UserName: " + contact.userName + '<br>');
            document.write("Subject: " + contact.subject + '<br>');
            document.write(contact.text);
        } else {
            alert("Fill all fields");
        }
    } else
        alert("Return to main page and fill your name");
}