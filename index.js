
    function onChangeEmail()
    {
        toggleButtonsDisable();
        toggleEmailErrors();
    }

    function onChangePassword()
    {
        togglePassWordErrors();
        toggleButtonsDisable();
    }

    function login()
    {
        firebase.auth().signInWithEmailAndPassword(
            form.email().value, form.password().value
        ).then(responde => {
        window.location.href = "pages/home/home.html";
        }).catch(error => {
            console.log('error', error)
        });
    }

    function register()
    {
        window.location.href = "pages/register/register.html";
    }

    function isEmailValid()
    {
        const email = form.email().value;

        if (!email)
        {
            return false;
        }
        return validateEmail(email);
    }

    function toggleEmailErrors()
    {
        const email = form.email().value;

        form.emailRequiredError().style.display = email ? "none" : "block";
        form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    }

    function togglePassWordErrors()
    {
        const password = form.password().value;

        form.passwordRequiredError().style.display = password ? "none" : "block";
    }

    function toggleButtonsDisable()
    {
        const emailValid = isEmailValid();
        const passwordValid = isPasswordValid();

        form.recoverPassword().disabled = !emailValid;
        form.loginButtom().disabled = !emailValid || !passwordValid;
    }

    function isPasswordValid()
    {
        const password = form.password().value;

        if (!password)
        {
            return false;
        }
        return true;
    }

    const form = { 
        email: () => document.getElementById('email'),
        emailInvalidError: () => document.getElementById('email-invalid-error'),
        emailRequiredError: () => document.getElementById('email-required-error'),
        loginButtom: () => document.getElementById('login-button'),
        password: () => document.getElementById('password'),
        passwordRequiredError: () => document.getElementById('password-required-error'),
        recoverPassword: () => document.getElementById('recover-password-button')
    }