let contact = {
    "email": "",
    "userName": "",
    "subject": ""
};

function myFunction() {

    document.getElementById("usrform").submit();
    document.getElementById("usrform").style.display = "none";
    contact["email"] = document.getElementById("usrform").elements[0].value;
    contact["userName"] = localStorage.getItem("person");
    contact["subject"] = document.getElementById("usrform").elements[1].value;
    alert(contact["subject"]);
    alert(contact["email"]);
    alert(contact["userName"]);
}