// Name-----------------------------

function nameValidation(name, nameErrorMessage) {
    var regExp = /^[a-zA-Z\. ]{3,15}$/;
    if (regExp.test(name))
    {
        $(".nameErrorMessage").text(" ");
        return true;
    }else
    {
        $(".nameErrorMessage").text(nameErrorMessage).css("color", "red");
        return false;
    }
};

$(".name").keyup(function () {
   var name = $(this).val();
   var nameErrorMessage = "Invalid name";

   nameValidation(name, nameErrorMessage);
});

// Email--------------------------------

function emailValidation(email, emailErrorMessage) {

    var regExp = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;

    if (regExp.test(email))
    {
        $("#emailErrorMessage").text(" ");
        return true;
    }else
    {
        $("#emailErrorMessage").text(emailErrorMessage).css("color", "red");
        return false;
    }
};

$("#email").keyup(function () {
   var email = $(this).val();
   var emailErrorMessage = "Invalid Email";

   emailValidation(email, emailErrorMessage)
});

// phone Number------------------------------

 function phoneNumberValidation(phoneNumber, phoneNumberErrorMessage) {
     var regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im;

     if (regExp.test(phoneNumber))
     {
         $("#phoneNumberErrorMessage").text(" ");
         return true;
     }else
     {
         $("#phoneNumberErrorMessage").text(phoneNumberErrorMessage).css("color", "red");
         return false;
     }
 };

 $("#phoneNumber").blur(function () {
     var phoneNumber = $(this).val();
     var phoneNumberErrorMessage = "Invalid Phone Number";

     phoneNumberValidation(phoneNumber, phoneNumberErrorMessage);
 });

// Password------------------------------------

function passwordValidation(password, passwordErrorMessage) {
    var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

    if (regExp.test(password))
    {
        $("#passwordErrorMessage").text(" ");
        return true;
    } else
    {
        $("#passwordErrorMessage").text(passwordErrorMessage).css("color", "red");
        return false;
    }
};

 $("#password").keyup(function () {
     var password = $(this).val();
     var passwordErrorMessage = "Password must be contain at least a number, a lowercase, a uppercase & 6 characters";

     passwordValidation(password, passwordErrorMessage);
 });

// Show Or Hide--------------------------------

function showHideValidation(passwordAttr) {
    if (passwordAttr == "password")
    {
        $("#password").attr("type", "text");
    } else
    {
        $("#password").attr("type", "password");
    }
};

 $("#showHide").click(function () {
     var passwordAttr = $("#password").attr("type");
     showHideValidation(passwordAttr);
 });

 // Confirm Password-----------------------

 function confirmPasswordValidation(confirmPasswordErrorMessage) {
     var password = $("#password").val();
     var confirmPassword = $("#confirmPassword").val();

     if (password == confirmPassword)
     {
         $("#confirmPasswordErrorMessage").text("OK").css("color", "green");
         return true;
     }else
     {
         $("#confirmPasswordErrorMessage").text(confirmPasswordErrorMessage).css("color", "red");
         return false;
     }
 };
 $("#confirmPassword").keyup(function () {
     var confirmPasswordErrorMessage = "Password does not match";
     confirmPasswordValidation(confirmPasswordErrorMessage);
 });

 // Gender-----------------------------------

function genderValidation(genderErrorMessage) {
    var gender = $("input[name = 'gender']:checked");
    if (gender.val())
    {
        $("#genderErrorMessage").text(" ");
        return true;
    } else
    {
        $("#genderErrorMessage").text(genderErrorMessage).css("color", "red");
        return false
    }
};

// District-------------------------

function districtValidation(districtErrorMessage) {
    var districtValue = $("#districtName").val();

    if (districtValue == " ")
    {
        $("#districtNameErrorMessage").text(districtErrorMessage).css("color", "red");
        return false;
    } else
    {
        $("#districtNameErrorMessage").text(" ");
        return true;
    }
};

$("#districtName").change(function () {
    var districtErrorMessage = "Please select a district name";
    districtValidation(districtErrorMessage);
});


// Website-------------------------------

function urlValidation(websiteErrorMessage) {
    var websiteValue = $("#website").val();
    var regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (regExp.test(websiteValue))
    {
        $("#websiteErrorMessage").text(" ");
        return true;
    } else
    {
        $("#websiteErrorMessage").text(websiteErrorMessage).css("color", "red");
        return false;
    }
};

$("#website").keyup(function () {
    var websiteErrorMessage = "Please enter valid url";
    urlValidation(websiteErrorMessage);
});

// Terms and condition--------------------------------

function termsConditionValidation(termsConditionErrorMessage) {

    var termsConditionValue = $("input[type = 'checkbox']:checked").val();

    if (termsConditionValue)
    {
        $("#termsConditionErrorMessage").text(" ");
        return true;
    } else
    {
        $("#termsConditionErrorMessage").text(termsConditionErrorMessage).css("color", "red");
        return false;
    }
};

// Submit------------------------------------

$("#registrationForm").submit(function () {
    var name = $(".name").val();
    var nameErrorMessage = "Invalid name";

    var email = $("#email").val();
    var emailErrorMessage = "Invalid Email";

    var phoneNumber = $("#phoneNumber").val();
    var phoneNumberErrorMessage = "Invalid Phone Number";

    var password = $("#password").val();
    var passwordErrorMessage = "Password must be contain at least a number, a lowercase, a uppercase & 6 characters";

    var confirmPasswordErrorMessage = "Password does not match";

    var genderErrorMessage = "Select your gender";

    var districtErrorMessage = "Please select a district name";

    var websiteErrorMessage = "Please enter valid url";

    var termsConditionErrorMessage = "Must Check terms and condition";

    if (nameValidation(name, nameErrorMessage) == true && emailValidation(email, emailErrorMessage) == true && phoneNumberValidation(phoneNumber, phoneNumberErrorMessage) == true && passwordValidation(password, passwordErrorMessage) == true && confirmPasswordValidation(confirmPasswordErrorMessage) == true && genderValidation(genderErrorMessage) == true && districtValidation(districtErrorMessage) == true && urlValidation(websiteErrorMessage) == true && termsConditionValidation(termsConditionErrorMessage) == true)
    {
        return true;
    } else
    {
        return false;
    }
});
