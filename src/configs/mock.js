export const RULES = {
    EMAIL: {
        TYPE: 'email',
    }
}
export const typesDialog = {
    login: {
        type: 'login',
        textContent: 'A login is a set of credentials used to authenticate a user. Most often, these consist of a username and password. However, a login may include other information, ',
        linkTitle: 'Log In',
        fields: [
           
            {
                label: 'Email',
                name: 'email',
                model: 'input',
                required: true,
                rule: [RULES.EMAIL.TYPE],
                vBind: { class: 'field-input', type: 'text' }
            },
            {
                label: 'Password',
                name: 'password',
                model: 'input',
                required: true,
                vBind: { class: 'field-input', type: 'password' }
            },
            
            
            
        ]
    },
    signup: {
        type: 'signup',
        textContent: 'A signup page (also known as a registration page) enables users and organizations to independently register and gain access to your system. It is common to have multiple signup pages depending on the types of people and organizations you want to register',
        linkTitle: 'Sign Up',
        fields: [
            
            {
                label: 'Email',
                name: 'email',
                model: 'input',
                required: true,
                rule: [RULES.EMAIL.TYPE],
                vBind: { class: 'field-input', type: 'text' }
            },
            {
                label: 'First Name',
                name: 'first_name',
                model: 'input',
                required: true,
                vBind: { class: 'field-input', type: 'text' }
            },
            {
                label: 'Last Name',
                name: 'last_name',
                model: 'input',
                required: true,
                vBind: { class: 'field-input', type: 'text' }
            },
            
            {
                label: 'Password',
                name: 'password',
                model: 'input',
                required: true,
                vBind: { class: 'field-input', type: 'password' }
            },
            {
                label: 'Re-Password',
                name: 're_password',
                model: 'input',
                compareIn: 'password',
                required: true,
                vBind: { class: 'field-input', type: 'password' }
            },
        ]
    },
    forgotPassword: {
        type: 'forgotPassword',
        textContent: 'Account recovery. Recover your Google Account. Email or phone. Type the text you hear or see. Next. Forgot email? ???Afrikaans???. ???az??rbaycan???. ???catal?????. ?????e??tina???.',
        linkTitle: 'Forgot Password?',
        fields: [
            {
                label: 'Email',
                name: 'email',
                model: 'input',
                required: true,
                rule: [RULES.EMAIL.TYPE],
                vBind: { class: 'field-input', type: 'text' }
            },
        ]
    },

}