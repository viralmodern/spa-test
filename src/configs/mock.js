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
        textContent: 'Account recovery. Recover your Google Account. Email or phone. Type the text you hear or see. Next. Forgot email? ‪Afrikaans‬. ‪azərbaycan‬. ‪català‬. ‪Čeština‬.',
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
    profile: {
        type: 'profile',
        textContent: "A resume profile is a short summary of your work experience, skills, achievements, and goals. It's a professional introduction to your resume and it shows off your ...",
        linkTitle: 'Show Profile',
        fields: [
            {
                label: 'Email',
                name: 'email',
                model: 'input',
                required: true,
                rule: [RULES.EMAIL.TYPE],
                readOnly: true,
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
            
        ]
    },
    changePassword: {
        type: 'changePassword',
        textContent: 'CAPTCHA stands for the Completely Automated Public Turing test to tell Computers and Humans Apart. CAPTCHAs are tools you can use to differentiate between real users and automated users, such as bots.',
        linkTitle: 'Please Enter Captcha',
        fields: []
    },
    

}