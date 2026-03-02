function onChangeEmailemail()
{

}

const form = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password')
}