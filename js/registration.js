$(document).ready(function () {
    var re = /\S+@\S+\.\S+/;

    localStorage.setItem('email', 'admin@gmail.com');
    localStorage.setItem('pw', 'qwerty123');
    $('#btn-se-connecter').on('click', function () {
        if ($('#login-email')[0].value !== '' && $('#login-password')[0].value !== '' && re.test($('#login-email')[0].value) !== false) {
            var storedEmail = localStorage.getItem('email');
            var storedPw = localStorage.getItem('pw');
            if (storedEmail !== $('#login-email')[0].value || storedPw !== $('#login-password')[0].value) {
                alert('Incorrect email or password');
                $('#registrModal').modal('show');
                $('#login-email')[0].value = '';
                $('#login-password')[0].value = '';
            } else {
                alert('You are loged in.');
                $('.d-login').each(function (index, item) {
                    item.style.display = 'none';
                });
                $('.is-login').each(function (index, item) {
                    item.style.display = 'block';
                });
                $('.is-login-opacity').each(function (index, item) {
                    item.style.opacity = 1;
                });
                $('#login-email')[0].value = '';
                $('#login-password')[0].value = '';
                $('#registrModal').modal('hide')
            }
        }
    });
    $('.btn-registr-modal-close').on('click', function () {
        $('#registrModal').modal('hide')
    });

    $(document).on('input', 'input[type=email]', function () {
        var warningMessage = $(this).next()[0];
        if (re.test($(this)[0].value) === false && $(this)[0].value !== '') {
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }
    })

});