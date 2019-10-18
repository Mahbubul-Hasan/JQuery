function nameValidation() {
    var nameValue = $("#name").val();

    if (nameValue.length < 3 || nameValue.length > 15) {
        $("#nameError").text("Name mush be 3 to 15 characters").css("color", "red");
        return false;
    } else {
        $("#nameError").text(" ");
        return true;
    }
};

function emailValidation() {
    var emailValue = $("#email").val();

    if (emailValue.length <= 0) {
        $("#emailError").text("Email can't be null able").css("color", "red");
        return false;
    } else {
        $("#emailError").text(" ");
        return true;
    }
};

function phoneValidation() {
    var phoneValue = $("#phone").val();

    if (phoneValue.length < 11) {
        $("#phoneError").text("Phone number must be 11 numbers").css("color", "red");
        return false;
    } else {
        $("#phoneError").text(" ");
        return true;
    }
};

function passwordValidation() {
    var passwordValue = $("#password").val();

    if (passwordValue.length < 6) {
        $("#passwordError").text("Password at least 6 characters").css("color", "red");
        return false;
    } else {
        $("#passwordError").text(" ");
        return true;
    }
};

function confirmPasswordValidation() {
    var passwordValue = $("#password").val();
    var confirmPasswordValue = $("#confirmPassword").val();

    if (!(passwordValue == confirmPasswordValue)) {
        $("#confirmPasswordError").text("Password does not match").css("color", "red");
        return false;
    } else {
        $("#confirmPasswordError").text("OK").css("color", "green");
        return true;
    }
};

$("#name").keyup(function () {
    nameValidation();
});

$("#email").blur(function () {
    emailValidation();
});

$("#phone").keyup(function () {
    phoneValidation();
});

$("#password").blur(function () {
    passwordValidation();
});

$("#confirmPassword").keyup(function () {
    confirmPasswordValidation();
});

$("#registrationForm").submit(function () {
    if (nameValidation() == true && emailValidation() == true && phoneValidation() == true && passwordValidation() == true && confirmPasswordValidation() == true) {
        return true;
    } else {
        return false;
    }
});