function is_email_valid(email) {

    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);    

}

function is_phone_valid(phone) {

    var regex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
    return regex.test(phone);    

}

function is_username_valid(uname) {

    var re = /^[a-z]{5,9}$/;
    return re.test(uname);    

}

function is_password_valid(pw) {

    var re = /^([a-zA-Z0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(pw);    

}
