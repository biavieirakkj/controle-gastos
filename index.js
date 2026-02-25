
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
        if(!email)
        {
            form.emailRequiredError().style.display = "block";
        } else {
            form.emailRequiredError().style.display = "none";
        }

        if(validateEmail(email))
        {
            form.emailInvalidError().style.display = "none";
        } else {
            document.getElementById('email-invalid-error').style.display = "block";
        }

    }

    function togglePassWordErrors()
    {
        const password = form.password().value;

        if(!password)
        {
            document.getElementById('password-required-error').style.display = "block";
        } else {
            document.getElementById('password-required-error').style.display = "none";
        }
    }

    function toggleButtonsDisable()
    {
        const emailValid = isEmailValid();
        document.getElementById('recover-password-button').disabled = !emailValid;

        const passwordValid = isPasswordValid();
        document.getElementById('login-button').disabled = !emailValid || !passwordValid;
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

    function validateEmail(email)
    {
        return /\S+@\S+\.\S+/.test(email);
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