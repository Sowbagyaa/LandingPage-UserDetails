
function validateControls() {
    
    var fname = document.getElementById("firstName")
    if (fname.value == "") {
        window.alert("please enter your First Name");
        fname.focus();
        return false;
    }
    //LastName
    var lname = document.getElementById("lastName")
    if (lname.value == "") {
        window.alert("please enter your Last Name");
        lname.focus();
        return false;
    }

    //Email
    var email = document.gestElementById("emailAddress")
    if (email.value == "") {
        window.alert("please enter your valid email Id");
        email.focus();
        return false;
    }
     //Dob
     var dob = document.getElementById("DOB")
     if (dob.value == "") {
         window.alert("please enter your Date of Birth");
         dob.focus();
         return false;
     }
     //Mobile
    var mobile = document.getElementById("phoneNumber")
    if (mobile.value == "") {
        window.alert("please enter your 10 digits mobile no.");
        mobile.focus();
        return false;
    }
    //Gender   
    var gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        window.alert("Gender required!");
        gender.focus();
        return false;
    }
    var subject = document.getElementById("subject")
    if (subject.selectedIndex < 1) {
        window.alert("please choose your qualification");
        subject.focus();
        return false;
    }

    getFormValues();
}

function getFormValues() {
    alert("First Name= " + fname.value + "\n" + "Last Name= " + lname.value + "\n" + "Email= " + email.value + "\n" + "Mobile= " + mobile.value + "\n" + "Gender= " + gender.value + "\n" + "DateOfBirth= " + dob.value)
}